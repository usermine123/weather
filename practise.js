//const { default: axios } = require("axios")

const first = async () => {
    console.log('async function started')
    let place1 = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=tehran&appid=76e20650768c08a84ed2f979d428130d&units=metric')
    let place2 = place1.json()
    console.log(place2)
    console.log('you see the place1 valuen now goodbye')
}
first()