// loadmore button
const viewall = document.querySelector(".viewall-btn");

let currentItems = 3;
viewall.addEventListener("click", () => {
  const elementList = [
    ...document.querySelectorAll(".activity .content .box"),
  ];

  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].classList.add("d-block");
    }
  }
  currentItems += 3;

  if (currentItems >= elementList.length) {
    viewall.classList.add("d-none");
  }
});