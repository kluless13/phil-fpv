const MAGIC_SEQUENCE = Buffer.from('00010910', 'hex');
let dataBuffer = Buffer.alloc(0);

function processData(chunk) {
    // Append the new chunk to the buffer
    dataBuffer = Buffer.concat([dataBuffer, chunk]);

    // Search for the magic sequence
    let index = dataBuffer.indexOf(MAGIC_SEQUENCE);

    while (index !== -1) {
        // Check if there's enough data after the sequence for the frame counter
        if (dataBuffer.length >= index + MAGIC_SEQUENCE.length + 6) {
            const frameCounter = dataBuffer.slice(index + MAGIC_SEQUENCE.length, index + MAGIC_SEQUENCE.length + 6);
            console.log("Found sequence with frame counter:", frameCounter);

            // Remove processed data from the buffer
            dataBuffer = dataBuffer.slice(index + MAGIC_SEQUENCE.length + 6);
        } else {
            // Not enough data, wait for more
            break;
        }

        // Search for the next occurrence
        index = dataBuffer.indexOf(MAGIC_SEQUENCE);
    }
}

// Example usage
inEndpoint.on('data', (data) => {
    processData(data);
    // ... (rest of the code to write data to file or pipe to ffplay)
});
