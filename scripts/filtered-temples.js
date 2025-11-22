const year = document.querySelector("#current-year");

// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

const mainnav = document.querySelector('.header');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "Seattle Washington",
        location: "Seattle, Washington, United States",
        dedicated: "1980, November, 17",
        area: 110000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seattle-washington/400x250/seattle-temple-lds-988461-wallpaper.jpg"
    },
    {
        templeName: "Phoenix Arizona",
        location: "Phoenix, Arizona, United States",
        dedicated: "2014, November, 16",
        area: 64870,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/pheonix-arizona/400x250/phoenix-arizona-temple-exterior-1300742-wallpaper.jpg"
    }

    // Add more temple objects here...
];

let templeList = document.getElementById("templeList");

for (let i = 0; i < temples.length; i++) {
    templeList.innerHTML += `<figure><h2>${temples[i].templeName}</h2>
                <p><strong>Location:</strong> ${temples[i].location}</p>
                <p><strong>Dedicated:</strong> ${temples[i].dedicated}</p>
                <p><strong>Area:</strong> ${temples[i].area.toLocaleString()} sq ft</p>
                <img src=${temples[i].imageUrl} alt="${temples[i].templeName} Temple" loading="lazy"/>
            </figure>`;
    ;
}

const home = document.querySelector('#home');
const old = document.querySelector('#old');
const newtemples = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');

old.addEventListener('click', () => {
    templeList.innerHTML = '';

    for (let i = 0; i < temples.length; i++) {
        if (temples[i].dedicated < "1900, January, 1") {
            templeList.innerHTML += `<figure><h2>${temples[i].templeName}</h2>
                <p><strong>Location:</strong> ${temples[i].location}</p>
                <p><strong>Dedicated:</strong> ${temples[i].dedicated}</p>
                <p><strong>Area:</strong> ${temples[i].area.toLocaleString()} sq ft</p>
                <img src=${temples[i].imageUrl} alt="${temples[i].templeName} Temple" loading="lazy"/>
            </figure>`;
            ;
        }
    }
});

newtemples.addEventListener('click', () => {
    templeList.innerHTML = '';

    for (let i = 0; i < temples.length; i++) {
        if (temples[i].dedicated >= "2000, January, 1") {
            templeList.innerHTML += `<figure><h2>${temples[i].templeName}</h2>
                <p><strong>Location:</strong> ${temples[i].location}</p>
                <p><strong>Dedicated:</strong> ${temples[i].dedicated}</p>
                <p><strong>Area:</strong> ${temples[i].area.toLocaleString()} sq ft</p>
                <img src=${temples[i].imageUrl} alt="${temples[i].templeName} Temple" loading="lazy"/>
            </figure>`;
            ;
        }
    }
});

large.addEventListener('click', () => {
    templeList.innerHTML = '';

    for (let i = 0; i < temples.length; i++) {
        if (temples[i].area > 90000) {
            templeList.innerHTML += `<figure><h2>${temples[i].templeName}</h2>
                <p><strong>Location:</strong> ${temples[i].location}</p>
                <p><strong>Dedicated:</strong> ${temples[i].dedicated}</p>
                <p><strong>Area:</strong> ${temples[i].area.toLocaleString()} sq ft</p>
                <img src=${temples[i].imageUrl} alt="${temples[i].templeName} Temple" loading="lazy"/>
            </figure>`;
            ;
        }
    }
});

small.addEventListener('click', () => {
    templeList.innerHTML = '';

    for (let i = 0; i < temples.length; i++) {
        if (temples[i].area < 10000) {
            templeList.innerHTML += `<figure><h2>${temples[i].templeName}</h2>
                <p><strong>Location:</strong> ${temples[i].location}</p>
                <p><strong>Dedicated:</strong> ${temples[i].dedicated}</p>
                <p><strong>Area:</strong> ${temples[i].area.toLocaleString()} sq ft</p>
                <img src=${temples[i].imageUrl} alt="${temples[i].templeName} Temple" loading="lazy"/>
            </figure>`;
            ;
        }
    }
});

home.addEventListener('click', () => {
    templeList.innerHTML = '';
    for (let i = 0; i < temples.length; i++) {
        templeList.innerHTML += `<figure><h2>${temples[i].templeName}</h2>
                <p><strong>Location:</strong> ${temples[i].location}</p>
                <p><strong>Dedicated:</strong> ${temples[i].dedicated}</p>
                <p><strong>Area:</strong> ${temples[i].area.toLocaleString()} sq ft</p>
                <img src=${temples[i].imageUrl} alt="${temples[i].templeName} Temple" loading="lazy"/>
            </figure>`;
        ;
    }
});