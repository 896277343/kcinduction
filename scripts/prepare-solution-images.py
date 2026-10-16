from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "pics" / "pics"
OUTPUT = ROOT / "public" / "images" / "kc" / "solutions"

ASSETS = {
    "industrial-system.webp": "5th induction heating.JPG",
    "factory-assembly.webp": "Air-Cooling-Induction-Heating-Machine-with-Clamp-ma-3.jpg",
    "bearing-heating.webp": "Bearing heating (2).jpg",
    "bearing-shrink-fit.webp": "Bearing heating.jpg",
    "gear-hardening-cell.webp": "gear induction.jpg",
    "gear-hardening-detail.webp": "gear induction-2.jpg",
    "gear-production.webp": "gear induction-3.jpg",
    "crankshaft-tempering.webp": "Induction Annealing & Tempering-crankshaft.jpg",
    "pipe-casing-line.webp": "Induction Annealing & Tempering-oil casing.png",
    "blade-heating.webp": "induction Blade heating.jpg",
    "open-digital-power-supply.webp": "induction power supplier open look.jpg",
    "gear-shrink-fitting.webp": "induction-gear-shrink-fitting-machine.png",
    "pipe-local-heating.webp": "Induction_Heating_Equipment_For_Shrink_Fitting.jpg",
    "rotor-induction-heating.webp": "Rotor  Induction Weld.jpg",
    "wind-bolt-line.webp": "Wind-power-bolt-Induction-Hardening-Tempering-production-line-1-jpg.jpg",
}

OUTPUT.mkdir(parents=True, exist_ok=True)
for output_name, source_name in ASSETS.items():
    source_path = SOURCE / source_name
    with Image.open(source_path) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        image.thumbnail((1800, 1400), Image.Resampling.LANCZOS)
        image.save(OUTPUT / output_name, "WEBP", quality=82, method=6)
        print(f"{output_name}: {image.width}x{image.height}")
