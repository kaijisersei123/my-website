const heartsContainer =
    document.getElementById("hearts");


function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.color = "#ff4f8b";

    heart.style.fontSize =
        Math.random() * 20 + 12 + "px";

    heart.style.opacity = "0.7";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.animation =
        `floatUp ${Math.random() * 3 + 4}s linear`;

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}


setInterval(createHeart, 700);


/* =========================
   HEART ANIMATION
========================= */

const style =
    document.createElement("style");


style.innerHTML = `

@keyframes floatUp {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;

    }

    20% {

        opacity: 0.7;

    }

    100% {

        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(style);