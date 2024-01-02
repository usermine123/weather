const apikey = '76e20650768c08a84ed2f979d428130d'

const mainf = () => {
    let w = document.getElementById('mainid')
    let o = w.value
    main(o)
}

const mains = () => {
    alert('calculating the day after tomorrow and two day after tomorrow...')
    let w = document.getElementById('mainid')
    let o = w.value
    next(o)
}
async function main(city) {
    alert('calculating today and tommorrow...')
    let place1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`)
    let place2 = await place1.json()
    document.querySelector('.temp1').textContent = place2.list[0].main.temp + '° degree'
    document.querySelector('.humidity1').textContent = place2.list[0].main.humidity + '% humidity'
    document.querySelector('.windspeed1').textContent = place2.list[0].wind.speed + 'km/h'
    document.querySelector('.temp2').textContent = place2.list[1].main.temp + '° degree'
    let weathericon = document.querySelector('.snow')
    let weathericon2 = document.querySelector('.drizzle')

    if (place2.list[0].weather[0].main === 'Clouds') {
        weathericon.src = './clouds.png'
    } else if (place2.list[0].weather[0].main === 'Clear') {
        weathericon.src = './clear.png'
    } else if (place2.list[0].weather[0].main === 'Rain') {
        weathericon.src = './rain.png'
    } else if (place2.list[0].weather[0].main === 'Drizzle') {
        weathericon.src === './drizzle.png'
    } else if (place2.list[0].weather[0].main === 'Mist') {
        weathericon.src = './mist.png'
    }

    if (place2.list[1].weather[0].main === 'Clouds') {
        weathericon2.src = './clouds.png'
    } else if (place2.list[1].weather[0].main === 'Clear') {
        weathericon2.src = './clear.png'
    } else if (place2.list[1].weather[0].main === 'Rain') {
        weathericon2.src = './rain.png'
    } else if (place2.list[1].weather[0].main === 'Drizzle') {
        weathericon2.src === './drizzle.png'
    } else if (place2.list[1].weather[0].main === 'Mist') {
        weathericon2.src = './mist.png'
    }
}
const next = async (city) => {
    let place3 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`)
    let place4 = await place3.json()
    console.log(place4)
    let weathericon3 = document.querySelector('.snow')
    let weathericon4 = document.querySelector('.drizzle')
    document.querySelector('.temp1').textContent = place4.list[2].main.temp + '° degree'
    document.querySelector('.temp2').textContent = place4.list[3].main.temp + '° degree'
    document.querySelector('.humidity1').textContent = place4.list[2].main.humidity + '% humidity'
    document.querySelector('.windspeed1').textContent = place4.list[3].wind.speed + 'km/h'
    console.log(place4.list[2].weather[0].main)
    console.log(place4.list[0].weather[0].main)
    if (place4.list[2].weather[0].main === 'Clouds') {
        weathericon3.src = './clouds.png'
    } else if (place4.list[2].weather[0].main === 'Clear') {
        weathericon3.src = './clear.png'
    } else if (place4.list[2].weather[0].main === 'Rain') {
        weathericon3.src = './rain.png'
    } else if (place4.list[2].weather[0].main === 'Drizzle') {
        weathericon3.src === './drizzle.png'
    } else if (place4.list[2].weather[0].main === 'Mist') {
        weathericon3.src = './mist.png'
    }
    if (place4.list[3].weather[0].main === 'Clouds') {
        weathericon4.src = './clouds.png'
    } else if (place4.list[3].weather[0].main === 'Clear') {
        weathericon4.src = './clear.png'
    } else if (place4.list[3].weather[0].main === 'Rain') {
        weathericon4.src = './rain.png'
    } else if (place4.list[3].weather[0].main === 'Drizzle') {
        weathericon4.src === './drizzle.png'
    } else if (place4.list[3].weather[0].main === 'Mist') {
        weathericon4.src = './mist.png'
    }
}
const hovering1 = () => {
    let place3 = document.querySelector('.come1')
    place3.style.top = '8px'
}