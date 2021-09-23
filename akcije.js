var gameOver = false;
var redIgrača = 1;
var povijestOdabira = {};
var poruka = "";

function provjeraStanja() {
    //vodoravne pobijede
    if (povijestOdabira[1] == 1 && povijestOdabira[2] == 1 && povijestOdabira[3] == 1) {
        poruka = "Plavi je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[1] == 0 && povijestOdabira[2] == 0 && povijestOdabira[3] == 0) {
        poruka = "Crveni je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[4] == 1 && povijestOdabira[5] == 1 && povijestOdabira[6] == 1) {
        poruka = "Plavi je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[4] == 0 && povijestOdabira[5] == 0 && povijestOdabira[6] == 0) {
        poruka = "Crveni je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[7] == 1 && povijestOdabira[8] == 1 && povijestOdabira[9] == 1) {
        poruka = "Plavi je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[7] == 0 && povijestOdabira[8] == 0 && povijestOdabira[9] == 0) {
        poruka = "Crveni je pobijedio!!";
        gameOver = true;
    }
    // okomite pobjede
    else if (povijestOdabira[1] == 1 && povijestOdabira[4] == 1 && povijestOdabira[7] == 1) {
        poruka = "Plavi je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[1] == 0 && povijestOdabira[4] == 0 && povijestOdabira[7] == 0) {
        poruka = "Crveni je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[2] == 1 && povijestOdabira[5] == 1 && povijestOdabira[8] == 1) {
        poruka = "Plavi je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[2] == 0 && povijestOdabira[5] == 0 && povijestOdabira[8] == 0) {
        poruka = "Crveni je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[3] == 1 && povijestOdabira[6] == 1 && povijestOdabira[9] == 1) {
        poruka = "Plavi je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[3] == 0 && povijestOdabira[6] == 0 && povijestOdabira[9] == 0) {
        poruka = "Crveni je pobijedio!!";
        gameOver = true;
    }
    //dijagonalne pobjede
    else if (povijestOdabira[1] == 1 && povijestOdabira[5] == 1 && povijestOdabira[9] == 1) {
        poruka = "Plavi je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[1] == 0 && povijestOdabira[5] == 0 && povijestOdabira[9] == 0) {
        poruka = "Crveni je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[3] == 1 && povijestOdabira[5] == 1 && povijestOdabira[7] == 1) {
        poruka = "Plavi je pobijedio!!";
        gameOver = true;
    } else if (povijestOdabira[3] == 0 && povijestOdabira[5] == 0 && povijestOdabira[7] == 0) {
        poruka = "Crveni je pobijedio!!";
        gameOver = true;
    }
}

function igra(id) {
    if (redIgrača % 2 != 0) {
        document.getElementById(id).style.backgroundColor = "blue";
        povijestOdabira[id] = 1;
    } else {
        document.getElementById(id).style.backgroundColor = "red";
        povijestOdabira[id] = 0;
    }
    redIgrača++;
    provjeraStanja();
    if (redIgrača == 10) {
        poruka = "Neriješeno! Pokušajte ponovo";
        gameOver = true;
    }
    if (gameOver) {
        alert("Kraj igre!\n" + poruka);
    }
}

// var kvadrati = document.getElementsByTagName("td");
// kvadrati.forEach(element => {
//     element.addEventListener("click", nova(this.id));
// });
// document.querySelector('td').addEventListener('touchstart', nova(this.id));
// // document.querySelector('td').addEventListener('click', this.id);
// document.querySelectorAll(".k").forEach(item => {
//     item.addEventListener("click", event => {
//         alert(this.id);
//         nova(this.id);
//     })
// })

// function nova(id) {
//     if (redIgrača % 2 != 0) {
//         document.getElementById(id).style.backgroundColor = "blue";
//         povijestOdabira[id] = 1;
//     } else {
//         document.getElementById(id).style.backgroundColor = "red";
//         povijestOdabira[id] = 0;
//     }
//     redIgrača++;
//     provjeraStanja();
//     if (redIgrača == 10) {
//         poruka = "Neriješeno! Pokušajte ponovo";
//         gameOver = true;
//     }
//     if (gameOver) {
//         alert("Kraj igre!\n" + poruka);
//     }
// }