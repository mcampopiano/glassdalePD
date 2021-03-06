const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []

export const useNotes = () => {
    return notes.slice()
}

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const saveNote = noteObject => {
    return fetch("http://localhost:8088/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObject)
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
    .then(getNotes)
}