// after refactoring to in chapter 13 this is no longer being used, but I don't want to delete yet until I know I won't need it later.

const noteHTML = noteObj => {
    return `
    <section class="noteCard">
    <h3>Case ${noteObj.Case}</h3>
    <p>Date of Interview: ${noteObj.dateInterviewed}<p>
    <p>Recording Officer: ${noteObj.author}<p>
    <p>Suspect/s interviewed: ${noteObj.criminalId}<p>
    <p>${noteObj.note}<p>
    <button id="deleteNote--${noteObj.id}">Delete</button>
    </section>
    `
}