document.getElementById("getweather").addEventListener("click",()=>{
    let city= document.getElementById("city").value
    if(city){
        fetchdata(city)
    }else{
        alert("Please enter a city name")
    }

})
async function fetchdata(city){
    const apikey="34e8503aa618fdae7ea4f7b761f4d9c3 "
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    // let response = await fetch(url)
    // console.log(response)
    try{
        let response = await fetch(url)
        // console.log(response)
        if(!response.ok){
            throw new Error("city not found")
        }

        let data=  await response.json()

        display(data)

    }
    catch (error){
        // console.log(error.message)
        let a=document.getElementById('result')
        a.style.color="red"
        a.innerHTML=error.message

    }
   
}
function display(data){
    console.log(data);
    const {main,name,weather,wind}=data

    let b=document.getElementById("result");
    b.style.color="green";
    b.innerHTML=`<h2>Weather in ${name}</h2>
    <p>Temperature: ${main.temp}<sup>o</sup>C</p>
    <p>Humidity: ${main.humidity}kg/m<sup>3</sup></p>
    <p>Wind Speed: ${wind.speed}km/h</p>
    <p>Weather: ${weather[0].description}</p>`
}