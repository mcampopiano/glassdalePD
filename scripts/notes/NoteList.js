import { noteHTML } from "./Note.js"
import {getNotes, useNotes} from "./NoteDataProvider.js"
const contentContainer = document.querySelector(".notesContainer")

export const NoteList = () => {
    getNotes()
    .then(() => {
        const noteArray = useNotes()
        console.log(noteArray)
        let noteHtmlString = ""
        for (const note of noteArray) {
            noteHtmlString += noteHTML(note)
        }
        contentContainer.innerHTML = `<h2>NOTES:</h2>
        ${noteHtmlString}`
    })
}