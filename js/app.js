import { filterArray } from "./utils.js";
import { works } from "./data.js";

const mainBottomRight = document.querySelector(".main__bottom-right");
const mainTopLeft = document.querySelector(".main__top-left");
const mainTopRight = document.querySelector(".main__top-right");
const mainBottomLeft = document.querySelector(".main__bottom-left");
const contactTopLeft = document.querySelector(".contact__top-left");
const contactLeftCenter = document.querySelector(".contact__left-center");
const contactTopCenter = document.querySelector(".contact__top-center");
const portfolioBottomLeft = document.querySelector(".portfolio__bottom-left");
const portfolioBottomCenter = document.querySelector(
  ".portfolio__bottom-center"
);
const portfolioLeftCenter = document.querySelector(".portfolio__left-center");
const aboutBottomRight = document.querySelector(".about__bottom-right");
const aboutBottomCenter = document.querySelector(".about__bottom-center");
const aboutRightCenter = document.querySelector(".about__right-center");
const blogTopRight = document.querySelector(".blog__top-right");
const blogTopCenter = document.querySelector(".blog__top-center");
const blogRightCenter = document.querySelector(".blog__right-center");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const blog = document.querySelector(".blog");
const contact = document.querySelector(".contact");
const main = document.querySelector(".main");
const portfolioWorkItems = document.querySelectorAll(".portfolio__work-item");
const portfolioWorkExampleContainer = document.querySelector(
  ".portfolio__work-example-container"
);
const containerLoader = document.querySelector(".container-loader");
const colors = document.querySelectorAll(".color-box__option");
const root = document.documentElement;

mainBottomRight.addEventListener("click", (event) => {
  console.log(contact, main);
  contact.dataset.xPos = 0;
  contact.dataset.yPos = 0;
  main.dataset.xPos = -1;
  main.dataset.yPos = 1;
});

mainTopLeft.addEventListener("click", () => {
  about.dataset.xPos = 0;
  about.dataset.yPos = 0;
  main.dataset.xPos = 1;
  main.dataset.yPos = -1;
});

mainTopRight.addEventListener("click", () => {
  portfolio.dataset.xPos = 0;
  portfolio.dataset.yPos = 0;
  main.dataset.xPos = -1;
  main.dataset.yPos = -1;
});

mainBottomLeft.addEventListener("click", () => {
  blog.dataset.xPos = 0;
  blog.dataset.yPos = 0;
  main.dataset.xPos = 1;
  main.dataset.yPos = 1;
});

contactTopLeft.addEventListener("click", () => {
  contact.dataset.xPos = 1;
  contact.dataset.yPos = -1;
  main.dataset.xPos = 0;
  main.dataset.yPos = 0;
});

contactLeftCenter.addEventListener("click", () => {
  contact.dataset.xPos = 1;
  contact.dataset.yPos = 0;
  blog.dataset.xPos = 0;
  blog.dataset.yPos = 0;
});

contactTopCenter.addEventListener("click", () => {
  contact.dataset.xPos = 0;
  contact.dataset.yPos = -1;
  portfolio.dataset.xPos = 0;
  portfolio.dataset.yPos = 0;
});

portfolioBottomLeft.addEventListener("click", () => {
  portfolio.dataset.xPos = 1;
  portfolio.dataset.yPos = 1;
  main.dataset.xPos = 0;
  main.dataset.yPos = 0;
});

portfolioBottomCenter.addEventListener("click", () => {
  portfolio.dataset.xPos = 0;
  portfolio.dataset.yPos = 1;
  contact.dataset.xPos = 0;
  contact.dataset.yPos = 0;
});

portfolioLeftCenter.addEventListener("click", () => {
  portfolio.dataset.xPos = 1;
  portfolio.dataset.yPos = 0;
  about.dataset.xPos = 0;
  about.dataset.yPos = 0;
});

aboutBottomRight.addEventListener("click", () => {
  about.dataset.xPos = -1;
  about.dataset.yPos = 1;
  main.dataset.xPos = 0;
  main.dataset.yPos = 0;
});

aboutBottomCenter.addEventListener("click", () => {
  about.dataset.xPos = 0;
  about.dataset.yPos = 1;
  blog.dataset.xPos = 0;
  blog.dataset.yPos = 0;
});

aboutRightCenter.addEventListener("click", () => {
  about.dataset.xPos = 1;
  about.dataset.yPos = 0;
  portfolio.dataset.xPos = 0;
  portfolio.dataset.yPos = 0;
});

blogTopRight.addEventListener("click", () => {
  blog.dataset.xPos = -1;
  blog.dataset.yPos = -1;
  main.dataset.xPos = 0;
  main.dataset.yPos = 0;
});

