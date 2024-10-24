document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("genBtn");

    button.addEventListener('click', () => {
        getNewBet();
    });

    function getNewBet() {
        fetch('https://sir-euromilhoes-19cf.onrender.com/euro') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(bet => {
                console.log(bet.numbers, bet.stars);

                const theOLNumbers = document.getElementById('olMain');
                theOLNumbers.innerHTML = "";

                bet.numbers.forEach(number => {
                    const newLi = document.createElement("li");
                    newLi.innerHTML = number;
                    theOLNumbers.appendChild(newLi);
                });

                const theOLStars = document.getElementById('olStars');
                theOLStars.innerHTML = "";

                bet.stars.forEach(star => {
                    const newLi = document.createElement("li");
                    newLi.innerHTML = star;
                    theOLStars.appendChild(newLi);
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
});