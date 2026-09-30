// ================================
// FLOATING HEARTS
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.textContent = "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}


// Create a heart every 800ms

setInterval(createHeart, 800);