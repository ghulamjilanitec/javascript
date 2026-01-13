let places = ["Pakistan", "iran", "ireland", "Sydney", "London"];

// Original array
console.log("Original order:", places);

// Alphabetical order (temporary)
console.log("Alphabetical order:", [...places].sort());

// Original array unchanged
console.log("Still original:", places);

// Reverse alphabetical order (temporary)
console.log("Reverse alphabetical:", [...places].sort().reverse());

// Original array unchanged
console.log("Still original:", places);

// Reverse original array permanently
places.reverse();
console.log("Reversed permanently:", places);

// Reverse again to original order
places.reverse();
console.log("Back to original:", places);

// Sort alphabetically permanently
places.sort();
console.log("Sorted permanently:", places);

// Reverse sorted array
places.reverse();
console.log("Reverse sorted permanently:", places);