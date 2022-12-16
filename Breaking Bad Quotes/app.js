// Storing our div to output our API data.
const dataOutput = document.querySelector('#dataOutput')

// Asynchronous Function to fetch the data.
async function getData() {
    // Await the response from the API.
    const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    // We wait on the response and convert it to JSON upon receiving it.
    const apiData = await response.json()
    // Once received we return the API data to work with it.
    return (apiData)
}

// Add eventListener to wait for the page load before fetching the data.
document.addEventListener("DOMContentLoaded", async () => {
    // Declare an empty array to store the API data.
    let apiData = []

    try {
        apiData = await getData()
    } catch (error) {
        console.log(error)
    }

    console.log(apiData[0].author)

    const dataText = document.createElement('p')
    dataText.innerText = `${apiData[0].author}: "${apiData[0].quote}"`
    dataText.classList.add('text')
    dataOutput.append(dataText)
})