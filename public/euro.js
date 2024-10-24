document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("genBtn");

    button.addEventListener('click', () => {
        getNewBet();
    });

    function getNewBet() {
        fetch('http://localhost:3000/euro')  // Adjust URL if needed
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(bet => {
                console.log(bet.numbers, bet.stars);

                const theOLNumbers = document.getElementById('olMain');
                theOLNumbers.innerHTML = "";  // Clear previous numbers

                bet.numbers.forEach(number => {
                    const newLi = document.createElement("li");
                    newLi.innerHTML = number;
                    theOLNumbers.appendChild(newLi);
                });

                const theOLStars = document.getElementById('olStars');
                theOLStars.innerHTML = "";  // Clear previous stars

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