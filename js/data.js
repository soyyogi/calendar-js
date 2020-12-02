let events = [];

function getEvents() {
    if (!localStorage.getItem('events')) {
        events = [];
    } else {
        data = JSON.parse(localStorage.getItem('events'));
        events = [...data]
    }
}

function setEvent() {
    const data = JSON.stringify(events);
    localStorage.setItem('events', data);
}

function removeEvent(title, date) {
    events.splice(events.findIndex(e => e.title === title && (new Date(e.startTime)).getDate() === date),1);
    setEvent()
    renderEvents(currentDate.getMonth())
}

getEvents();
