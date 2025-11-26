const reviewCountDisplay = document.querySelector(".reviews");

let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;


reviewCountDisplay.textContent = reviewCount;


reviewCount += 1;

window.localStorage.setItem("reviewCount-ls", reviewCount);