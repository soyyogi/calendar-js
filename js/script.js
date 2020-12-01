const currentDate = new Date();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function renderCalendar() {
    document.querySelector('.current_month').innerHTML = months[currentDate.getMonth()];

    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    currentDate.setDate(lastDate);
    const lastday = currentDate.getDay(); //index start at 0 which is sunday

    currentDate.setDate(1);
    const firstDay = currentDate.getDay(); //index start at 0 which is sunday

    const lastDatePrevMonth = (new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)).getDate();

    document.querySelector('.days').innerHTML = ''
    
    //rendering previous_month_days
    for(let i = firstDay; i > 0; i--){
        document.querySelector('.days').innerHTML += `<div class="previous_month_day">${lastDatePrevMonth - i + 1}</div>`
    }
    
    //rendering current_month_days
    for(let i = 1; i <= lastDate; i++){
        if(i === (new Date).getDate() && currentDate.getMonth() === (new Date).getMonth()){
            document.querySelector('.days').innerHTML += `<div class="current_month_day"><span class="today">${i}</span> \n <button class="new_event hidden">&plus;</div>`
        } else if(i === (new Date).getDate() && !(currentDate.getMonth() === (new Date).getMonth())) {
            document.querySelector('.days').innerHTML += `<div class="current_month_day"><span class="today today_extra">${i}</span> \n <button class="new_event hidden">&plus;</div>`
        } else {
            document.querySelector('.days').innerHTML += `<div class="current_month_day">${i} \n <button class="new_event hidden">&plus;</div>`
        }
    }

    //rendering next_month_days
    for(let i = 1; i < 7 - lastday; i++){
        document.querySelector('.days').innerHTML += `<div class="next_month_day">${i}</div>`
    }
}

//previous and next month rendering
document.querySelector('.previous').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
    addEventButton();
})

document.querySelector('.next').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
    addEventButton();
})

renderCalendar();