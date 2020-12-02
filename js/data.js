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

function removeEvent(title, startTime) {
    events.splice(events.findIndex(e => e.title === title && e.startTime === startTime),1);
}

getEvents();
