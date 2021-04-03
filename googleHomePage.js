window.addEventListener('DOMContentLoaded', event => {

//Whatever the user types into the search box, it will store that value as a cookie!
    let input = document.getElementById('searchBar');
    let googleButton = document.getElementById('search-button-1');

        googleButton.addEventListener('click', event => {
           function createCookies(name, value) {
               value = input.value;
               document.cookie = `${name}=${value}`
               location.reload();
           }
        createCookies('Search');
    });

//When the user clicks "Im feeling lucky", it displays a message underneath the buttons and then reloads the page after a 3 second delay.
    let luckyButton = document.getElementById('search-button-2')
    let luckyDiv = document.getElementById('feeling-lucky-response');

    luckyButton.addEventListener('click', event => {
        luckyDiv.innerHTML = 'Sorry! I cannot do this right now!'
        setTimeout(function() {
            location.reload();
        }, 3000)
    })


});
