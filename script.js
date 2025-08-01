import { estados } from './estados.js';
import { temperaturasIcones } from './temperaturas.js';

function scrollToLeft() {
  document
    .getElementById('carrossel')
    .scrollBy({ left: -100, behavior: 'smooth' });
}

function scrollToRight() {
  document
    .getElementById('carrossel')
    .scrollBy({ left: 100, behavior: 'smooth' });
}

const cityInput = document.getElementById('city');
const cityName = document.getElementsByClassName('city-name');
const rainChance = document.getElementsByClassName('rain-chance');
const temperature = document.getElementsByClassName('temperature');

const sixAm = document.getElementById('hour-six-am');
const nineAm = document.getElementById('hour-nine-am');
const twelvePm = document.getElementById('hour-twelve-pm');
const threePm = document.getElementById('hour-three-pm');
const sixPm = document.getElementById('hour-six-pm');
const ninePm = document.getElementById('hour-nine-pm');

const sensacaoTermica = document.getElementById('feels-like');
const chanceChuva = document.getElementById('rain-chance-2');
const vento = document.getElementById('wind-speed');
const uvIndex = document.getElementById('uv-index');

const mondayMax = document.getElementById('monday-max');
const mondayMin = document.getElementById('monday-min');
const tuesdayMax = document.getElementById('tuesday-max');
const tuesdayMin = document.getElementById('tuesday-min');
const wednesdayMax = document.getElementById('wednesday-max');
const wednesdayMin = document.getElementById('wednesday-min');
const thursdayMax = document.getElementById('thursday-max');
const thursdayMin = document.getElementById('thursday-min');
const fridayMax = document.getElementById('friday-max');
const fridayMin = document.getElementById('friday-min');
const saturdayMax = document.getElementById('saturday-max');
const saturdayMin = document.getElementById('saturday-min');
const sundayMax = document.getElementById('sunday-max');
const sundayMin = document.getElementById('sunday-min');

const imgShowcase = document.getElementById('image-showcase');

const imgSixAm = document.getElementById('img-hour-six-am');
const imgNineAm = document.getElementById('img-hour-nine-am');
const imgTwelvePm = document.getElementById('img-hour-twelve-pm');
const imgThreePm = document.getElementById('img-hour-three-pm');
const imgSixPm = document.getElementById('img-hour-six-pm');
const imgNinePm = document.getElementById('img-hour-nine-pm');

const mondayImg = document.getElementById('monday-img');
const tuesdayImg = document.getElementById('tuesday-img');
const wednesdayImg = document.getElementById('wednesday-img');
const thursdayImg = document.getElementById('thursday-img');
const fridayImg = document.getElementById('friday-img');
const saturdayImg = document.getElementById('saturday-img');
const sundayImg = document.getElementById('sunday-img');

const today1 = document.getElementById('today-1');
const today2 = document.getElementById('today-2');
const today3 = document.getElementById('today-3');
const today4 = document.getElementById('today-4');
const today5 = document.getElementById('today-5');
const today6 = document.getElementById('today-6');
const today7 = document.getElementById('today-7');

