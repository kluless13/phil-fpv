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

# Clone the phil-fpv repository (if not already cloned)
if [ ! -d "phil-fpv" ]; then
    git clone https://github.com/kluless13/phil-fpv.git
fi

# Navigate to the cloned repository directory
cd phil-fpv

# Install Node.js dependencies
npm install usb

# Provide feedback
echo "Installation complete. You can now run your Node.js application with ./index.js! Hope this works mate!"