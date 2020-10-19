import { OfficerHtml } from "./officer.js"
import {getOfficers, useOfficers} from "./officerProvider.js"
export const OfficerList = () => {
    getOfficers()
    .then(() => {
        let officerHtmlString = ""
        const officerArr = useOfficers()
        const contentContainer = document.querySelector(".officersContainer")
        for (const officer of officerArr) {
            officerHtmlString += OfficerHtml(officer)
        }
        contentContainer.innerHTML = `<h2>Officers:</h2> <p>${officerHtmlString}</p>`
    })
}