blogTopCenter.addEventListener("click", () => {
  blog.dataset.xPos = 0;
  blog.dataset.yPos = -1;
  about.dataset.xPos = 0;
  about.dataset.yPos = 0;
});

blogRightCenter.addEventListener("click", () => {
  blog.dataset.xPos = 1;
  blog.dataset.yPos = 0;
  contact.dataset.xPos = 0;
  contact.dataset.yPos = 0;
});

portfolioWorkItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    document
      .querySelector(".portfolio__work-item--active")
      .classList.remove("portfolio__work-item--active");
    item.classList.add("portfolio__work-item--active");

    let filterMethod = event.target.dataset.filter;
    console.log(filterMethod);
    console.log(filterArray(works, filterMethod));
    let filteredWorksArray = filterArray(works, filterMethod);

    portfolioWorkExampleContainer.innerHTML = "";
    filteredWorksArray.forEach((work) => {
      portfolioWorkExampleContainer.insertAdjacentHTML(
        "beforeend",
        `
      <div class="col-12 col-md-6 col-xl-4">
      <div class="portfolio__work-example-1">
        <a href="${work.href}"><img class="portfolio__work-example-1-img" src="${work.img}" alt="portfolio"></a>
        <div class="portfolio__work-example-1-info">
        <a href="${work.href}" class="portfolio__see">مشاهده</a>
          <div class="portfolio__work-example-1-info-right">
            <p class="portfolio__work-example-1-info-right-text">
              <i class="fas fa-filter portfolio__work-example-1-info-right-icon"></i>
              ${work.text}
            </p>
            <p class="portfolio__work-example-1-info-right-title">${work.title}</p>
          </div>
          <div class="portfolio__work-example-1-info-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" class="icon">
		    	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		    		<polygon points="0 0 24 0 24 24 0 24"></polygon>
		    		<rect fill="#000000" opacity="0.3" x="2" y="4" width="20" height="16" rx="2"></rect>
		    		<polygon fill="#000000" opacity="0.3" points="4 20 10.5 11 17 20"></polygon>
		    		<polygon fill="#000000" points="11 20 15.5 14 20 20"></polygon>
		    		<circle fill="#000000" opacity="0.3" cx="18.5" cy="8.5" r="1.5"></circle>
		    	</g>
		</svg>
          </div>
        </div>
      </div>
    </div>`
      );
    });
  });
});

window.addEventListener("load", () => {
  //loader
  containerLoader.classList.add("hide");

  //portfolio
  portfolioWorkExampleContainer.innerHTML = "";
  works.forEach((work) => {
    portfolioWorkExampleContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="col-12 col-md-6 col-xl-4">
    <div class="portfolio__work-example-1">
    <a href="${work.href}"> <img class="portfolio__work-example-1-img" src="${work.img}" alt="portfolio"></a>
    <div class="portfolio__work-example-1-info">
    <a href="${work.href}" class="portfolio__see">مشاهده</a>
        <div class="portfolio__work-example-1-info-right">
          <p class="portfolio__work-example-1-info-right-text">
            <i class="fas fa-filter portfolio__work-example-1-info-right-icon"></i>
            ${work.text}
          </p>
          <p class="portfolio__work-example-1-info-right-title">${work.title}</p>
        </div>
        <div class="portfolio__work-example-1-info-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" class="icon">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <polygon points="0 0 24 0 24 24 0 24"></polygon>
          <rect fill="#000000" opacity="0.3" x="2" y="4" width="20" height="16" rx="2"></rect>
          <polygon fill="#000000" opacity="0.3" points="4 20 10.5 11 17 20"></polygon>
          <polygon fill="#000000" points="11 20 15.5 14 20 20"></polygon>
          <circle fill="#000000" opacity="0.3" cx="18.5" cy="8.5" r="1.5"></circle>
        </g>
  </svg>
        </div>
      </div>
    </div>
  </div>`
    );
  });
});

document.querySelectorAll(".setting-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    document.querySelectorAll(".change-setting-box ").forEach((box) => {
      box.classList.toggle("change-setting-box--active");
    });
  });
});

colors.forEach((color) => {
  color.addEventListener("click", (event) => {
    root.className = "";
    let selectionColor = event.target.dataset.color;
    switch (selectionColor) {
      case "red": {
        root.classList.add("red");
        break;
      }
      case "green": { 
        root.classList.add("green");
        break;
      }
      case "yellow": {
        root.classList.add("yellow");
        break;
      }
      case "blue": {
        root.classList.add("blue");
        break;
      }
      case "purple": {
        root.classList.add("purple");
        break;
      }
      case "orange": {
        root.classList.add("orange");
        break;
      }
    }
  });
});
