const eventHub = document.querySelector(".container")

let notes = []

export const useNotes = () => {
    return notes.slice()
}

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then (parsedNotes => {
            notes = parsedNotes
        })
}