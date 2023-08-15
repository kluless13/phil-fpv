# phil-fpv
FPV CLI tools for my friend
Certainly! Let's break down the provided code in the `index.js` file and then discuss what's left to achieve based on the provided description.

### What the `index.js` code does:

1. **Imports Necessary Modules**: 
   - `fs`: Node.js built-in module for file system operations.
   - `exec`: Allows execution of shell commands.
   - `usb`: Assumed to be an npm package for USB device interactions.

2. **Magic Packet Definition**: 
   - Defines the magic packet `0x524d5654` that needs to be sent to the goggles.

3. **Function Definitions**:
   - `findGoggles()`: Placeholder function to find the DJI Goggles based on some criteria (e.g., `vendorId`, `productId`).
   - `startStream(goggles, outputPath, preview)`: Initiates the video stream by:
     - Sending the magic packet to the goggles.
     - Writing the received data to a file.
     - Optionally piping the data to `ffplay` for live preview.

4. **Command Line Argument Parsing**:
   - Parses command-line arguments to determine the output path and whether to preview the stream.

5. **Main Execution**:
   - Finds the goggles.
   - If goggles are found, it starts the video stream.

### What's left to achieve:

1. **Identifying the Goggles**: 
   - The `findGoggles()` function is a placeholder. You need to implement the logic to identify the DJI Goggles among other connected USB devices using their `vendorId` and `productId`.

2. **Data Processing**:
   - The code currently writes all received data to a file or pipes it to `ffplay`. However, there's no processing of the data to identify the `0x00010910` sequence or the 6-byte frame counter.

3. **Streaming to ffmpeg**:
   - The code provides a way to preview the stream using `ffplay`, but there's no implementation for piping the data to `ffmpeg` to produce an `.mp4` file.

4. **Error Handling**:
   - Robust error handling is needed, especially for USB interactions.

5. **Additional Features**:
   - Implementing the `-o` and `-f` combination.
   - Handling scenarios where the goggles are not found or when there are data transfer errors.
   - Exploring the unknown data format further.
   - Implementing the "Nice to have" features from the TODO list, such as more error handling, waiting for goggles to connect, handling connection loss, supporting multiple goggles, and potentially rewriting the code in C.

In summary, the provided `index.js` code lays the foundation for the described functionality but requires further development to fully realize the described features and handle various scenarios robustly.