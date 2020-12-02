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
        getEvents();

        //check whether events exist
        if (events){

            //remove already rendered events to avoid duplicating
            if(day.querySelector('.event_list')){
                day.querySelector('.event_list').remove()
            }
            const ul = document.createElement('ul');
            ul.classList.add('event_list');

            events.forEach(event => {
                if((new Date(event.startTime)).getDate() === parseInt(day.querySelector('.date').textContent) && (new Date(event.startTime)).getMonth() === month){
                    const li = document.createElement('li');
                    li.classList.add('event_list_item')
                    li.textContent = event.title;
                    li.addEventListener('click', displayEventDetails);
                    ul.appendChild(li);
                }
            })

            day.insertBefore(ul, day.querySelector('.new_event'));
        }
        
        
    })
}

function displayEventDetails(e) {
    console.log(e.target.textContent)
    //fetch event details from local storage using event title
}

//render add event button
addEventButton();