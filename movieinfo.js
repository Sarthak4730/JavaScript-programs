let input = document.querySelector("input");
let button = document.querySelector("button");
let base_url = "https://www.omdbapi.com/?apikey=8b42075&t=";

button.addEventListener("click", async()=>{
    
    //getting movie title in +separated form
    let name = "";
    for(let i=0; i<input.value.length; i++){
        if(input.value.charAt(i) == ' '){
            name += '+';
        }else{
            name += input.value.charAt(i);
        }
    }

    //API CALL
    let final_url = base_url + name;
    let response = await fetch(final_url);
    let data = await response.json();
    console.log(data);

    //Hide Searchbar
    let user = document.querySelector(".user");
    user.style.display = "none";
    
    //Displaying Info
    let box = document.querySelector(".box");
    let infoimagediv = document.createElement("div");
    box.appendChild(infoimagediv);
    infoimagediv.setAttribute("class","infoimagediv");
    let info = document.createElement("div");
    info.style.width = "400px";
    infoimagediv.appendChild(info);
    let image = document.createElement("div");
    image.style.width = "400px";
    infoimagediv.appendChild(image);
    //Title
    let title = document.createElement("p");
    info.appendChild(title);
    title.innerText = "TITLE:   "+data.Title;
    //Year
    let year = document.createElement("p");
    info.appendChild(year);
    year.innerText = "YEAR:   "+data.Year;
    //Imdb Rating
    let imdbRating = document.createElement("p");
    info.appendChild(imdbRating);
    imdbRating.innerText = "IMDB RATING:   "+data.imdbRating;
    //Runtime
    let runtime = document.createElement("p");
    info.appendChild(runtime);
    runtime.innerText = "RUNTIME:   "+data.Runtime;
    //Language
    let language = document.createElement("p");
    info.appendChild(language);
    language.innerText = "LANGUAGE(S):   "+data.Language;
    //Genre
    let genre = document.createElement("p");
    info.appendChild(genre);
    genre.innerText = "GENRE(S):   "+data.Genre;
    //Director
    let director = document.createElement("p");
    info.appendChild(director);
    director.innerText = "DIRECTOR(S):   "+data.Director;
    //Actors
    let actors = document.createElement("p");
    info.appendChild(actors);
    actors.innerText = "ACTORS:   "+data.Actors;
    //Box Office Collection
    let BoxOffice = document.createElement("p");
    info.appendChild(BoxOffice);
    BoxOffice.innerText = "BOX OFFICE COLLECTION:   "+data.BoxOffice;
    //Awards
    let awards = document.createElement("p");
    info.appendChild(awards);
    awards.innerText = "AWARDS:   "+data.Awards;
    //Plot
    let plot = document.createElement("p");
    info.appendChild(plot);
    plot.innerText = "PLOT:   "+data.Plot;
    //Poster
    let Poster = document.createElement("img");
    image.appendChild(Poster);
    Poster.setAttribute("src",`${data.Poster}`);

    //Back Button
    let back = document.createElement("button");
    box.appendChild(back);
    back.innerText = "Back";
    back.style.marginTop = "20px";
    back.addEventListener("click", ()=>{
        box.removeChild(infoimagediv);
        box.removeChild(back);
        user.style.display = "flex";
    });

    input.value = "";

});