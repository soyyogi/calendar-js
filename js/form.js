const createButton = document.querySelector('#create_event');

createButton.addEventListener('click', () => {
    document.querySelector('.form_section').classList.remove('hidden');
    document.querySelector('.days').classList.add('parentDiable');
})

function hideForm(){
    document.querySelector('.form_section').classList.add('hidden');
}

// document.querySelector('.form_section').addEventListener('focusout', hideForm)
window.addEventListener('keypress', (e) => {
    if (e.key === 'Delete')
        hideForm()
})
document.querySelector('#cross').addEventListener('click', hideForm)



// save new event
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = form.querySelector('input[name="title"]').value;
    const startTime = new Date(form.querySelector('input[name="meeting-time-start"]').value);
    const hasEndTime = form.querySelector('input[name="end_date"]').checked;
    const endTime = hasEndTime ? new Date(form.querySelector('input[name="meeting-time-end"]').value) : undefined;
    const hasReminder = form.querySelector('input[name="reminder"]').checked;
    const reminder = hasReminder ? form.querySelector('#select_remind').value : undefined;
    const description = form.querySelector('#description').value;
    const eventType = form.querySelector('#event_type').value;

    events.push({title, startTime, endTime, reminder, description, eventType});
    setEvent();
    renderEvents(currentDate.getMonth());
    hideForm();
    form.reset();
})