from pathlib import Path
from PIL import Image, ImageChops, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "pics" / "pics" / "pp"
OUTPUT = ROOT / "public" / "images" / "kc" / "why-us" / "partners"
OUTPUT.mkdir(parents=True, exist_ok=True)

for source in sorted(SOURCE.iterdir()):
    if source.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        continue

    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGBA")
        white = Image.new("RGBA", image.size, (255, 255, 255, 255))
        difference = ImageChops.difference(image, white).convert("L")
        difference = difference.point(lambda value: 255 if value > 12 else 0)
        content_box = difference.getbbox()
        if content_box:
            image = image.crop(content_box)

        # Present every brand at a consistent visual scale inside a white card.
        image.thumbnail((280, 92), Image.Resampling.LANCZOS)
        canvas = Image.new("RGB", (360, 150), "white")
        rgba_canvas = canvas.convert("RGBA")
        rgba_canvas.alpha_composite(image, ((360 - image.width) // 2, (150 - image.height) // 2))
        output = OUTPUT / f"{source.stem.lower()}.webp"
        rgba_canvas.convert("RGB").save(output, "WEBP", quality=88, method=6)
        print(f"{source.name} -> {output.name}: {image.width}x{image.height}")
