const dailyButton = document.getElementById("daily");
const weeklyButton = document.getElementById("weekly");
const monthlyButton = document.getElementById("monthly");
const buttonsContainer = document.getElementById("toggle-time");

//an array with the type of data the user can track
const informationType = [
  "work",
  "play",
  "study",
  "exercise",
  "social",
  "self-care",
];

//get the daily count data, then display them
function getDailyData() {
  for (i = 0; i < data.length; i++) {
    const currentCount = document.getElementById(
      `current-${informationType[i]}-count`
    );

    const previousCount = document.getElementById(
      `previous-${informationType[i]}-count`
    );

    currentCount.textContent = `${data[i].timeframes.daily.current}hrs`;
    previousCount.textContent = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
  }
}

//get the weekly count data, then display them
function getWeeklyData() {
  for (i = 0; i < data.length; i++) {
    const currentCount = document.getElementById(
      `current-${informationType[i]}-count`
    );

    const previousCount = document.getElementById(
      `previous-${informationType[i]}-count`
    );

    currentCount.textContent = `${data[i].timeframes.weekly.current}hrs`;
    previousCount.textContent = `Last week - ${data[i].timeframes.weekly.previous}hrs`;
  }
}

//get the monthly count data, then display them
function getMonthlyData() {
  for (i = 0; i < data.length; i++) {
    const currentCount = document.getElementById(
      `current-${informationType[i]}-count`
    );

    const previousCount = document.getElementById(
      `previous-${informationType[i]}-count`
    );

    currentCount.textContent = `${data[i].timeframes.monthly.current}hrs`;
    previousCount.textContent = `Last month - ${data[i].timeframes.monthly.previous}hrs`;
  }
}

dailyButton.addEventListener("click", getDailyData);
weeklyButton.addEventListener("click", getWeeklyData);
monthlyButton.addEventListener("click", getMonthlyData);

//on load
getDailyData();
dailyButton.focus();
