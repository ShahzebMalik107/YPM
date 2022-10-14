let slide1 = document.getElementById("slide-1");
let slide2 = document.getElementById("slide-2");
let slide3 = document.getElementById("slide-3");
let slide4 = document.getElementById("slide-4");
let slide5 = document.getElementById("slide-5");

let intervals = setTimeout(() => {
  slide2.click();
}, 7000);

slide1.addEventListener("click", () => {
  clearTimeout(intervals);
  intervals = setTimeout(() => {
    slide2.click();
  }, 7000);
});

slide2.addEventListener("click", () => {
  clearTimeout(intervals);
  intervals = setTimeout(() => {
    slide3.click();
  }, 7000);
});

slide3.addEventListener("click", () => {
  clearTimeout(intervals);
  intervals = setTimeout(() => {
    slide4.click();
  }, 7000);
});

slide4.addEventListener("click", () => {
  clearTimeout(intervals);
  intervals = setTimeout(() => {
    slide5.click();
  }, 7000);
});

slide5.addEventListener("click", () => {
  clearTimeout(intervals);
  intervals = setTimeout(() => {
    slide1.click();
  }, 7000);
});
