import { saveNote } from "./NoteDataProvider.js"
import {getCriminals, useCriminals} from "../criminals/criminalProvider.js"

const contentContainer = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (suspectArr) => {
    contentContainer.innerHTML = `
    <section class="form">
    <input id="note--dateOfInterview" type="date" />
    <input id="note--case"type="text" placeholder="Case number" />
    <input id="note--author" type="text" placeholder="Author name" />
    <select id="noteForm--criminal" class="criminalSelect">
    <option value="0">Please select a suspect</option>
    ${suspectArr.map(criminal => {
        return `<option value="${criminal.id}">${criminal.name}</option>`
    })}
    </select>
    <textarea id="note--note" placeholder="Enter note"></textarea>
    <button id="saveNote">Save Note</button>
    </section>`
    
}

export const NoteForm = () => {
    getCriminals()
    .then(() => {

        render(useCriminals())
    })
}

eventHub.addEventListener("click", event => {
    if(event.target.id === "saveNote") {
    // get the input values from the form
    const dateInterviewed = document.querySelector("#note--dateOfInterview").value
    const Case = document.querySelector("#note--case").value
    const author = document.querySelector("#note--author").value
    const suspect = document.querySelector("#note--suspect").value
    const note = document.querySelector("#note--note").value

    const noteObj = {
        dateInterviewed,
        Case,
        author,
        suspect,
        note

    }
    console.log("Here is my noteObj", noteObj)

    // This function was written in the data provider and will post the new object to database/api/json file
    saveNote(noteObj)
}

})
