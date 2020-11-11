import { getCriminals, useCriminals } from "../criminals/criminalProvider.js"
import {deleteNote, getNotes, useNotes} from "./NoteDataProvider.js"
const contentContainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

const render = (noteArr, criminalArr) => {
    contentContainer.innerHTML = noteArr.map(note => {
        const suspect = criminalArr.find(criminal => criminal.id === note.criminalId)
        return `
        <section class="noteCard">
        <h3>Case ${note.Case}</h3>
        <p>Date of Interview: ${note.dateInterviewed}<p>
        <p>Recording Officer: ${note.author}<p>
        <p>Suspect/s interviewed: ${suspect.name}<p>
        <p>${note.note}<p>
        <button id="deleteNote--${note.id}">Delete</button>
        </section>
        `
    }).join("")
}

export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const noteArr = useNotes()
        const criminalArr = useCriminals()

        render(noteArr, criminalArr)
        
    })
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteNote--")) {
        let [prefix, id] = event.target.id.split("--")
        deleteNote(id)
        .then(() => {
            const updatedNotes = useNotes()
            const criminals = useCriminals()
            render(updatedNotes, criminals)
        })
    }
})