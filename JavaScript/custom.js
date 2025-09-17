const apiKey = "7d239d7ca0ec26374c14b65a1dd36aff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const weatherCheck = async (city) => {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        
        $('.error_div').css('display', 'block');
        $('.weather').css('display', 'none');

    } else {
        var data = await response.json();

        console.log(data);
    
        let cityName = document.querySelector(".city"); // did the first one differently just to check if it would work
        cityName.innerHTML = data.name
    
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "℃";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    
        $('.weather').css('display', 'block');
        $('.error_div').css('display', 'none');
    }
}





$('.spin_loader').css('display', 'none');

$(".search_btn").click(function(){
    $('.spin_loader').css('display', 'block');
    $('.search_img').css('display', 'none');

    weatherCheck(searchBox.value);

    $('.spin_loader').css('display', 'none');
    $('.search_img').css('display', 'block');


});

