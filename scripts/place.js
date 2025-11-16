const year = document.querySelector("#current-year");

// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

let temp = 10;
let wind = 5.2;

function calculateWindChill(t, s) {
    if (t <= 10 && s > 4.8) {
        let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
        return chill.toFixed(2);
    } else {
        return "N/A";
    }
}

document.getElementById("wind-chill").innerHTML = `Wind Chill: <span class="highlight">${calculateWindChill(temp, wind)}</span>`;