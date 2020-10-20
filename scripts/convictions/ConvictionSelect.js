
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// ***********************THIS WAS MY CODE BEFORE REFACTORING WITH EVENT HUB *******************
// /*
//  *   ConvictionSelect component that renders a select HTML element
//  *   which lists all convictions in the Glassdale PD API
//  */

// // Get a reference to the DOM element where the <select> will be rendered
// const contentTarget = document.querySelector(".filters__crime")

// export const ConvictionSelect = () => {
//     // Get all convictions from application state
//     getConvictions()
//     .then(() => {

//         const convictions = useConvictions()
//         render(convictions)
//     }
//     )
// }

// const render = convictionsCollection => {
//     /*
//         Use interpolation here to invoke the map() method on
//         the convictionsCollection to generate the option elements.
//         Look back at the example provided above.
//     */
//     contentTarget.innerHTML = 
        
// }

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {
    
    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        console.log("target id", event.target.id)
        console.log("Target value", event.target.value)
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `<select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${
        convictionsCollection.map(crimeObj => {
            return `<option value=${crimeObj.id}>${crimeObj.name}</option>`
        }).join("")
    }
</select>
`
}


export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}