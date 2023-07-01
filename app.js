const slideImages = document.querySelector(".slideImages");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const imgs = document.getElementsByClassName("imgShow");

let currentImg = 1;
let timeout;

prevBtn.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

nextBtn.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgs.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgs.length;
  }
  slideImages.style.transform = `translateX(-${(currentImg - 1) * 1520}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
/* Menu open and closing */

const mainNav2 = document.getElementById("mainNav2");

mainNav2.style.maxHeight = "47px";

function menuopen() {
  if (mainNav2.style.maxHeight == "47px") {
    mainNav2.style.maxHeight = "250px";
  } else {
    mainNav2.style.maxHeight = "47px";
  }
}
