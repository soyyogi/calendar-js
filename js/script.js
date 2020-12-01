let currentDate = new Date();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function renderCalendar() {
    document.querySelector('.current_month').innerHTML = months[currentDate.getMonth()];

    for(let i = 1; i <= lastDay; i++){
        document.querySelector('.days').innerHTML += `<div class="current_month_day">${i}</div>`
    }
}

const lastDay = (new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)).getDate();


renderCalendar()