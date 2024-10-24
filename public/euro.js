document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("genBtn");

    button.addEventListener('click', () => {
        getNewBet();
    });

    function getNewBet() {
        fetch('http://localhost:3000/euro') 
            .then(response => response.json()) 
            .then(bet => {
                console.log(bet.numbers);

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
            .catch(error => console.error('Error:', error));
    }
});