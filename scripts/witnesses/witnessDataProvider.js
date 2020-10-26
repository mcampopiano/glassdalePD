
let statements = []

export const useStatements = () => {
    return statements.slice()
}

export const getStatements = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(parsedStatements => statements = parsedStatements)
}