let input = document.querySelector("input");
let srchbtn = document.querySelector("button");
let info = document.querySelector(".info");
let flagdiv = document.querySelector(".flagdiv");
let star = document.querySelector("#star");

srchbtn.addEventListener("click", async ()=>{

    let cntry = input.value.toLowerCase();

    let response = await fetch(`https://restcountries.com/v3.1/name/${cntry}?fullText=true`);
    let data = await response.json();
    console.log(data);

    let flag = document.createElement("img");
    flag.setAttribute("src",data[0].flags.png);
    flag.style.width = "100px";
    flag.style.border = "1px solid black";
    flag.style.marginTop = "30px";
    flagdiv.appendChild(flag);
    let name = document.createElement("p");
    flagdiv.appendChild(name);
    name.innerText = input.value.toLowerCase();
    name.style.textAlign = "center";
    name.style.textTransform = "capitalize";
    name.style.textDecoration = "underline";

    let cap = document.createElement("div");
    info.appendChild(cap);
    cap.setAttribute("class","desc");
    let caph = document.createElement("h3");
    caph.innerText = "Capital:";
    cap.appendChild(caph);
    let capa = document.createElement("h3");
    capa.setAttribute("class","answers");
    capa.innerText = data[0].capital;
    cap.appendChild(capa);

    let con = document.createElement("div");
    info.appendChild(con);
    con.setAttribute("class","desc");
    let conh = document.createElement("h3");
    conh.innerText = "Continent:";
    con.appendChild(conh);
    let cona = document.createElement("h3");
    cona.setAttribute("class","answers");
    cona.innerText = data[0].continents;
    con.appendChild(cona);

    let pop = document.createElement("div");
    info.appendChild(pop);
    pop.setAttribute("class","desc");
    let poph = document.createElement("h3");
    poph.innerText = "Population:";
    pop.appendChild(poph);
    let popa = document.createElement("h3");
    popa.setAttribute("class","answers");
    popa.innerText = data[0].population;
    pop.appendChild(popa);

    let cur = document.createElement("div");
    info.appendChild(cur);
    cur.setAttribute("class","desc");
    let curh = document.createElement("h3");
    curh.innerText = "Currency:";
    cur.appendChild(curh);
    let cura = document.createElement("h3");
    cura.setAttribute("class","answers");
    let currency = data[0].currencies[Object.keys(data[0].currencies)[0]].name;
    cura.innerText = currency;
    cur.appendChild(cura);

    let lang = document.createElement("div");
    info.appendChild(lang);
    lang.setAttribute("class","desc");
    let langh = document.createElement("h3");
    langh.innerText = "Languages:";
    lang.appendChild(langh);
    let langa = document.createElement("h3");
    langa.setAttribute("class","answers");
    let languages = Object.values(data[0].languages).toString();
    langa.innerText = languages;
    lang.appendChild(langa);

    input.value = "";
    star.style.display = "none";

    let cleardiv = document.createElement("div");
    info.appendChild(cleardiv);
    cleardiv.style.display = "flex";
    cleardiv.style.justifyContent = "center";
    cleardiv.style.marginTop = "20px";
    let clearbtn = document.createElement("button");
    clearbtn.innerText = "Clear";
    cleardiv.appendChild(clearbtn);
    clearbtn.addEventListener("click", ()=>{
        while(flagdiv.firstChild){
            flagdiv.removeChild(flagdiv.firstChild);
        }
        while(info.firstChild){
            info.removeChild(info.firstChild);
        }
        star.style.display = "block";
    });

});