import {useCriminals} from "./criminalProvider.js"

const eventHub = document.querySelector(".container")
const contentContainer = document.querySelector(".alibiContainer")

export const AlibiListener = () => {
    eventHub.addEventListener("alibiBtnClicked", event => {
        // console.log("I heard you!")

        const criminalArray = useCriminals()
        // console.log("Here they are: ", criminalArray)
        const selectedCriminal = criminalArray.find(criminalObj => criminalObj.id === event.detail.criminalId)
        // console.log("here's the criminal: ", selectedCriminal)
        AlibiList(selectedCriminal)
    })
}

const AlibiList = (criminalObj) => {
    render(criminalObj)
}
const render = (criminalObj) => {
 contentContainer.innerHTML = `
 <div class="alibi__list">
 <h2>ALIBI</h2>
    ${criminalObj.known_associates.map(associate => {
        return `
        <p>Name of witness: ${associate.name}</P>
        <p>Stated alibi: ${associate.alibi}</P>`
    })}
 </div>`
}