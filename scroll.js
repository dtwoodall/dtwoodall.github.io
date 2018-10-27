const DESKTOP_THRESHOLD = 600;
const MOBILE_THRESHOLD = 200;

window.addEventListener(
  "scroll",
  function(event) {
    let rory = document.querySelector("#rory-images-desktop");
    let distanceFromTop = rory.getBoundingClientRect().top;
    if (distanceFromTop < DESKTOP_THRESHOLD) {
      rory.querySelector(".awake").classList.remove("hidden");
      rory.querySelector(".asleep").classList.add("hidden");
    } else {
      rory.querySelector(".awake").classList.add("hidden");
      rory.querySelector(".asleep").classList.remove("hidden");
    }

    //Event listener for mobile view//
    rory = document.querySelector("#rory-images-mobile");
    distanceFromTop = rory.getBoundingClientRect().top;
    if (distanceFromTop < MOBILE_THRESHOLD) {
      rory.querySelector(".awake").classList.remove("hidden");
      rory.querySelector(".asleep").classList.add("hidden");
    } else {
      rory.querySelector(".awake").classList.add("hidden");
      rory.querySelector(".asleep").classList.remove("hidden");
    }
  }
);
