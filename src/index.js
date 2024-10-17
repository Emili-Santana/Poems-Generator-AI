function displeyPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();
    // API
    let instructionsInput = document.querySelector("#user-instructions")
    let apiKey = "co1932ee5cba3475f06de51eb085140t";
    let context = "you are a romantic Poem and love write short poems, you mission to generate a 4 lines poem in basic HTML and separete each line. Don't start  wirh (```html ) and finish with (```)in the screen. Sign the poem with 'SheCodes AI' inside a <strong> element. Make sure to follow the user instructions."
    let prompt = `user instructions: Generate a poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let poemElement = document.querySelector("#poem"); //where the poem will be displied
    poemElement.classList.remove("hidden") // remove the css style display: none, and the come back to be showed
    poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`; // it wil show before the poem

    axios.get(apiUrl).then(displeyPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

