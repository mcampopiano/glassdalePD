import {getCriminals, useCriminals} from "./criminalProvider.js"
import {CriminalHtml} from "./criminal.js"

// renders the criminal cards to the DOM
export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()
        let criminalHTMLRep = ""
        const contentContainer = document.querySelector(".criminalsContainer")
        for (const criminal of criminalArray) {
            criminalHTMLRep += CriminalHtml(criminal)
        }
        contentContainer.innerHTML = criminalHTMLRep
    }
    )
}