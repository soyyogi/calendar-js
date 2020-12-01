function addEventButton() {
    const days = document.querySelectorAll('.current_month_day');
    days.forEach(day =>{
        day.addEventListener('mouseenter', () => {
            day.querySelector('.new_event').classList.remove('hidden')
        })
        day.addEventListener('mouseleave', () => {
            day.querySelector('.new_event').classList.add('hidden')
        })
    
    })    
}

//render add event button
addEventButton();