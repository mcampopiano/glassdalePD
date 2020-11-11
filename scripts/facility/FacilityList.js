import {getCriminals, useCriminals} from "../criminals/criminalProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { FacilityHtml } from "./Facility.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"

const eventHub = document.querySelector(".container")
const contentContainer= document.querySelector(".facilityContainer")

eventHub.addEventListener("facilitiesButtonClicked", event => {
    getCriminals()
    .then(getCriminalFacilities)
    .then(getFacilities)
    .then(() => {
        const criminals = useCriminals()
        const allFacilities = useFacilities()
        const intersecTable = useCriminalFacilities() 
        // console.log("intersecTable: ", intersecTable)
        render(criminals, allFacilities, intersecTable)
    })
})

const render = (criminalArr, FacilityArr, intersection) => {
    let facilityHtmlString = FacilityArr.map(cf => {
        const facilitiesForCriminals = intersection.filter(obj => obj.facilityId === cf.id)
        const criminals = facilitiesForCriminals.map(joinObj =>  {
            const matchingCriminalObj = criminalArr.find(criminal => criminal.id === joinObj.criminalId)
            return matchingCriminalObj
        })
       return FacilityHtml(cf, criminals)
    }).join("")
    contentContainer.classList.add("facilityContainer--style")
    contentContainer.innerHTML = `<h2>Facilities</h2>
    <p>${facilityHtmlString}</p>`
}