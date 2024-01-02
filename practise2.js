const { default: axios } = require("axios")

const third = () => {
    let place2
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=tehran&appid=76e20650768c08a84ed2f979d428130d&units=metrichttps://api.openweathermap.org/data/2.5/forecast?q=tehran&appid=204d0aa5669acddafb4697d0f9cb49e1&units=metric').then((entrance) => {
        console.log(entrance.json())
        setTimeout(() => {
            place2 = entrance
        }, 10000);
    }).catch((errr) => {
        console.log(errr)
    })
}
third()