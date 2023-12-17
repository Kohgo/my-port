// typing text hero



// fetchData API
async function fetchData(type = "activity") {
  let endpoint;

  switch (type) {
    case "certification":
      endpoint = "certification/certification.json";
      break;
    case "project":
      endpoint = "project/project.json";
      break;
    case "activity":
      endpoint = "activity/activity1.json";
      break;
    default:
      // Handle other cases or provide a default endpoint
      break;
  }

  let response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

function showActivities(activities) {
  let activityContainer = document.querySelector(".activity .content");
  let activityHTML = "";
  activities.slice(0, 90).forEach((activity) => {
    activityHTML += `
    <div class="cards">
      <div class="activity-card" data-aos="fade-down">
        <img draggable="false" src="${activity.image}" alt="activity"/>
        <div class="desc-content d-flex flex-column text-justify">
          <div class="tag">
            <h3>${activity.title}</h3>
            <h5>${activity.desc}</h5>
          </div>
        </div>
      </div>
    </div>`;
  });

  activityContainer.innerHTML = activityHTML;
}

// Usage example
fetchData("activity").then((data) => {
  showActivities(data);
});


// loadmore button
const loadmore = document.querySelector(".loadmore-btn");

let currentItems = 3;
loadmore.addEventListener("click", () => {
  const elementList = [
    ...document.querySelectorAll(".certification .content .box"),
  ];

  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].classList.add("d-block");
    }
  }
  currentItems += 3;

  if (currentItems >= elementList.length) {
    loadmore.classList.add("d-none");
  }
});




// animate on scroll (AOS)
AOS.init();

// disable inspect element or dev mode
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

document.onkeydown = function (e){
  if (event) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
      return false;
  }
  if (e.ctrlKey && e.keyCode == "I".charCodeAt(0)){
      return false;
  }
}

// Scrollspy botstrap
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: ".navbar",
});

// scroll reveal animation content
const srtop = ScrollReveal({
  origin: "top",
  distance: "90px",
  duration: 1000,
  reset: true,
});

srtop.reveal(".home .content .intro h3", { delay: 300 });
srtop.reveal(".home .content .intro p", { delay: 300 });
srtop.reveal(".home .content .intro a", { delay: 400 });

srtop.reveal(".home .image", { delay: 600 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });

srtop.reveal(".about .cv-btn", { delay: 200 });
