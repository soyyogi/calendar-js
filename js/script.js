let currentDate = new Date();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function renderCalendar() {
    document.querySelector('.current_month').innerHTML = months[currentDate.getMonth()];
    
    //rendering previous_month_days
    for(let i = firstDay; i > 1; i--){
        document.querySelector('.days').innerHTML += `<div class="previous_month_day">${lastDatePrevMonth - i + 2}</div>`
    }

    //rendering current_month_days
    for(let i = 1; i <= lastDate; i++){
        document.querySelector('.days').innerHTML += `<div class="current_month_day">${i}</div>`
    }

    //rendering next_month_days
    for(let i = 1; i < lastday; i++){
        document.querySelector('.days').innerHTML += `<div class="next_month_day">${i}</div>`
    }
}

const lastDate = (new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)).getDate();

currentDate.setDate(1);
const firstDay = currentDate.getDay(); //index start at 0 which is sunday

const lastDatePrevMonth = (new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)).getDate();

currentDate.setDate(lastDate);
const lastday = currentDate.getDay(); //index start at 0 which is sunday


renderCalendar();