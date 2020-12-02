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
    events.forEach(event => {
        if(event.title === e.target.textContent && (new Date(event.startTime)).getDate() === parseInt(e.target.parentElement.parentElement.querySelector('.date').textContent)){
            console.log(event)
            const ul = document.createElement('ul');
            const section = document.querySelector('.event_popup');
            ul.classList.add('event_display');
            section.innerHTML = '<div class="event_display_title"><div style="visibility: hidden;">extra</div>\n<p>Event Details</p>\n<i class="fa fa-times-circle" id="close_details"></i>\n</div>';
            for (const key in event) {
                if (event.hasOwnProperty(key)) {
                    const li = document.createElement('li');
                    li.classList.add('event_display_item');
                    li.textContent = key.toUpperCase() + ' : ' + event[key];
                    ul.appendChild(li);   
                }
            }

            section.appendChild(ul);
            section.classList.remove('hidden')

            //remove event details listener for close button
            document.querySelector('#close_details').addEventListener('click', removeEventDetails)
        }
    })
    //fetch event details from local storage using event title
}

//render add event button
addEventButton();

//remove event details

function removeEventDetails(){
    const section = document.querySelector('.event_popup');
    section.innerHTML = ''
    section.classList.add('hidden');
}

window.addEventListener('keypress', (e) => {
    if (e.key === 'Delete')
        removeEventDetails()
})
