import ical from 'node-ical'

export async function load() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = await ical.fromURL('https://calendar.google.com/calendar/ical/2274266366b1c3f4a2baf9b3a3fc4ca3f2224909ca49e61456a18a4043cafd76%40group.calendar.google.com/public/basic.ics', {}) 
    //console.log(data);    
    let events = [];

    for (let k in data) {
        if (data.hasOwnProperty(k)) {
            const ev = data[k];
            if (data[k].type == 'VEVENT') {
                events[events.length] = {start:new Date(ev.start) ,summary:ev.summary, location:ev.location, date:`${months[ev.start.getMonth()]} ${ev.start.getDate()}`, time:`${ev.start.toLocaleTimeString('en-GB', { hour: "2-digit", minute: "2-digit" })}`}
                //`${ev.summary} is in ${ev.location} on the ${ev.start.getDate()} of ${months[ev.start.getMonth()]} at ${ev.start.toLocaleTimeString('en-GB', { hour: "2-digit", minute: "2-digit" })}`);
            }
        }
    }

    events.sort(function compare(a, b) {
        return a.start - b.start;
      });
    
    return {events};
}