from PIL import Image
import os

for i in range(1, 9):
    path = f"public/images/koblaq/logo_page_{i}.png"
    if os.path.exists(path):
        img = Image.open(path)
        r, g, b = img.getpixel((0, 0))[:3]
        hex_color = "#{:02x}{:02x}{:02x}".format(r, g, b)
        print(f"Page {i}: {hex_color}")
