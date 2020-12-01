function addEventButton() {
    const days = document.querySelectorAll('.current_month_day');
    days.forEach(day => {
        day.addEventListener('mouseenter', () => {
            day.querySelector('.new_event').classList.remove('hidden');
        })
        day.addEventListener('mouseleave', () => {
            day.querySelector('.new_event').classList.add('hidden');
        })
    
    })
    renderEvents(currentDate.getMonth())    
}

function renderEvents(month) {
    const days = document.querySelectorAll('.current_month_day');
    days.forEach(day => {
        const ul = document.createElement('ul');
        ul.classList.add('event_list');
        events.forEach(e => {
            if(e.date === parseInt(day.querySelector('.date').textContent) && e.month === month){
                const li = document.createElement('li');
                li.classList.add('event_list_item')
                li.textContent = e.title;
                ul.appendChild(li);
            }
        })
        day.insertBefore(ul, day.querySelector('.new_event'));
    })
}

//render add event button
addEventButton();