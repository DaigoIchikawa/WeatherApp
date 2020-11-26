

window.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button');
    var inputValue = document.querySelector('.inputValue');
    var name = document.querySelector('.name');
    var desc = document.querySelector('.desc');
    var temp = document.querySelector('.temp');

    button.addEventListener('click', function () {

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=2ebb6e5f7a080bafcd1775a3c73466e1')
            .then(response => response.json())
            .then(data => {
                let nameValue = data['name'];
                let tempValue = data['main']['temp'];
                let descValue = data['weather'][0]['description'];

                name.innerHTML = nameValue;
                temp.innerHTML = tempValue;
                desc.innerHTML = descValue;
            })
            .catch(err => alert('Wrong City Name!!'))
    });

});
