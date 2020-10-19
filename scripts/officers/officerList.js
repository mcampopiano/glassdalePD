import { OfficerHtml } from "./officer.js"
import {getOfficers, useOfficers} from "./officerProvider.js"
export const officerList = () => {
    getOfficers()
    .then(() => {
        let officerHtmlString = ""
        const officerArr = useOfficers()
        const contentContainer = document.querySelector(".officersContainer")
        for (const officer of officerArr) {
            officerHtmlString += OfficerHtml(officer)
        }
        contentContainer.innerHTML = officerHtmlString
    })
}