const ddayAddBtn = document.querySelector(".addDay");
const ddayForm = document.querySelector(".selectBox");
const dayName = document.querySelector(".dayName");
const ddayYear = document.querySelector("#dDayYear");
const ddayMonth = document.querySelector("#dDayMonth");
const ddayDay = document.querySelector("#dDayDay");
const h3 = document.querySelector("#dDay h3");
const h2 = document.querySelector("#dDay h2");

function handleDdayForm() {
  ddayAddBtn.classList.add(HIDE);
  ddayForm.classList.remove(HIDE);
}

function difDay() {
  const inputDay = new Date(
    `${ddayYear.value}-${ddayMonth.value}-${ddayDay.value}`
  );
  const toDay = new Date();
  const difTime = inputDay - toDay;

  const difDay = Math.floor(difTime / (1000 * 60 * 60 * 24));

  h2.innerText = `D-${difDay}`;
}

ddayAddBtn.addEventListener("click", handleDdayForm);
dayName.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    difDay();
    h3.innerText = `${dayName.value}까지`;
    ddayForm.classList.add(HIDE);
  }
});
