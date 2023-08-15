# phil-fpv

The `phil-fpv` project interfaces with DJI Goggles to capture and process video streams over USB. This README provides instructions on setting up the project and an overview of its functionality.

## Getting Started

### Prerequisites

- Node.js and npm
- ffmpeg (with ffplay)
- Git

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kluless13/phil-fpv.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd phil-fpv
   ```

3. **Run the Installation Script**:
   - For Linux (Ubuntu/Debian):
     ```bash
     chmod +x install.sh
     ./install.sh
     ```

   - For macOS:
     ```bash
     chmod +x install_mac.sh
     ./install_mac.sh
     ```

4. **Execute the Program**:
   ```bash
   ./index.js
   ```

## Overview of Functionality

### DJI Goggles Interface

The application identifies DJI Goggles connected via USB using specific vendor and product IDs. Once identified, it establishes communication with the goggles to capture raw video data.

### Data Processing

Incoming data from the goggles is processed to identify specific byte sequences, such as the beginning of an h264 frame. The application buffers this data and searches for known patterns to better understand the video stream's structure.

### Video Streaming

The application provides two primary modes for video streaming:

1. **Preview Mode**: Users can preview the video stream in real-time using `ffplay`. This mode is useful for immediate feedback without saving the video.

2. **Save Mode**: The video stream can be piped to `ffmpeg` to produce an `.mp4` file, allowing users to save and review the captured footage.

### Error Handling

The application includes error handling mechanisms to gracefully manage potential issues, such as the goggles not being detected, data processing errors, or streaming interruptions.

## Future Enhancements

- Improved data processing to better understand the video stream's structure.
- Enhanced error handling and recovery mechanisms.
- Support for multiple goggles and devices.
- Integration with other video processing tools and platforms.

---
Phil, mein Freund, so treu und klar,
Mit dir an meiner Seite, ist alles wunderbar.
Dankbar bin ich, für jeden Moment,
Den wir teilen, wo immer man uns kennt.

Wie Spongebob und Patrick im tiefen Meer,
Gehen wir durchs Leben, Seite an Seite, immer her.
In Freude und Lachen, in Spaß und in Spiel,
Bin ich so dankbar für jeden Augenblick mit Phil.

Deine Freundschaft ist ein Geschenk, so rein,
Mit dir, lieber Phil, will ich immer befreundet sein.
