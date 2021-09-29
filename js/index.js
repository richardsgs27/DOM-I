const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Update the img for the cta
let cta = document.querySelector("#cta-img");
cta.setAttribute("src", siteContent["cta"]["img-src"]);

//Update the img for the main content
let main = document.querySelector(".middle-img");
main.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Update Nav
const nave = document.querySelectorAll("nav a");

nave[0].textContent = siteContent["nav"]["nav-item-1"];
nave[1].textContent = siteContent["nav"]["nav-item-2"];
nave[2].textContent = siteContent["nav"]["nav-item-3"];
nave[3].textContent = siteContent["nav"]["nav-item-4"];
nave[4].textContent = siteContent["nav"]["nav-item-5"];
nave[5].textContent = siteContent["nav"]["nav-item-6"];

//Update H1
const awesome = document.querySelector("h1");
awesome.textContent = siteContent["cta"]["h1"];

// Update button
const buttone = document.querySelector("button");
buttone.textContent = siteContent["cta"]['button'];

//Update main h4
const mainCont = document.querySelectorAll(".main-content .text-content h4");
mainCont[0].textContent = siteContent["main-content"]["features-h4"];
mainCont[1].textContent = siteContent["main-content"]["about-h4"];
mainCont[2].textContent = siteContent["main-content"]["services-h4"];
mainCont[3].textContent = siteContent["main-content"]["product-h4"];
mainCont[4].textContent = siteContent["main-content"]["vision-h4"];

//Update main text p
const mainText = document.querySelectorAll(".main-content .text-content p");
mainText[0].textContent = siteContent["main-content"]["features-content"];
mainText[1].textContent = siteContent["main-content"]["about-content"]; 
mainText[2].textContent = siteContent["main-content"]["services-content"];
mainText[3].textContent = siteContent["main-content"]["product-content"];
mainText[4].textContent = siteContent["main-content"]["vision-content"]; 

//Update Contact h4
const contactText = document.querySelector(".contact h4");
contactText.textContent = siteContent["contact"]["contact-h4"];

//update Contact p
const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//Update Footer
const footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"];





