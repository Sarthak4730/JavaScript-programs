let input = document.querySelector("input");
let button = document.querySelector("button");
let base_url = "http://api.weatherapi.com/v1/current.json?key=e96cf0ee601b40929df72743241301&q=";
let user = document.querySelector(".user");
let box = document.querySelector(".box");

button.addEventListener("click", async()=>{
    

    let final_url = base_url + input.value; 
    let response = await fetch(final_url);
    let data = await response.json();
    console.log(data);


    input.value = "";
    user.style.display = "none";
    

    let infodiv = document.createElement("div");
    infodiv.setAttribute("class","infodiv");
    box.appendChild(infodiv);

    let loc = document.createElement("p");
    loc.style.fontWeight = "bolder";
    infodiv.appendChild(loc);
    loc.innerText = data.location.name+', '+data.location.region+', '+data.location.country;

    let daynight = document.createElement("div");
    infodiv.appendChild(daynight);
    daynight.style.display = "flex";
    daynight.style.justifyContent = "center";
    daynight.style.alignItems = "center";
    daynight.style.width = "400px";
    daynight.style.justifyContent = "left";
    let icon = document.createElement("i");
    daynight.appendChild(icon);
    let state = document.createElement("p");
    state.style.fontWeight = "bold";
    state.style.marginLeft = "15px";
    daynight.appendChild(state);
    if(data.current.is_day == 1){
        icon.setAttribute("class","fa-regular fa-sun fa-2xl");
        state.innerText = "Day";
    }else{
        icon.setAttribute("class","fa-regular fa-moon fa-2xl");
        state.innerText = "Night";
    }
    
    let humidiv = document.createElement("div");
    infodiv.appendChild(humidiv);
    humidiv.style.width = "400px";
    humidiv.style.justifyContent = "left";
    let humidity = document.createElement("p");
    humidiv.appendChild(humidity);
    humidity.innerText = "Humidity = "+data.current.humidity;
    humidity.style.fontWeight = "bold";

    let tempfeeldiv = document.createElement("div");
    tempfeeldiv.style.width = "400px";
    tempfeeldiv.style.display = "flex";

    infodiv.appendChild(tempfeeldiv);
    //Temperature
    let tempdiv = document.createElement("div");
    tempfeeldiv.appendChild(tempdiv);
    tempdiv.style.display = "flex";
    tempdiv.style.flexDirection = "column";
    tempdiv.style.width = "200px";
    let temperature = document.createElement("p");
    tempdiv.appendChild(temperature);
    temperature.innerText = "Temperature: ";
    temperature.style.fontWeight = "bold";
    let tempc = document.createElement("p");
    tempdiv.appendChild(tempc);
    tempc.innerText = data.current.temp_c+"\u00B0 C";
    let tempf = document.createElement("p");
    tempdiv.appendChild(tempf);
    tempf.innerText = data.current.temp_f+"\u00B0 F";
    //Feels Like
    let feeldiv = document.createElement("div");
    tempfeeldiv.appendChild(feeldiv);
    feeldiv.style.display = "flex";
    feeldiv.style.flexDirection = "column";
    feeldiv.style.width = "200px";
    let feelslike = document.createElement("p");
    feeldiv.appendChild(feelslike);
    feelslike.innerText = "Feels Like: ";
    feelslike.style.fontWeight = "bold";
    let feelc = document.createElement("p");
    feeldiv.appendChild(feelc);
    feelc.innerText = data.current.feelslike_c+"\u00B0 C";
    let feelf = document.createElement("p");
    feeldiv.appendChild(feelf);
    feelf.innerText = data.current.feelslike_f+"\u00B0 F";

    let back = document.createElement("button");
    back.setAttribute("class","back");
    infodiv.appendChild(back);
    back.innerText = "Back";


    back.addEventListener("click", ()=>{
        box.removeChild(infodiv);
        user.style.display = "flex";
    });

});