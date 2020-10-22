import { noteHTML } from "./Note.js"
import {getNotes, useNotes} from "./NoteDataProvider.js"
const contentContainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {
    getNotes()
    .then(() => {
        const noteArray = useNotes()
        console.log(noteArray)
        let noteHtmlString = ""
        for (const note of noteArray) {
            noteHtmlString += noteHTML(note)
        }
        contentContainer.innerHTML = `<h2>CASE NOTES:</h2>
        ${noteHtmlString}`
    })
}