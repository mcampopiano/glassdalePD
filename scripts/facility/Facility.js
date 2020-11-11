const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facility_button")

export const DisplayFacilitiesButton = () => {
    contentTarget.innerHTML = `<button id="facilityBtn">List facilities</button>`
}

export const FacilityHtml = (facility, criminals) => {
    return `
    <div class="facility__card">
        <h3>${facility.facilityName}</h3>
        <p>Capacity: ${facility.capacity}</p>
        <p>Security Level: ${facility.securityLevel}</p>
        <div>
            <h4>Criminals</h4>
            <ul>
                ${criminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
            </ul>
        </div>
    </div>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "facilityBtn") {
        const facilityEvent = new CustomEvent("facilitiesButtonClicked")
        eventHub.dispatchEvent(facilityEvent)
    }
})