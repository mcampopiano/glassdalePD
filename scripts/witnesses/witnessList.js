import { statementHTML } from "./statement.js"
import { getStatements, useStatements } from "./witnessDataProvider.js"

const eventHub = document.querySelector(".container")
const contentContainer = document.querySelector(".criminalsContainer")

eventHub.addEventListener("statementsRequested", event => {
    // console.log("I'm listening")
    getStatements()
    .then(() => {

        let statementHTMLString = ""
        const statementArr = useStatements()
        for (const statement of statementArr) {
            statementHTMLString += statementHTML(statement)
        }
        contentContainer.innerHTML = `<h2>Witness Statements:</h2> 
        ${statementHTMLString}`
    })

})