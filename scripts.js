// Add your JavaScript functionality here if needed

document.addEventListener("DOMContentLoaded", function() {
    const showcaseHeading = document.querySelector("#showcase h1");
    const showcaseParagraph = document.querySelector("#showcase p");
  
    showcaseHeading.style.transform = "translateY(0)";
    showcaseParagraph.style.transform = "translateY(0)";
  
    showcaseHeading.addEventListener("mouseenter", () => {
      showcaseHeading.style.transform = "translateY(-10px)";
    });
    showcaseHeading.addEventListener("mouseleave", () => {
      showcaseHeading.style.transform = "translateY(0)";
    });
  
    showcaseParagraph.addEventListener("mouseenter", () => {
      showcaseParagraph.style.transform = "translateY(-10px)";
    });
    showcaseParagraph.addEventListener("mouseleave", () => {
      showcaseParagraph.style.transform = "translateY(0)";
    });
  });
  