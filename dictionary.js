let input = document.querySelector("input");
let search = document.querySelector("button")
let base_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let box = document.querySelector(".box");

search.addEventListener("click", async ()=>{

    let result = document.createElement("div");
    box.appendChild(result);
    result.setAttribute("class","result");

    let final_url = base_url + input.value.toLowerCase();
    let response = await fetch(final_url);
    let data = await response.json();
    console.log(data);

    let wordpronun = document.createElement("div");
    result.appendChild(wordpronun);
    let word = document.createElement("h2");
    wordpronun.appendChild(word);
    let pronun = document.createElement("p");
    wordpronun.appendChild(pronun);
    word.innerText = input.value.toLowerCase();
    word.style.textTransform = "capitalize";
    pronun.innerText = data[0].phonetics[1].text;
    wordpronun.style.width = "400px"
    wordpronun.style.display = "flex";
    wordpronun.style.justifyContent = "left";
    word.style.backgroundColor = "black";
    word.style.color = "white";
    word.style.padding = "10px";
    pronun.style.margin = "0 0 0 20px";
    pronun.style.backgroundColor = "white";
    pronun.style.padding = "10px";
    pronun.style.borderRadius = "5px";

    let partsofspeech = document.createElement("div");
    result.appendChild(partsofspeech);
    partsofspeech.style.width = "400px"
    partsofspeech.style.display = "flex";
    partsofspeech.style.flexDirection = "column";
    partsofspeech.style.justifyContent = "left";
    data[0].meanings.forEach(meaning => {
        let meaningdiv = document.createElement("div");
        partsofspeech.appendChild(meaningdiv);
        meaningdiv.style.display = "flex";
        let pos = document.createElement("p");
        meaningdiv.appendChild(pos);
        pos.setAttribute("class","pos");
        pos.innerText = meaning.partOfSpeech + ':';
        let defn = document.createElement("p");
        meaningdiv.appendChild(defn);
        defn.innerText = meaning.definitions[0].definition;
        defn.style.marginLeft = "10px";
    });

    let cleardiv = document.createElement("div");
    result.appendChild(cleardiv);
    cleardiv.style.display = "flex";
    cleardiv.style.justifyContent = "center";
    let clear = document.createElement("button");
    cleardiv.appendChild(clear);
    clear.innerText = "Clear";
    clear.addEventListener("click", ()=>{
        while(result.firstChild){
            result.removeChild(result.firstChild);
        }
        box.removeChild(result);
    });

    input.value = "";

});