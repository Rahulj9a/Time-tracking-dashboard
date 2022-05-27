//lets fetch data from json file=>
let jsonData = [];

fetch('./data.json')
    .then(dataset => dataset.json())
    .then(data => jsonData.push(...data));

console.log(jsonData);




const choosePeriod = document.querySelectorAll('.linkPara');
const timeshown = document.querySelectorAll('.time');
const lastTimeShown = document.querySelectorAll('.lastTime');
const lastTimePeriod = document.querySelectorAll('.timeset');


choosePeriod.forEach((period) => {
    period.addEventListener('click', changeTime);
})

//change content in card ->

let currentTime = 0;
let lastPeriod;
let lastTime = 0;
let targetValue;
function changeTime(e) {
    choosePeriod.forEach(child => child.style.color='white')
    let targetId = e.target.id;
    e.target.style.color = 'rgb(246, 250, 14)'
    targetValue = e.target.innerText.toLowerCase();

     
    lastPeriod = targetId;
    let i = 0;

    timeshown.forEach(time => {
        
        time = jsonData[i].timeframes[targetValue].current; 
        timeshown[i].innerText = `${time} hrs`;
        lastTimeShown[i].innerText = `${jsonData[i].timeframes[targetValue].previous} hrs`;
        i++;
    })
    
    lastTimePeriod.forEach(period => period.textContent = `${lastPeriod}`)
    
     
}


