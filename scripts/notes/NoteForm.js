import { saveNote } from "./NoteDataProvider.js"

const contentContainer = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentContainer.innerHTML = `
    <section class="form">
    <input id="note--dateOfInterview" type="date" />
    <input id="note--case"type="text" placeholder="Case number" />
    <input id="note--author" type="text" placeholder="Author name" />
    <input id="note--suspect" type="text" placeholder="Suspect name" />
    <textarea id="note--note" placeholder="Enter note"></textarea>
    <button id="saveNote">Save Note</button>
    </section>`
    
}

export const NoteForm = () => {
    render()
}

eventHub.addEventListener("click", event => {
    if(event.target.id === "saveNote") {
    // get the input values from the form
    const dateInterviewed = document.querySelector("#note--dateOfInterview").value
    const topic = document.querySelector("#note--case").value
    const author = document.querySelector("#note--author").value
    const suspect = document.querySelector("#note--suspect").value
    const note = document.querySelector("#note--note").value
    console.log("The topic should be here: ", topic)

    const noteObj = {
        dateInterviewed,
        topic,
        author,
        suspect,
        note

    }
    console.log("Here is my noteObj", noteObj)

    // This function was written in the data provider and will post the new object to database/api/json file
    saveNote(noteObj)
}

})
