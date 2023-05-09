
const characterList = document.querySelector('.star-wars-characters')
fetch('https://swapi.dev/api/people/')

.then(response => response.json())

.then(data => {
    console.log(data)

// Iterate over the data and create a list item for each character

for (const actors of data.results) {
 const li = document.createElement('div');
 let characterImage;

 if (actors.name === "Luke Skywalker") {
 
 characterImage = "Imagem-Luke-Skywalker.png";
 
 } else if (actors.name === "C-3PO") {
 
characterImage = "Imagem-C-3P0.png";
 
} else if (actors.name === "R2-D2") {
 
  characterImage = "Imagem-R2-D2.png";
 
  } else if (actors.name === "Darth Vader") {
 
  characterImage = "Imagem-Darth-Vader.png";
 
  } else if (actors.name === "Owen Lars") {
 
  characterImage = "Imagem-Owen-Lars.png";
 
  } else if (actors.name === "Beru Whitesun lars") {
 
 characterImage = "Imagem-Beru-Whitesun-lars.png";
 
 } else if (actors.name === "R5-D4") {
 
  characterImage = "Imagem-R5-D4.png";
 
 } else if (actors.name === "Biggs Darklighter") {
 
  characterImage = "Imagem-Biggs-Darklighter.png";
 
 } else if (actors.name === "Obi-Wan Kenobi") {
 
characterImage = "Imagem-Obi-Wan-Kenobi.png";
 
  } else if (actors.name === "Leia Organa") {
 
characterImage = "Imagem-Leia-Organa.png";
 
 } else {
 
 characterImage = "default-image.png";
 
 }
 li.innerHTML = `       

  <div class="all-characters">
            <img class="image" src="${characterImage}" alt="">
            <p class="name">Name: ${actors.name}</p>
            <p class="height">Height: ${actors.height}</p>
            <p class="mass">Mass-weight: ${actors.mass}</p>
            <p class="hair-color">Hair-color: ${actors.hair_color}</p>
            <P class="skin-color">Skin-color: ${actors.skin_color}</P>
            <p class="eye-color">Eye-color: ${actors.eye_color}</p>
            <p class="birth-year">Birthday: ${actors.birth_year}</p>
            <p class="gender">Gender: ${actors.gender}</p>
 </div>`;
characterList.appendChild(li);
 } })
.catch(error => {console.error(`Error: ${error}`);});