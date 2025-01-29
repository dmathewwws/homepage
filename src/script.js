/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}

// Array of profile picture URLs
const profilePics = [
  "https://cdn.glitch.global/19129de7-9e65-4c13-b8ab-f21bd83e6c81/daniel-profile-pic.jpg",
  "https://cdn.glitch.global/19129de7-9e65-4c13-b8ab-f21bd83e6c81/hidden-profile-pic.jpg",
  "https://cdn.glitch.global/19129de7-9e65-4c13-b8ab-f21bd83e6c81/dan_3.jpg",
  "https://cdn.glitch.global/19129de7-9e65-4c13-b8ab-f21bd83e6c81/dan_4.jpg",
  "https://cdn.glitch.global/19129de7-9e65-4c13-b8ab-f21bd83e6c81/dan_5.jpg",
];

// Get the profile picture element
const profilePic = document.querySelector(".profile-pic");
let currentPicIndex = 0;

if (profilePic) {
  profilePic.onclick = function() {
    currentPicIndex = (currentPicIndex + 1) % profilePics.length;
    profilePic.src = profilePics[currentPicIndex];
  };
}

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
// let goto = (file, line) => {
//   window.parent.postMessage(
//     { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
//   );
// };
// // Get the file opening button from its class name
// const filer = document.querySelectorAll(".fileopener");
// filer.forEach((f) => {
//   f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
// });
