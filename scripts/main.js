/*import {getOfficers, useOfficers} from "./officers/officerProvider.js"

getOfficers()
.then(() => {
    const officerArray = useOfficers()
    console.log(officerArray)
}

)*/
import {getCriminals, useCriminals} from "./criminals/criminalProvider.js"

getCriminals()
.then(() => {
    const criminalArray = useCriminals()
    console.table(criminalArray)
})