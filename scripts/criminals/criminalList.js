import {getCriminals, useCriminals} from "./criminalProvider.js"
import {CriminalHtml} from "./criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

// ******************MY CODE BEFORE REFACTORING FOR EVENT HUB ****************

// // renders the criminal cards to the DOM
const contentContainer = document.querySelector(".criminalsContainer")
export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()
        let criminalHTMLRep = ""
        
        for (const criminal of criminalArray) {
            criminalHTMLRep += CriminalHtml(criminal)
        }
        contentContainer.innerHTML = `<h2>Criminals:</h2> <p> ${criminalHTMLRep}</p>`
    }
    )
}

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")



// Render ALL criminals initally
// export const CriminalList = () => {
//     getCriminals()
//         .then(() => {
//             const appStateCriminals = useCriminals()
//             render(appStateCriminals)
//         })
// }

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
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       for (const criminal of matchingCriminals) {
        filteredCriminalHtmlRep += CriminalHtml(criminal)
    }
    contentContainer.innerHTML = `<h2>Criminals:</h2> <p> ${filteredCriminalHtmlRep}</p>`
    }    
})

const render = criminalCollection => {
    contentTarget.innerHTML = you_fill_this_in
}


