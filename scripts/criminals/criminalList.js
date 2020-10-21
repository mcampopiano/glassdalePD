import {getCriminals, useCriminals} from "./criminalProvider.js"
import {CriminalHtml} from "./criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

// We need a reference to the eventHub in each module/component that will need to either listen or dispatch to it
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

// // renders the criminal cards to the DOM
export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()
        let criminalHTMLRep = ""
        
        for (const criminal of criminalArray) {
            criminalHTMLRep += CriminalHtml(criminal)
        }
        contentTarget.innerHTML = `<h2>Criminals:</h2> <p> ${criminalHTMLRep}</p>`
    }
    )
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


