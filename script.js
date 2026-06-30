// script.js  ---  FULL REFERENCE

const clock     = document.getElementById("clock");
const dateEl    = document.getElementById("date");
const formatBtn = document.getElementById("formatBtn");

let use24Hour = true;

function updateClock() {
  const now   = new Date();
  let hours   = now.getHours();
  const mins  = now.getMinutes();
  const secs  = now.getSeconds();

  let suffix = "";
  if (!use24Hour) {
    suffix = hours < 12 ? " AM" : " PM";
    hours = hours % 12 || 12;   // 0 becomes 12, 13 becomes 1
  }

  const hh = String(hours).padStart(2, "0");
  const mm = String(mins).padStart(2, "0");
  const ss = String(secs).padStart(2, "0");

  clock.textContent = hh + ":" + mm + ":" + ss + suffix;

  dateEl.textContent = now.toLocaleDateString(undefined, {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
}

updateClock();
setInterval(updateClock, 1000);

formatBtn.addEventListener("click", function () {
  use24Hour = !use24Hour;
  formatBtn.textContent = use24Hour ? "Switch to 12-hour" : "Switch to 24-hour";
  updateClock();
});
