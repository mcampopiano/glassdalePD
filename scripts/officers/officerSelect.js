import { getOfficers, useOfficers } from "./officerProvider.js"

const eventHub = document.querySelector(".container")
const contentContainer = document.querySelector(".filters__officer")

const renderOfficers = officerArray => {
    
    contentContainer.innerHTML = `<select class="dropdown" id="officerSelect">
    <option value="0">Please select officer...</option>
    ${
        officerArray.map(officer => {
            return `<option value=${officer.id}>${officer.name}</option>`
        }).join("")
    }
</select>
`
}

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
    const officers = useOfficers()
    renderOfficers(officers)
    })
}

eventHub.addEventListener("change", event => {
    
    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "officerSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: parseInt(event.target.value)
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})