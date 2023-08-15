import pyfiglet

def create_ascii_art():
    font = pyfiglet.Figlet(font = 'slant')  # You can specify a font with Figlet(font='fontname')
    ascii_art = font.renderText('Guten Tag Phil')
    print(ascii_art)

if __name__ == "__main__":
    create_ascii_art()
