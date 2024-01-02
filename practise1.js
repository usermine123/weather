const { default: axios } = require("axios")

const fourth = async () => {
    const place1 = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=tehran&appid=76e20650768c08a84ed2f979d428130d&units=metric')
    const place2 = place1.json()
    console.log(place2)
}
fourth()