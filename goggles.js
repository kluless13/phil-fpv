const usb = require('usb');

// Replace these with the actual vendorId and productId of the DJI Goggles
const DJI_GOGGLES_VENDOR_ID = 0x1234;  // Example value
const DJI_GOGGLES_PRODUCT_ID = 0x5678; // Example value

function findGoggles() {
    // Find the device using the vendorId and productId
    const goggles = usb.findByIds(DJI_GOGGLES_VENDOR_ID, DJI_GOGGLES_PRODUCT_ID);
    
    if (goggles) {
        console.log("DJI Goggles found!");
        return goggles;
    } else {
        console.log("DJI Goggles not found.");
        return null;
    }
}

// Test the function
findGoggles();
