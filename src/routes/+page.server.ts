export async function load() {
    /*const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const raw = await fetch('https://calendar.google.com/calendar/ical/2274266366b1c3f4a2baf9b3a3fc4ca3f2224909ca49e61456a18a4043cafd76%40group.calendar.google.com/public/basic.ics').then(res => res.text())
    const data = ical.parseICS(raw)
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
    
    return {events};*/
    return {"events":[{"start":"2023-11-16T16:30:00.000Z","summary":"TechSauna","location":"Dantebad, Postillonstraße 17, 80637 München, Germany","date":"16 of Nov","time":"17:30"},{"start":"2023-12-21T16:30:00.000Z","summary":"TechSauna","location":"Phönixbad Ottobrunn, Haidgraben 121, 85521 Ottobrunn, Germany","date":"21 of Dec","time":"17:30"},{"start":"2024-01-18T16:30:00.000Z","summary":"TechSauna","date":"18 of Jan","time":"17:30"},{"start":"2024-02-15T16:30:00.000Z","summary":"TechSauna","date":"15 of Feb","time":"17:30"},{"start":"2024-03-21T16:30:00.000Z","summary":"TechSauna","date":"21 of Mar","time":"17:30"},{"start":"2024-04-18T15:30:00.000Z","summary":"TechSauna","date":"18 of Apr","time":"17:30"},{"start":"2024-05-16T15:30:00.000Z","summary":"TechSauna","date":"16 of May","time":"17:30"},{"start":"2024-06-20T15:30:00.000Z","summary":"TechSauna","date":"20 of Jun","time":"17:30"},{"start":"2024-07-18T15:30:00.000Z","summary":"TechSauna","date":"18 of Jul","time":"17:30"},{"start":"2024-08-15T15:30:00.000Z","summary":"TechSauna Special","date":"15 of Aug","time":"17:30"},{"start":"2024-09-19T15:30:00.000Z","summary":"TechSauna","date":"19 of Sep","time":"17:30"},{"start":"2024-10-17T15:30:00.000Z","summary":"TechSauna","date":"17 of Oct","time":"17:30"},{"start":"2024-11-21T16:30:00.000Z","summary":"TechSauna","date":"21 of Nov","time":"17:30"},{"start":"2024-12-19T16:30:00.000Z","summary":"TechSauna","date":"19 of Dec","time":"17:30"}]}
}