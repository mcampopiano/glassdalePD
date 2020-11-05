import { useCriminals } from "../criminals/criminalProvider.js"
import {getNotes, useNotes} from "./NoteDataProvider.js"
const contentContainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

const render = (noteArr, criminalArr) => {
    contentContainer.innerHTML = noteArr.map(note => {
        const suspect = criminalArr.find(criminal => criminal.id === note.criminalId)
        console.log("suspect,", suspect)

        return `
        <section class="noteCard">
        <h3>Case ${note.Case}</h3>
        <p>Date of Interview: ${note.dateInterviewed}<p>
        <p>Recording Officer: ${note.author}<p>
        <p>Suspect/s interviewed: ${suspect.name}<p>
        <p>${note.note}<p>
        </section>
        `
    })
}

export const NoteList = () => {
    getNotes()
    .then(() => {
        const noteArr = useNotes()
        const criminalArr = useCriminals()

        render(noteArr, criminalArr)
        // console.log(noteArray)
        // let noteHtmlString = ""
        // for (const note of noteArray) {
        //     noteHtmlString += noteHTML(note)
        // }
        // contentContainer.innerHTML = `<h2>CASE NOTES:</h2>
        // ${noteHtmlString}`
    })
}