import ical from '$lib/ical';

function isDST(d) {
    let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
    let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(jan, jul) !== d.getTimezoneOffset();    
}

export async function load() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const raw = await fetch('https://calendar.google.com/calendar/ical/2274266366b1c3f4a2baf9b3a3fc4ca3f2224909ca49e61456a18a4043cafd76%40group.calendar.google.com/public/basic.ics').then(res => res.text())
    const data = ical.parseICS(raw)
    //console.log(data);    
    let events = [];

    for (let k in data) {
        if (data.hasOwnProperty(k)) {
            const ev = data[k];
            if (data[k].type == 'VEVENT') {

                //console.log(ev.summary, ev.start.toString(), ev.start.getTimezoneOffset());
                ev.start = new Date(ev.start.getTime() + 60*60*1000)
                if (ev.start.getMonth() > 2 && ev.start.getMonth() < 10)
                {
                    console.log("DST", ev.start);
                    ev.start = new Date(ev.start.getTime() + 60*60*1000)
                }
                
                events[events.length] = {start:new Date(ev.start) ,summary:ev.summary, location:ev.location, date:`${months[ev.start.getMonth()]} ${ev.start.getDate()}`, time:`${ev.start.toLocaleTimeString('de-DE', { hour: "2-digit", minute: "2-digit" })}`}
                //`${ev.summary} is in ${ev.location} on the ${ev.start.getDate()} of ${months[ev.start.getMonth()]} at ${ev.start.toLocaleTimeString('en-GB', { hour: "2-digit", minute: "2-digit" })}`);
            }
        }
    }

    events.sort(function compare(a, b) {
        return a.start - b.start;
      });
    

    const poaps = loadTechSaunaPOAPs();

    return {events, poaps};
    //return {"events":[{"start":"2023-11-16T16:30:00.000Z","summary":"TechSauna","location":"Dantebad, Postillonstraße 17, 80637 München, Germany","date":"16 of Nov","time":"17:30"},{"start":"2023-12-21T16:30:00.000Z","summary":"TechSauna","location":"Phönixbad Ottobrunn, Haidgraben 121, 85521 Ottobrunn, Germany","date":"21 of Dec","time":"17:30"},{"start":"2024-01-18T16:30:00.000Z","summary":"TechSauna","date":"18 of Jan","time":"17:30"},{"start":"2024-02-15T16:30:00.000Z","summary":"TechSauna","date":"15 of Feb","time":"17:30"},{"start":"2024-03-21T16:30:00.000Z","summary":"TechSauna","date":"21 of Mar","time":"17:30"},{"start":"2024-04-18T15:30:00.000Z","summary":"TechSauna","date":"18 of Apr","time":"17:30"},{"start":"2024-05-16T15:30:00.000Z","summary":"TechSauna","date":"16 of May","time":"17:30"},{"start":"2024-06-20T15:30:00.000Z","summary":"TechSauna","date":"20 of Jun","time":"17:30"},{"start":"2024-07-18T15:30:00.000Z","summary":"TechSauna","date":"18 of Jul","time":"17:30"},{"start":"2024-08-15T15:30:00.000Z","summary":"TechSauna Special","date":"15 of Aug","time":"17:30"},{"start":"2024-09-19T15:30:00.000Z","summary":"TechSauna","date":"19 of Sep","time":"17:30"},{"start":"2024-10-17T15:30:00.000Z","summary":"TechSauna","date":"17 of Oct","time":"17:30"},{"start":"2024-11-21T16:30:00.000Z","summary":"TechSauna","date":"21 of Nov","time":"17:30"},{"start":"2024-12-19T16:30:00.000Z","summary":"TechSauna","date":"19 of Dec","time":"17:30"}]}
}

async function loadTechSaunaPOAPs() {
    
    const poaps = await fetch('https://api.poap.tech/actions/scan/0x895b7F7AF1C10d1ff0CDcEf8dd10DD165Ea10A28', {
        headers : {
            "accept" : "application/json",
            "x-api-key" : "olIYye6ScKh7Y9H7e68J6SfkqArIiUSO0fZkcqRGVPoIOaPJBBVMF8Wcj2K35F0HUOgqIBbqHqGIHGMbn4XtcTSGIHLp1m9v45kW1rXY2ogxj1fx2qOK0v2RYSbs124l"
        }
    }).then(res => res.json())
  
    return poaps.filter(item => item.event.name.indexOf("Tech Sauna") > -1)
}