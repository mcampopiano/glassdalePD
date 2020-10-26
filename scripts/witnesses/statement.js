const eventHub = document.querySelector(".container")

const statementbuttonclicked = new CustomEvent("statementsRequested")

export const statementHTML = (statementObj) => {
    return `
    <div class="statement--cards">
        <h2>${statementObj.name}</h2>
        <p>${statementObj.statements}</p>
    </div>`
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "witnessBtn") {
        // console.log("I'm broadcasting")
        eventHub.dispatchEvent(statementbuttonclicked)
    }
})