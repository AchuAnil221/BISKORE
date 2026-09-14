import fitz
import os

pdf_path = "Koblaq Logo files.pdf"
out_dir = "public/images/koblaq"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=300)
    out_path = f"{out_dir}/logo_page_{i+1}.png"
    pix.save(out_path)
    print(f"Saved {out_path}")

doc.close()
