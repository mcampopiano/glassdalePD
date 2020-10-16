// declare a variable for an empty array using let so it can be modified later
let criminals = []
// returns a copy of the criminals array
export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    // grabs all the data from the API
    return fetch("https://criminals.glassdale.us/criminals")
    // converts/parses that data (automatically stored in the variable response) into a json readable format
    .then(response => response.json())
    // takes the value of the previous .then function and stores it in the parsedCriminals variable, then gives the criminals array a new value
    .then(parsedCriminals => {
        criminals = parsedCriminals
    })
}