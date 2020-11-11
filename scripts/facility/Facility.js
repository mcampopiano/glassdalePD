const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facility_button")

export const DisplayFacilitiesButton = () => {
    contentTarget.innerHTML = `<button id="facilityBtn">List facilities</button>`
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "facilityBtn") {
        const facilityEvent = new CustomEvent("facilitiesButtonClicked")
        eventHub.dispatchEvent(facilityEvent)
    }
})