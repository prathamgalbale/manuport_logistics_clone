const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navBar = document.querySelector(".navBar");
const body = document.querySelector("body");
const main = document.querySelector("main");
const logoText = document.querySelector(".logoText");
const logoSymbol = document.querySelector(".logoSymbol");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  navBar.classList.toggle("active");
  body.classList.toggle("active");
  main.classList.toggle("active");
  logoText.classList.toggle("active");
  logoSymbol.classList.toggle("active");
});

const mainTwoImage = document.querySelectorAll(".mainTwoImage");
const mainTwoParagraph = document.querySelectorAll(".mainTwoParagraph");
const MainTwoHeadingItem = document.querySelectorAll(".MainTwoHeadingItem");

let currentIndex = 0;
const intervalTime = 25000;

function showNextItem() {
  const previousIndex = currentIndex;
  currentIndex = currentIndex + 1;

  if (currentIndex === mainTwoParagraph.length) {
    currentIndex = 0;
  }

  showItem(currentIndex);

  mainTwoParagraph[currentIndex].querySelector(".line").style.width = "0";

  setTimeout(() => {
    mainTwoParagraph[currentIndex].querySelector(".line").style.width = "100%";
  }, 50);
}

setInterval(showNextItem, intervalTime);

function handleItemClick(index) {
  currentIndex = index;
  showItem(index);
}

function showItem(index) {
  mainTwoImage.forEach((image, idx) => {
    if (idx === index) {
      image.classList.add("visible");
    } else {
      image.classList.remove("visible");
    }
  });

  mainTwoParagraph.forEach((paragraph, idx) => {
    if (idx === index) {
      paragraph.classList.add("visible");
    } else {
      paragraph.classList.remove("visible");
    }
  });

  MainTwoHeadingItem.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add("visible");
    } else {
      item.classList.remove("visible");
    }
  });

  mainTwoParagraph[index].querySelector(".line").style.width = "0";

  setTimeout(() => {
    mainTwoParagraph[index].querySelector(".line").style.width = "100%";
  }, 50);
}

showItem(currentIndex);

MainTwoHeadingItem.forEach((item, index) => {
  item.addEventListener("click", () => handleItemClick(index));
});

const responsiveMainTwoImages = document.querySelectorAll(
  ".responsiveMainTwoImage"
);
const responsiveMainTwoParagraphs = document.querySelectorAll(
  ".responsiveMainTwoParagraph"
);
const responsiveMainTwoHeadings = document.querySelectorAll(
  ".responsiveMainTwoHeading"
);

let currentResponsiveIndex = 0;

responsiveMainTwoImages[0].classList.add("visibleTwo");

responsiveMainTwoParagraphs.forEach((paragraph, index) => {
  paragraph.addEventListener("click", () => {
    showResponsiveItem(index);
  });
});

responsiveMainTwoHeadings.forEach((heading, index) => {
  heading.addEventListener("click", () => {
    showResponsiveItem(index);
  });
});

function showResponsiveItem(index) {
  responsiveMainTwoImages.forEach((image) => {
    image.classList.remove("visibleTwo");
  });

  responsiveMainTwoImages[index].classList.add("visibleTwo");
}

const locationOne = document.querySelector(".locationOne");
const locationTwo = document.querySelector(".locationTwo");
const locationThree = document.querySelector(".locationThree");
const locationFour = document.querySelector(".locationFour");

let lastScrollTop = 0;
let lastTime = Date.now();

window.addEventListener("scroll", () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  const currentTime = Date.now();
  const deltaTime = currentTime - lastTime;
  const scrollAmount = Math.abs(st - lastScrollTop);
  const scrollSpeed = scrollAmount / deltaTime;

  if (st > lastScrollTop) {
    locationOne.scrollLeft += scrollSpeed * 7;
    locationThree.scrollLeft += scrollSpeed * 7;
    locationTwo.scrollLeft -= scrollSpeed * 7;
    locationFour.scrollLeft -= scrollSpeed * 7;
  } else {
    locationOne.scrollLeft -= scrollSpeed * 7;
    locationThree.scrollLeft -= scrollSpeed * 7;
    locationTwo.scrollLeft += scrollSpeed * 7;
    locationFour.scrollLeft += scrollSpeed * 7;
  }

  lastScrollTop = st <= 0 ? 0 : st;
  lastTime = currentTime;
});

const howWeMoveImages = document.querySelector(".howWeMoveImages");
const images = Array.from(howWeMoveImages.querySelectorAll("img"));
let currentIndexTwo = 0;

setInterval(() => {
  currentIndexTwo = (currentIndexTwo + 1) % images.length;
  const change = -currentIndexTwo * 100;
  howWeMoveImages.style.transform = `translateX(${change}%)`;
}, 2000);

let currentIndexThree = 0;
const imagesTwo = document.querySelectorAll(".whatWeMoveImageContainer");

function showNextImageTwo() {
  imagesTwo.forEach((image) => image.classList.remove("visibleThree"));
  currentIndexThree = (currentIndexThree + 1) % imagesTwo.length;
  imagesTwo[currentIndexThree].classList.add("visibleThree");
}

setInterval(showNextImageTwo, 2000);

const cards = document.querySelectorAll(".joinOurTeamCard");


cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const rotateX = -(mouseY - height / 2) / 15;
    const rotateY = (mouseX - width / 2) / 15;

    let rotateXFinal = 0,
      rotateYFinal = 0;
    if (mouseX < width / 2 && mouseY < height / 2) {
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    } else if (mouseX >= width / 2 && mouseY < height / 2) {
      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`;
    } else if (mouseX < width / 2 && mouseY >= height / 2) {
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    } else if (mouseX >= width / 2 && mouseY >= height / 2) {
      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`;
    }
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});




const carousel = document.querySelector('.carouselInner');
const dotsContainer = document.querySelector('.carouselDots');
let currentCardIndex = 0;
let cardWidth;

const updateDots = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1170) {
        cardWidth = 100 / 3;
        showDots(3);
    } else if (screenWidth <= 1170 && screenWidth > 768) {
        cardWidth = 100 / 5;
        showDots(5);
    } else {
        cardWidth = 100 / 9;
        showDots(9);
    }

    updateActiveDot(currentCardIndex);
};

const showDots = (numDots) => {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => handleDotClick(i));
        dotsContainer.appendChild(dot);
    }
};

const handleDotClick = (index) => {
    currentCardIndex = index;
    let offset = -index * cardWidth;
    carousel.style.transform = `translateX(${offset}%)`;

    updateActiveDot(index);
};

const updateActiveDot = (index) => {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
};

updateDots();
window.addEventListener('resize', updateDots);



const bottomCards = document.querySelectorAll(".bottomCards");

bottomCards.forEach((bottomCard) => {
    bottomCard.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = bottomCard.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      const rotateX = -(mouseY - height / 2) / 10;
      const rotateY = (mouseX - width / 2) / 10;
  
      let rotateXFinal = 0,
        rotateYFinal = 0;
      if (mouseX < width / 2 && mouseY < height / 2) {
        bottomCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      } else if (mouseX >= width / 2 && mouseY < height / 2) {
        bottomCard.style.transform = `rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`;
      } else if (mouseX < width / 2 && mouseY >= height / 2) {
        bottomCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      } else if (mouseX >= width / 2 && mouseY >= height / 2) {
        bottomCard.style.transform = `rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`;
      }
    });
  
    bottomCard.addEventListener("mouseleave", () => {
        bottomCard.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
