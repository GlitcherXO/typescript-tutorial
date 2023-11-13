"use strict";
/********************
 * HTMLIMAGEELEMENT *
 ********************/
// This example is for educational purposes, but it is not going to work. 
const imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
}
else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}
//# sourceMappingURL=04-HTMLImageElement.js.map