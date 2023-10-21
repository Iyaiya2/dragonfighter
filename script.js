let playerHP = 200;
let dragonHP = 400;
let gameover = true;

const nom = prompt("Quel est votre pseudo ?");
document.getElementById("playerHearts").innerHTML = nom;

function log(message) {
    document.getElementById("log").innerHTML += `<p>${message}</p>`;
}

function showstates() {
    document.getElementById("playerHearts").innerHTML = '♥'.repeat(playerHP / 10);
    document.getElementById("dragonHearts").innerHTML = '♥'.repeat(dragonHP / 40);
}

function dragonAttack() {
    if (!gameover) {
        const damage = Math.floor(Math.random() * 20) + 10;
        playerHP -= damage;
        log(`Le dragon inflige ${damage} de dégâts.`);
        showstates();
        checkGameOver();
    }
}

function checkGameOver() {
    if (playerHP <= 0) {
        log("Vous avez été vaincu par le dragon !");
        gameover = true;
    } else if (dragonHP <= 0) {
        log("Vous avez vaincu le dragon !");
        gameover = true;
    }
}

function startGame() {
    if (gameover) {
        gameover = false;
        playerHP = 200;
        dragonHP = 400;
        showstates();
        log("La partie commence!");
    }
}

// Gestionnaire d'événement pour le bouton "Attaquer"
document.getElementById("attackButton").addEventListener("click", function() {
    if (!gameover && playerHP > 0) {
        const damage = Math.floor(Math.random() * 15) + 5;
        dragonHP -= damage;
        log(`Vous infligez ${damage} de dégâts au dragon.`);
        dragonAttack();
        checkGameOver();
    }
});

// Gestionnaire d'événement pour le bouton "Se soigner"
document.getElementById("healButton").addEventListener("click", function() {
    if (!gameover && playerHP > 0) {
        const heal = Math.floor(Math.random() * 10) + 1;
        playerHP += heal;
        log(`Vous vous soignez de ${heal} HP.`);
        showstates();
        dragonAttack();
        checkGameOver();
    }
});

// Gestionnaire d'événement pour le bouton "Attaque spéciale 1"
document.getElementById("specialAttackButton1").addEventListener("click", function() {
    if (!gameover && playerHP > 0) {
        const damage = Math.floor(Math.random() * 25) + 10;
        dragonHP -= damage;
        log(`Vous utilisez une attaque spéciale et infligez ${damage} de dégâts au dragon.`);
        dragonAttack();
        checkGameOver();
    }
});

// Gestionnaire d'événement pour le bouton "Attaque spéciale 2"
document.getElementById("specialAttackButton2").addEventListener("click", function() {
    if (!gameover && playerHP > 0) {
        const damage = Math.floor(Math.random() * 30) + 15;
        dragonHP -= damage;
        log(`Vous utilisez une autre attaque spéciale et infligez ${damage} de dégâts au dragon.`);
        dragonAttack();
        checkGameOver();
    }
});

// Gestionnaire d'événement pour le bouton "Attaque spéciale 3"
document.getElementById("specialAttackButton3").addEventListener("click", function() {
    if (!gameover && playerHP > 0) {
        const damage = Math.floor(Math.random() * 50) + 15;
        dragonHP -= damage;
        log(`Vous utilisez une attaque spéciale puissante et infligez ${damage} de dégâts au dragon.`);
        dragonAttack();
        checkGameOver();
    }
});

// Gestionnaire d'événement pour le bouton "Fin du jeu"
document.getElementById("endGameButton").addEventListener("click", function() {
    gameover = true;
    document.getElementById("log").innerHTML = '';
});

// JavaScript pour contrôler la lecture de la musique
window.onload = function() {
    var audio = document.getElementById('maMusique');

    // Lecture automatique lorsque la page est chargée
    audio.play();

    // Exemple d'ajout d'un bouton de lecture personnalisé
    var playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = "Pause";
        } else {
            audio.pause();
            playButton.innerHTML = "Lecture";
        }
    });
};