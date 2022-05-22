const ddayBox = document.querySelector(".ddayBox");
const ddayAddBtn = document.querySelector(".addDay");
const ddayForm = document.querySelector(".selectBox");
const dayName = document.querySelector(".dayName");
const ddayYear = document.querySelector("#dDayYear");
const ddayMonth = document.querySelector("#dDayMonth");
const ddayDay = document.querySelector("#dDayDay");
const h3 = document.querySelector("#dDay h3");
const h2 = document.querySelector("#dDay h2");
const p = document.querySelector("#dDay p");

const HIDE = "hide";
const SHOW = "show";

const dDay_KEY = "D_dayName";
const savedDay = localStorage.getItem(dDay_KEY);

let days = [];

function handleChangeDay() {
  localStorage.removeItem(dDay_KEY);
  ddayBox.classList.add(HIDE);
  ddayForm.classList.remove(HIDE);
}

ddayBox.addEventListener("click", handleChangeDay);

function handleDdayForm() {
  ddayAddBtn.classList.add(HIDE);
  ddayForm.classList.remove(HIDE);
}

function difDay() {
  const newDaysObj = {
    year: ddayYear.value,
    month: ddayMonth.value,
    day: ddayDay.value,
    text: dayName.value,
  };
  days.push(newDaysObj);
  paintDay(newDaysObj);
  saveDays();
}

function paintDay(newDays) {
  const inputDay = new Date(`${newDays.year}-${newDays.month}-${newDays.day}`);
  const toDay = new Date();
  const difTime = inputDay - toDay;

  const difDay = Math.floor(difTime / (1000 * 60 * 60 * 24));
  const difHour = Math.floor((difTime / (1000 * 60 * 60)) % 24);
  const difMin = Math.floor((difTime / (1000 * 60)) % 60);
  const difSec = Math.floor((difTime / 1000) % 60);

  h3.innerText = `${newDays.text}까지`;
  h2.innerText = `✨ D-${difDay} ✨`;
  p.innerText = `${difHour}h ${difMin}m ${difSec}s`;
  ddayBox.classList.remove(HIDE);
}
function saveDays() {
  localStorage.setItem(dDay_KEY, JSON.stringify(days));
}

ddayAddBtn.addEventListener("click", handleDdayForm);
ddayForm.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    difDay();

    ddayForm.classList.add(HIDE);
  }
});

if (savedDay !== null) {
  ddayAddBtn.classList.add(HIDE);
  const parsedDays = JSON.parse(savedDay);
  days = parsedDays;
  setInterval(() => {
    parsedDays.forEach(paintDay);
  }, 1000);
  //   paintDay(savedDay);
}
