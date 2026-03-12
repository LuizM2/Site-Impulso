#!/usr/bin/env python3
from __future__ import annotations

import re
import shutil
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parent.parent
PUBLIC_DIR = ROOT_DIR / "public"
LOCALE_SEGMENTS = ("pt-br", "en", "fr", "ja", "zh-cn")


def reset_public_dir() -> None:
    if PUBLIC_DIR.exists():
        shutil.rmtree(PUBLIC_DIR)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)


def copy_root_assets() -> None:
    for pattern in ("*.html", "*.css", "*.js", "*.png"):
        for file_path in ROOT_DIR.glob(pattern):
            shutil.copy2(file_path, PUBLIC_DIR / file_path.name)

    images_dir = ROOT_DIR / "images"
    if images_dir.exists():
        shutil.copytree(images_dir, PUBLIC_DIR / "images", dirs_exist_ok=True)


def should_prefix_asset(path: str) -> bool:
    cleaned = path.strip()
    if not cleaned:
        return False

    lowered = cleaned.lower()
    if lowered.startswith(("#", "mailto:", "tel:", "javascript:", "http://", "https://", "//", "/")):
        return False

    if ".html" in lowered:
        return False

    if lowered.startswith("images/"):
        return True

    for ext in (".css", ".js", ".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif", ".ico"):
        if lowered.endswith(ext):
            return True

    return False


def rewrite_html_for_locale(html_content: str) -> str:
    pattern = re.compile(r'(?P<prefix>\b(?:href|src)=["\'])(?P<value>[^"\']+)(?P<suffix>["\'])')

    def repl(match: re.Match[str]) -> str:
        prefix = match.group("prefix")
        value = match.group("value")
        suffix = match.group("suffix")
        if should_prefix_asset(value):
            return f"{prefix}../{value}{suffix}"
        return match.group(0)

    return pattern.sub(repl, html_content)


def generate_locale_paths() -> None:
    html_files = sorted(ROOT_DIR.glob("*.html"))

    for locale_segment in LOCALE_SEGMENTS:
        locale_dir = PUBLIC_DIR / locale_segment
        locale_dir.mkdir(parents=True, exist_ok=True)

        for html_file in html_files:
            original_html = html_file.read_text(encoding="utf-8")
            localized_html = rewrite_html_for_locale(original_html)
            destination = locale_dir / html_file.name
            destination.write_text(localized_html, encoding="utf-8")


def main() -> None:
    reset_public_dir()
    copy_root_assets()
    generate_locale_paths()
    print("Build concluido: public/ com rotas por idioma geradas.")


if __name__ == "__main__":
    main()
