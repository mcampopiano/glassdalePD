import {getCriminals, useCriminals} from "./criminalProvider.js"
import {CriminalHtml} from "./criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/officerProvider.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

// We need a reference to the eventHub in each module/component that will need to either listen or dispatch to it
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

// // renders the criminal cards to the DOM
export const CriminalList = () => {
    getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then(() => {
        const criminalArray = useCriminals()
        const facilities = useFacilities()
        const crimFacilities = useCriminalFacilities()
        // let criminalHTMLRep = ""
        
        // for (const criminal of criminalArray) {
        //     criminalHTMLRep += CriminalHtml(criminal)
        // }
        // contentTarget.innerHTML = `<h2>Criminals:</h2> <p> ${criminalHTMLRep}</p>`
        render(criminalArray, facilities, crimFacilities)
    }
    )
}

const render = (criminalArr, facilitiesArr, crimFacilitiesArr) => {
    debugger
    let criminalHTMLRep = ""
    criminalHTMLRep = criminalArr.map(criminal => {
        // First take the criminal object and find the matching objects in the join table
        const facilitiesForCriminal = crimFacilitiesArr.filter(fr => fr.criminalId === criminal.id)
        // then take those join table objects and match them to the individual facility objects. Needs to iterate and use .find instead of filter because each relationship obj will only match to one facility obj
        const facilities = facilitiesForCriminal.map(cf => {
            const matchingFacilityObj = facilitiesArr.find(facility => facility.id === cf.facilityId)
            return matchingFacilityObj
        })
        return CriminalHtml(criminal, facilities)
    }).join("")
    contentTarget.innerHTML = `<h2>Criminals:</h2> 
    <p>${criminalHTMLRep}</p>`
}
// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
        const appStateCriminals = useCriminals()
        const convictionsArr = useConvictions()
        const crimeId = convictionsArr.find(convictionObj => {
            return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
        })
        console.log("crimeId", crimeId)
    let filteredCriminalHtmlRep = ""
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = appStateCriminals.filter(currentCriminal => {
            return currentCriminal.conviction === crimeId.name
        })
        console.log("Matching criminals: ", matchingCriminals)
       for (const criminal of matchingCriminals) {
        filteredCriminalHtmlRep += CriminalHtml(criminal)
    }
    contentTarget.innerHTML = `<h2>Criminals:</h2> <p> ${filteredCriminalHtmlRep}</p>`
    }    
})
// Listen for the event created in OfficerSelect.js
eventHub.addEventListener('officerChosen', event => {
        const appStateCriminals = useCriminals()
        const officers = useOfficers()
        const arrestingCop = officers.find(officerObj => {
            return officerObj.id === event.detail.officerThatWasChosen
        })
    let filteredCriminalHtmlRep = ""
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = appStateCriminals.filter(currentCriminal => {
            return currentCriminal.arrestingOfficer === arrestingCop.name
        })
        console.log("Matching criminals: ", matchingCriminals)
       for (const criminal of matchingCriminals) {
        filteredCriminalHtmlRep += CriminalHtml(criminal)
    }
    contentTarget.innerHTML = `<h2>Criminals:</h2> <p> ${filteredCriminalHtmlRep}</p>`
    }    
})


