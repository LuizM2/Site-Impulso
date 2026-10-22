#!/usr/bin/env python3
"""Monta public/ para o deploy estático: copia as páginas, os arquivos da raiz e as pastas servidas."""
from __future__ import annotations

import shutil
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
PUBLIC_DIR = ROOT_DIR / "public"
ROOT_PATTERNS = ("*.html", "*.css", "*.js", "*.png", "*.txt", "*.xml")
SERVED_DIRS = ("images", "ofertas", "casos", "cardapio")


def main() -> None:
    if PUBLIC_DIR.exists():
        shutil.rmtree(PUBLIC_DIR)
    PUBLIC_DIR.mkdir(parents=True)

    for pattern in ROOT_PATTERNS:
        for file_path in ROOT_DIR.glob(pattern):
            shutil.copy2(file_path, PUBLIC_DIR / file_path.name)

    for name in SERVED_DIRS:
        source = ROOT_DIR / name
        if source.exists():
            shutil.copytree(source, PUBLIC_DIR / name)

    print("Build concluído: public/ pronto, só em português.")


if __name__ == "__main__":
    main()
