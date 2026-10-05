import os
from PIL import Image, ImageDraw

os.makedirs("public/icons", exist_ok=True)

# Grid representing an iconic retro arcade invader (11x8)
INVADER_PIXELS = [
    "  #     #  ",
    "   #   #   ",
    "  #######  ",
    " ## ### ## ",
    "###########",
    "# ####### #",
    "# #     # #",
    "   ## ##   ",
]

def create_arcade_icon(size):
    img = Image.new("RGBA", (size, size), (7, 11, 20, 255)) # #070b14
    draw = ImageDraw.Draw(img)

    # Outer neon border
    pad = size // 12
    corner_radius = size // 6
    border_width = max(2, size // 32)

    # Neon glow layers
    glow_color = (6, 182, 212, 60) # Cyan glow
    draw.rounded_rectangle(
        [pad - border_width, pad - border_width, size - pad + border_width, size - pad + border_width],
        radius=corner_radius + border_width,
        outline=glow_color,
        width=border_width * 2
    )

    # Main neon border
    border_color = (6, 182, 212, 255) # #06b6d4
    draw.rounded_rectangle(
        [pad, pad, size - pad, size - pad],
        radius=corner_radius,
        outline=border_color,
        width=border_width
    )

    # Inner decorative subtle frame
    inner_pad = pad + size // 18
    draw.rounded_rectangle(
        [inner_pad, inner_pad, size - inner_pad, size - inner_pad],
        radius=corner_radius // 2,
        outline=(217, 70, 239, 120), # Magenta accent
        width=max(1, size // 64)
    )

    # Pixel Art Space Invader in center
    grid_w = len(INVADER_PIXELS[0])
    grid_h = len(INVADER_PIXELS)
    pixel_size = max(1, (size - pad * 3) // 12)

    total_w = grid_w * pixel_size
    total_h = grid_h * pixel_size
    start_x = (size - total_w) // 2
    start_y = (size - total_h) // 2

    # Draw invader pixels
    for row_idx, row in enumerate(INVADER_PIXELS):
        for col_idx, char in enumerate(row):
            if char == '#':
                x = start_x + col_idx * pixel_size
                y = start_y + row_idx * pixel_size
                # Cyan body with subtle highlight
                draw.rectangle(
                    [x, y, x + pixel_size - 1, y + pixel_size - 1],
                    fill=(34, 211, 238, 255) # Cyan-400
                )

    # Add small bottom indicator / arcade text dot or accents
    accent_y = start_y + total_h + pixel_size
    if accent_y + pixel_size < size - pad:
        dot_w = pixel_size * 2
        dot_x = (size - dot_w) // 2
        draw.rectangle(
            [dot_x, accent_y, dot_x + dot_w, accent_y + max(2, pixel_size // 2)],
            fill=(245, 158, 11, 255) # Amber accent
        )

    # Convert to RGB for best PWA compatibility
    rgb_img = Image.new("RGB", (size, size), (7, 11, 20))
    rgb_img.paste(img, mask=img.split()[3])
    return rgb_img

for tamanho, nome in [
    (192, "icon-192.png"),
    (512, "icon-512.png"),
    (192, "apple-touch-icon.png"),
]:
    icon = create_arcade_icon(tamanho)
    icon.save(f"public/icons/{nome}", format="PNG")
    print("Gerado:", nome, f"({tamanho}x{tamanho})")
