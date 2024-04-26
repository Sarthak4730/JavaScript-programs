// My API Key: bc3c2caf61654710bae4a4c1333999f7

let urlleft = 'https://newsapi.org/v2/top-headlines?' +
                'country=';

let input;

let urlright =  '&' +
                'from=2024-04-26&' +
                'sortBy=popularity&' +
                'apiKey=bc3c2caf61654710bae4a4c1333999f7';

let countrydict = {
    'unitedarabemirates': 'ae',
    'argentina': 'ar',
    'austria': 'at',
    'australia': 'au',
    'belgium': 'be',
    'bulgaria': 'bg',
    'brazil': 'br',
    'canada': 'ca',
    'switzerland': 'ch',
    'china': 'cn',
    'colombia': 'co',
    'cuba': 'cu',
    'czechrepublic': 'cz',
    'germany': 'de',
    'egypt': 'eg',
    'france': 'fr',
    'unitedkingdom': 'gb',
    'greece': 'gr',
    'hongkong': 'hk',
    'hungary': 'hu',
    'indonesia': 'id',
    'ireland': 'ie',
    'israel': 'il',
    'india': 'in',
    'italy': 'it',
    'japan': 'jp',
    'southkorea': 'kr',
    'lithuania': 'lt',
    'latvia': 'lv',
    'morocco': 'ma',
    'mexico': 'mx',
    'malaysia': 'my',
    'nigeria': 'ng',
    'netherlands': 'nl',
    'norway': 'no',
    'newzealand': 'nz',
    'philippines': 'ph',
    'poland': 'pl',
    'portugal': 'pt',
    'romania': 'ro',
    'serbia': 'rs',
    'russia': 'ru',
    'saudiarabia': 'sa',
    'sweden': 'se',
    'singapore': 'sg',
    'slovenia': 'si',
    'slovakia': 'sk',
    'thailand': 'th',
    'turkey': 'tr',
    'taiwan': 'tw',
    'ukraine': 'ua',
    'unitedstatesofamerica': 'us',
    'venezuela': 've',
    'southafrica': 'za',
}

document.querySelector("button").addEventListener("click", async()=>{
        input = document.querySelector("input").value.toLowerCase();
        input = countrydict[input];
        console.log(input);

        query = urlleft + input + urlright;
        
        let req = new Request(query);

        let response = await fetch(req);
        let data = await response.json();
        console.log(data);

        let result = document.querySelector(".result");
        let handl = document.createElement("div");
        result.appendChild(handl);
        handl.setAttribute("class", "handl");

        for(let i=0; i<3; i++){

            let headline = document.createElement("h3");
            handl.appendChild(headline);
            headline.innerText = data.articles[i].title;

            let link = document.createElement("a");
            handl.appendChild(link);
            link.href = data.articles[i].url;
            link.target = "_blank";
            link.innerText = "Click here to read article";

            let line = document.createElement("hr");
            handl.appendChild(line);
        }
});