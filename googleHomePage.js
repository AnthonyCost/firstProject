window.addEventListener('DOMContentLoaded', event => {

//Whatever the user types into the search box, it will store as a cookie!
    let input = document.getElementById('searchBar');
    let googleButton = document.getElementById('search-button-1');

        googleButton.addEventListener('click', event => {
        let value = input.value;
        document.cookie = `Search=${value}`;
    });


    let luckyButton = document.getElementById('search-button-2')
    let luckyDiv = document.getElementById('feeling-lucky-response');

    luckyButton.addEventListener('click', event => {
        luckyDiv.innerHTML = 'Sorry! I cannot do this right now!'
        setTimeout(function() {
            location.reload();
        }, 3000)
    })


});
