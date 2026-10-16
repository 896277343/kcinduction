from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "pics" / "pics"
OUTPUT = ROOT / "public" / "images" / "kc" / "home"
OUTPUT.mkdir(parents=True, exist_ok=True)

ASSETS = [
    ("fifth-generation-production-banner2.webp", "banner2.jpg", (2000, 1000), (0.50, 0.50), 84),
    ("heat-treatment.webp", "Heat Treatment.jpg", (1200, 800), (0.50, 0.50), 82),
    ("brazing-joining.webp", "Brazing & Joining.png", (1200, 800), (0.50, 0.56), 84),
    ("forging-forming.webp", "Forging & Forming.jpg", (1200, 800), (0.50, 0.52), 84),
    ("custom-process-heating.webp", "Custom Process Heating.png", (1200, 800), (0.50, 0.50), 84),
]

for output_name, source_name, size, centering, quality in ASSETS:
    with Image.open(SOURCE / source_name) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        fitted = ImageOps.fit(image, size, Image.Resampling.LANCZOS, centering=centering)
        fitted.save(OUTPUT / output_name, "WEBP", quality=quality, method=6)
        print(f"{output_name}: {fitted.width}x{fitted.height}")

# Use the standalone KC brand mark from the site logo as the browser icon.
with Image.open(ROOT / "public" / "images" / "kc" / "logo.webp") as logo:
    mark = logo.convert("RGBA").crop((0, 0, 58, 55))
    canvas = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    mark.thumbnail((56, 56), Image.Resampling.LANCZOS)
    canvas.alpha_composite(mark, ((64 - mark.width) // 2, (64 - mark.height) // 2))
    canvas.save(ROOT / "app" / "icon.png", "PNG", optimize=True)
    canvas.save(ROOT / "app" / "favicon.ico", "ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("favicon: KC brand mark")
