function displayPoem(response) {
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
});

}

function generatePoem(event){
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "b99t41fb7bao38b2a301ca5200fbfdb3";
let prompt = `Generate concise but meaninful poem about ${instructionsInput.value}`;
let context = " your an outstanding poem expert and known for short poem. your mission is to generate a 5 line poem following the user-instructions. each line must have <br />";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.style.display = "block";
poemElement.innerHTML = `Generating poem about ${instructionsInput.value}...`;


axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#AI-poem-form");
poemFormElement.addEventListener("submit", generatePoem);