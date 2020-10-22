export const noteHTML = noteObj => {
    return `
    <section class="noteCard">
    <h3>Case ${noteObj.Case}</h3>
    <p>Date of Interview: ${noteObj.dateInterviewed}<p>
    <p>Recording Officer: ${noteObj.author}<p>
    <p>Suspect/s interviewed: ${noteObj.suspect}<p>
    <p>${noteObj.note}<p>
    </section>
    `
}

// "dateInterviewed": "2020-10-22",
//       "topic": "test 26",
//       "author": "Mario",
//       "suspect": "Typo",
//       "note": "If this works...",
//       "id": 1