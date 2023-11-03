const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imagesGallery = document.querySelectorAll(".gallery-img");
let currentSelectedImage = 0;

prevBtn.addEventListener("click", () => {
  //code for previous button
  nextBtn.disabled = false;
  imagesGallery[currentSelectedImage].classList.remove("active");
  currentSelectedImage--;
  imagesGallery[currentSelectedImage].classList.add("active");

  if (currentSelectedImage === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener("click", () => {
  //code for next button
  prevBtn.disabled = false;

  imagesGallery[currentSelectedImage].classList.remove("active");
  currentSelectedImage++;
  imagesGallery[currentSelectedImage].classList.add("active");

  if (imagesGallery.length === currentSelectedImage + 1) {
    nextBtn.disabled = true;
  }
});
