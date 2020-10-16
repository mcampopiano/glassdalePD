// Empty array. Needs to use 'let' so that we can change it's value later
let officers = []
// returns a copy of the officers array
export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    // grabs all the data from the API
    return fetch("https://criminals.glassdale.us/officers")
    // converts/parses that data (automatically stored in the variable response) into a json readable format
    .then(response => response.json())
    // takes the value of the previous .then function and stores it in the parsedOfficers variable, then gives the officers array a new value
    .then(
        parsedOfficers => {
            officers = parsedOfficers
        }
    )
}