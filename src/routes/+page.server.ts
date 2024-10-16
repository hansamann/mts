

export async function load() {
   

    const poaps = loadTechSaunaPOAPs();
    return { poaps };
    
}

async function loadTechSaunaPOAPs() {

    const poaps = await fetch('https://api.poap.tech/actions/scan/0x895b7F7AF1C10d1ff0CDcEf8dd10DD165Ea10A28', {
        headers: {
            "accept": "application/json",
            "x-api-key": "olIYye6ScKh7Y9H7e68J6SfkqArIiUSO0fZkcqRGVPoIOaPJBBVMF8Wcj2K35F0HUOgqIBbqHqGIHGMbn4XtcTSGIHLp1m9v45kW1rXY2ogxj1fx2qOK0v2RYSbs124l"
        }
    }).then(res => res.json())

    return poaps.filter(item => item.event.name.indexOf("Tech Sauna") > -1)
}