cityInput.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    const city = cityInput.value;
    const latitude = estados[city][0];
    const longitude = estados[city][1];

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&daily=uv_index_max,wind_speed_10m_max,apparent_temperature_max&hourly=temperature_2m,wind_speed_10m,rain,uv_index,apparent_temperature&current=temperature_2m,rain,wind_speed_10m,apparent_temperature&timezone=America%2FSao_Paulo`;

    const responses = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        cityName[0].textContent = city;
        rainChance[0].textContent = `Chance de chuva: ${data.current.rain}%`;
        temperature[0].textContent = `${Math.round(
          data.current.temperature_2m
        )}°C`;

        imgShowcase.src = `${
          temperaturasIcones[Math.round(data.current.temperature_2m)][0]
        }`;

        imgShowcase.alt = `${
          temperaturasIcones[Math.round(data.current.temperature_2m)][1]
        }`;

        imgShowcase.style = 'width: 35rem; height: 35rem;';

        sixAm.textContent = `${Math.round(data.hourly.temperature_2m[6])}°C`;
        nineAm.textContent = `${Math.round(data.hourly.temperature_2m[9])}°C`;
        twelvePm.textContent = `${Math.round(
          data.hourly.temperature_2m[12]
        )}°C`;
        threePm.textContent = `${Math.round(data.hourly.temperature_2m[15])}°C`;
        sixPm.textContent = `${Math.round(data.hourly.temperature_2m[18])}°C`;
        ninePm.textContent = `${Math.round(data.hourly.temperature_2m[21])}°C`;

        imgSixAm.src = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[6])][0]
        }`;
        imgNineAm.src = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[9])][0]
        }`;
        imgTwelvePm.src = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[12])][0]
        }`;
        imgThreePm.src = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[15])][0]
        }`;
        imgSixPm.src = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[18])][0]
        }`;
        imgNinePm.src = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[21])][0]
        }`;

        imgSixAm.alt = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[6])][1]
        }`;
        imgNineAm.alt = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[9])][1]
        }`;
        imgTwelvePm.alt = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[12])][1]
        }`;
        imgThreePm.alt = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[15])][1]
        }`;
        imgSixPm.alt = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[18])][1]
        }`;
        imgNinePm.alt = `${
          temperaturasIcones[Math.round(data.hourly.temperature_2m[21])][1]
        }`;

        sensacaoTermica.textContent = `${Math.round(
          data.current.apparent_temperature
        )}°C`;
        chanceChuva.textContent = `${Math.round(data.current.rain)}%`;
        vento.innerHTML = `${Math.round(
          data.current.wind_speed_10m
        )} <span class="kmh">km/h</span>`;
        uvIndex.textContent = `${Math.round(data.hourly.uv_index[12])}`;

        const data1 = new Date(data.daily.time[0]);
        today1.textContent = `${new Intl.DateTimeFormat('pt-BR', {
          weekday: 'long',
        }).format(data1)}`;

        const data2 = new Date(data.daily.time[1]);
        today2.textContent = `${new Intl.DateTimeFormat('pt-BR', {
          weekday: 'long',
        }).format(data2)}`;

        const data3 = new Date(data.daily.time[2]);
        today3.textContent = `${new Intl.DateTimeFormat('pt-BR', {
          weekday: 'long',
        }).format(data3)}`;

        const data4 = new Date(data.daily.time[3]);
        today4.textContent = `${new Intl.DateTimeFormat('pt-BR', {
          weekday: 'long',
        }).format(data4)}`;

        const data5 = new Date(data.daily.time[4]);
        today5.textContent = `${new Intl.DateTimeFormat('pt-BR', {
          weekday: 'long',
        }).format(data5)}`;

        const data6 = new Date(data.daily.time[5]);
        today6.textContent = `${new Intl.DateTimeFormat('pt-BR', {
          weekday: 'long',
        }).format(data6)}`;

        const data7 = new Date(data.daily.time[6]);
        today7.textContent = `${new Intl.DateTimeFormat('pt-BR', {
          weekday: 'long',
        }).format(data7)}`;

        mondayMax.textContent = `${Math.round(
          data.daily.temperature_2m_max[0]
        )}°C`;
        mondayMin.textContent = `${Math.round(
          data.daily.temperature_2m_min[0]
        )}°C`;
        tuesdayMax.textContent = `${Math.round(
          data.daily.temperature_2m_max[1]
        )}°C`;
        tuesdayMin.textContent = `${Math.round(
          data.daily.temperature_2m_min[1]
        )}°C`;
        wednesdayMax.textContent = `${Math.round(
          data.daily.temperature_2m_max[2]
        )}°C`;
        wednesdayMin.textContent = `${Math.round(
          data.daily.temperature_2m_min[2]
        )}°C`;
        thursdayMax.textContent = `${Math.round(
          data.daily.temperature_2m_max[3]
        )}°C`;
        thursdayMin.textContent = `${Math.round(
          data.daily.temperature_2m_min[3]
        )}°C`;
        fridayMax.textContent = `${Math.round(
          data.daily.temperature_2m_max[4]
        )}°C`;
        fridayMin.textContent = `${Math.round(
          data.daily.temperature_2m_min[4]
        )}°C`;
        saturdayMax.textContent = `${Math.round(
          data.daily.temperature_2m_max[5]
        )}°C`;
        saturdayMin.textContent = `${Math.round(
          data.daily.temperature_2m_min[5]
        )}°C`;
        sundayMax.textContent = `${Math.round(
          data.daily.temperature_2m_max[6]
        )}°C`;
        sundayMin.textContent = `${Math.round(
          data.daily.temperature_2m_min[6]
        )}°C`;

        mondayImg.src = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[0])][0]
        }`;
        tuesdayImg.src = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[1])][0]
        }`;
        wednesdayImg.src = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[2])][0]
        }`;
        thursdayImg.src = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[3])][0]
        }`;
        fridayImg.src = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[4])][0]
        }`;
        saturdayImg.src = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[5])][0]
        }`;
        sundayImg.src = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[6])][0]
        }`;

        mondayImg.alt = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[0])][1]
        }`;
        tuesdayImg.alt = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[1])][1]
        }`;
        wednesdayImg.alt = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[2])][1]
        }`;
        thursdayImg.alt = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[3])][1]
        }`;
        fridayImg.alt = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[4])][1]
        }`;
        saturdayImg.alt = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[5])][1]
        }`;
        sundayImg.alt = `${
          temperaturasIcones[Math.round(data.daily.temperature_2m_max[6])][1]
        }`;
      });
  }
});
