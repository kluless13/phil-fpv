#!/bin/bash

# Check if Homebrew is installed, install if not
if test ! $(which brew); then
    echo "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Update Homebrew recipes
brew update

# Install Node.js and npm
brew install node

# Install ffmpeg (this will include ffplay)
brew install ffmpeg

# Assuming you're in the phil-fpv directory after cloning
# Install Node.js dependencies
npm install usb

# Check if Python is installed, if not, install it
if test ! $(which python3); then
    echo "Installing Python..."
    brew install python3
fi

# Install necessary Python libraries
pip3 install pyfiglet

# Display the ASCII art using the Python script
python3 phil.py

# Provide feedback
echo "Installation complete. You now have eyes! Hope this works mate!"
