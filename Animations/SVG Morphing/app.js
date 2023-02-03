const moonPath =
  "M21 28C21 43.464 31.5 56 31.5 56C16.3122 56 4 43.464 4 28C4 12.536 16.3122 0 31.5 0C31.5 0 21 12.536 21 28Z";

const sunPath =
  "M59 28C59 43.464 46.6878 56 31.5 56C16.3122 56 4 43.464 4 28C4 12.536 16.3122 0 31.5 0C46.6878 0 59 12.536 59 28Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

//We need to click on the sun

darkMode.addEventListener("click", () => {
  // We need to use anime.js
  //here we set up the timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });
  //Addd different animation to the timeline
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }]
    })
    .add(
      {
        targets: "#darkMode",
        rotate: toggle ? 0 : 320
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22" : "rgb(255,255,255)"
      },
      "-=700"
    );
  //Everytime we click on the sun I want that toggle to switch
  if (!toggle) {
    toggle = true;
  } else {
    toogle = false;
  }
});
