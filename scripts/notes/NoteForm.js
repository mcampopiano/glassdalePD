const contentContainer = document.querySelector(".noteFormContainer")

const render = () => {
    contentContainer.innerHTML = `
    <input type="date" />
    <input type="text" placeholder="Author name">
    <input type="text" placeholder="Suspect name">
    <textarea placeholder="Enter note"></textarea>
    <button id="saveNote">Save Note</button>`
}

export const NoteForm = () => {
    render()
}