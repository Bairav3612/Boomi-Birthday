// ============================================================
// BOOMIKA'S PURPLE GALAXY BIRTHDAY SURPRISE
// Add six photos in assets/photos/ named photo1.jpg ... photo6.jpg
// ============================================================

const photos = [
  { src: "assets/photos/photo1.jpg.jpeg", caption: "A favourite memory🫶🏻", symbol: "✧" },
  { src: "assets/photos/photo2.jpg.png", caption: "A little moment🥰", symbol: "♡" },
  { src: "assets/photos/photo3.jpg.png", caption: "Always remember✨", symbol: "✦" },
  { src: "assets/photos/photo4.jpg.png", caption: "A beautiful day☀️", symbol: "☾" },
  { src: "assets/photos/photo5.jpg.jpeg", caption: "Always for you♾️", symbol: "✿" },
  { src: "assets/photos/photo6.jpg.png", caption: "You are mine❤️", symbol: "♕" }
];

const reasons = [
"There is no one else in the world quite like you.",
"Your smile can brighten a difficult day.",
"You deserve kindness in every form.",
"Your dreams are worth chasing.",
"You have your own unique kind of magic.",
"The world is better with your laughter in it.",
"You are allowed to take up space and shine.",
"Your little victories deserve celebration.",
"You bring your own light wherever you go.",
"You deserve peaceful days and beautiful surprises.",
"Your thoughts and feelings matter.",
"You have so much potential waiting to bloom.",
"Your courage is worth admiring.",
"You make memories feel meaningful.",
"You deserve people who celebrate your growth.",
"Your kindness can make a real difference.",
"You are more than enough as you are.",
"Your happiness matters.",
"You have a story only you can write.",
"You deserve to feel proud of yourself.",
"Your presence is a gift.",
"You can turn challenges into lessons.",
"Your ideas deserve to be heard.",
"You have a beautiful future ahead.",
"You deserve honest smiles.",
"You make the little things worth noticing.",
"Your individuality is something to treasure.",
"You are stronger than you sometimes realise.",
"You deserve a life full of wonder.",
"Your hopes are important.",
"You have the right to begin again.",
"You deserve rest without guilt.",
"Your laughter is worth protecting.",
"You can inspire people without even knowing it.",
"You deserve love that feels safe and kind.",
"Your efforts count, even when nobody sees them.",
"You have a light that is yours alone.",
"You deserve opportunities that help you grow.",
"Your dreams do not have an expiry date.",
"You are worth celebrating today and every day.",
"You can make beautiful things happen.",
"Your voice deserves to be heard.",
"You deserve moments that take your breath away.",
"You have so many chapters still to write.",
"You are allowed to be a work in progress.",
"Your happiness is never too much to ask for.",
"You deserve to be appreciated.",
"You make the world a little more colourful.",
"You have a heart full of possibilities.",
"You are a reason to believe in good things.",
"Your patience is a quiet strength.",
"You deserve a thousand reasons to smile.",
"You are learning and growing every day.",
"Your future can be brighter than you imagine.",
"You deserve gentle words.",
"You are wonderfully one of a kind.",
"You have the courage to choose your path.",
"Your dreams deserve a chance.",
"You deserve to feel seen and understood.",
"You make your own kind of sparkle.",
"You are worthy on your best and hardest days.",
"You deserve genuine friendships.",
"Your creativity matters.",
"You can surprise yourself with what you achieve.",
"You deserve beautiful beginnings.",
"Your story is still unfolding.",
"You are allowed to choose happiness.",
"You bring something unique to this world.",
"You deserve to be treated with respect.",
"Your determination is powerful.",
"You can keep blooming at your own pace.",
"You deserve a future filled with possibilities.",
"Your smile belongs in many happy memories.",
"You are capable of more than you know.",
"You deserve to be listened to.",
"Your dreams are not silly.",
"You can make a difference in small ways.",
"You deserve calm after every storm.",
"You have so much goodness ahead of you.",
"Your journey is worth honouring.",
"You deserve to celebrate how far you've come.",
"You are never defined by one difficult day.",
"Your happiness is important.",
"You deserve surprises that make you smile.",
"You have a beautiful mind of your own.",
"No one alives in the world like you.",
"You deserve love, respect and peace.",
"You make this world uniquely yours.",
"Your hopes deserve room to grow.",
"You are worth every good thing coming your way.",
"You deserve to feel confident in who you are.",
"Your little joys matter.",
"You have endless chances to shine.",
"You deserve a birthday as lovely as your dreams.",
"May this year bring you closer to everything you wish for.",
"Simply being you is something worth celebrating.",
"May every new day bring you a little more joy.",
"Your dreams deserve patience, courage and hope.",
"You make ordinary moments feel special.",
"May you always find reasons to smile. ♡"
];

// Build the six flip cards. The image stays inside its own symbol card.
const galleryGrid = document.getElementById("galleryGrid");
photos.forEach((photo, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "memory-card";
  card.setAttribute("aria-label", `Reveal memory ${index + 1}: ${photo.caption}`);
  card.setAttribute("aria-pressed", "false");
  card.innerHTML = `
    <span class="memory-card-inner">
      <span class="memory-card-front">
        <span class="memory-symbol-art" aria-hidden="true">${photo.symbol}</span>
        <span class="memory-card-label">Tap to reveal</span>
      </span>
      <span class="memory-card-back">
        <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
        <span class="memory-caption">${photo.caption}</span>
      </span>
    </span>`;
  card.addEventListener("click", () => {
    const flipped = card.classList.toggle("flipped");
    card.setAttribute("aria-pressed", String(flipped));
  });
  galleryGrid.appendChild(card);
});

// Reveal the 100 positive birthday reasons one at a time without repeats.
let shown = new Set();
const reasonButton = document.getElementById("reasonButton");
reasonButton.addEventListener("click", () => {
  if (shown.size === reasons.length) shown.clear();
  let index;
  do { index = Math.floor(Math.random() * reasons.length); } while (shown.has(index));
  shown.add(index);
  document.getElementById("reasonText").textContent = reasons[index];
  document.getElementById("reasonCount").textContent = shown.size;
  reasonButton.textContent = shown.size === reasons.length ? "Read them all again ✨" : "Reveal another reason ✨";
});



// MAGIC GIFT BOX - FIXED CLOSE BUTTON

document.addEventListener("DOMContentLoaded", () => {
  const giftButton = document.getElementById("giftButton");
  const giftMessage = document.getElementById("giftMessage");
  const giftVideo = document.getElementById("giftVideo");
  const closeGiftButton = document.getElementById("closeGiftButton");

  if (!giftButton || !giftMessage || !giftVideo || !closeGiftButton) {
    console.error("Gift elements are missing. Check your HTML IDs.");
    return;
  }

  // OPEN GIFT
  giftButton.addEventListener("click", () => {
    giftMessage.hidden = false;
    giftButton.classList.add("open");
    giftButton.setAttribute("aria-expanded", "true");

    giftMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });

  // CLOSE VIDEO AND GIFT
  closeGiftButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    giftVideo.pause();

    try {
      giftVideo.currentTime = 0;
    } catch (error) {
      console.log("Video reset:", error);
    }

    giftMessage.hidden = true;
    giftButton.classList.remove("open");
    giftButton.setAttribute("aria-expanded", "false");

    giftButton.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});


// MAIN PAGE COUNTDOWN - 31 DECEMBER 2026

function updateCountdown() {
    const birthday = new Date(2026, 11, 31, 0, 0, 0).getTime();
    const now = Date.now();
    const diff = birthday - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const msg = document.getElementById("countdownMessage");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        return;
    }

    if (diff <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";

        if (msg) {
            msg.textContent = "It's your birthday, Boomika! Happy Birthday! ♡";
        }
        return;
    }

    daysEl.textContent = String(Math.floor(diff / 86400000)).padStart(2, "0");
    hoursEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0");
    minutesEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    secondsEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
}

// Start immediately and update every second
updateCountdown();


function updateGateCountdown() {
    const target = new Date(2026, 11, 31, 0, 0, 0).getTime();
    const now = Date.now();
    const diff = target - now;

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById("gateDays").textContent = Math.max(0, days);
    document.getElementById("gateHours").textContent = Math.max(0, hours);
    document.getElementById("gateMinutes").textContent = Math.max(0, minutes);
    document.getElementById("gateSeconds").textContent = Math.max(0, seconds);
}

updateGateCountdown();
setInterval(updateGateCountdown, 1000);


// Floating petals.
const petalLayer = document.querySelector(".petal-layer");
function makePetal() {
  if (!petalLayer) return;
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = Math.random() > 0.5 ? "✿" : "❀";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (10 + Math.random() * 12) + "px";
  petal.style.animationDuration = (8 + Math.random() * 8) + "s";
  petalLayer.appendChild(petal);
  setTimeout(() => petal.remove(), 17000);
}
setInterval(makePetal, 850);



// Password correct aana udane music play aagum


// BACKGROUND MUSIC
const musicButton = document.getElementById("musicToggle");
const music = document.getElementById("bgMusic");

music.loop = true;
music.volume = 0.30;

// Start music after correct password
async function startBackgroundMusic() {
    try {
        await music.play();

        if (musicButton) {
            musicButton.textContent = "♫ Music: on";
            musicButton.setAttribute("aria-pressed", "true");
        }
    } catch (error) {
        console.log("Music playback error:", error);
    }
}

// Manual music ON/OFF
if (musicButton) {
    musicButton.addEventListener("click", async () => {
        if (music.paused) {
            await startBackgroundMusic();
        } else {
            music.pause();
            musicButton.textContent = "♫ Music: off";
            musicButton.setAttribute("aria-pressed", "false");
        }
    });
}



 
// VOICE MESSAGE - AUTO PAUSE AND RESUME BACKGROUND MUSIC

const voiceAudio = document.getElementById("voiceAudio");

let resumeMusicAfterVoice = false;

// When voice message starts
if (voiceAudio && music) {

    voiceAudio.addEventListener("play", () => {

        // Check whether background music was playing
        resumeMusicAfterVoice = !music.paused;

        if (resumeMusicAfterVoice) {
            music.pause();

            if (musicButton) {
                musicButton.textContent = "♫ Music: off";
                musicButton.setAttribute("aria-pressed", "false");
            }
        }
    });

    // Resume background music
    async function resumeBackgroundMusic() {

        if (!resumeMusicAfterVoice || !music.paused) return;

        try {
            await music.play();

            resumeMusicAfterVoice = false;

            if (musicButton) {
                musicButton.textContent = "♫ Music: on";
                musicButton.setAttribute("aria-pressed", "true");
            }

        } catch (error) {
            console.log("Background music resume failed:", error);
        }
    }

    // When voice message is manually paused
    voiceAudio.addEventListener("pause", () => {

        if (!voiceAudio.ended) {
            resumeBackgroundMusic();
        }
    });

    // When voice message completes
    voiceAudio.addEventListener("ended", () => {
        resumeBackgroundMusic();
    });
}





// FORCE MAIN COUNTDOWN TEST
window.addEventListener("load", function () {

    function testCountdown() {
        const target = new Date(2026, 11, 31, 0, 0, 0).getTime();
        const diff = target - Date.now();

        const ids = ["days", "hours", "minutes", "seconds"];

        const values = [
            Math.floor(diff / 86400000),
            Math.floor((diff % 86400000) / 3600000),
            Math.floor((diff % 3600000) / 60000),
            Math.floor((diff % 60000) / 1000)
        ];

        ids.forEach(function(id, index) {
            const element = document.getElementById(id);

            if (element) {
                element.textContent = Math.max(0, values[index]);
            }
        });
    }

    testCountdown();
    setInterval(testCountdown, 1000);

});

























// LAST SURPRISE VIDEO

const lastSurpriseButton = document.getElementById("lastSurpriseButton");
const lastSurpriseContent = document.getElementById("lastSurpriseContent");
const youMeAnimation = document.getElementById("youMeAnimation");

if (lastSurpriseButton && lastSurpriseContent && youMeAnimation) {

    lastSurpriseButton.addEventListener("click", async function () {

        lastSurpriseContent.hidden = false;
        lastSurpriseButton.style.display = "none";

        youMeAnimation.load();

        youMeAnimation.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        try {
            await youMeAnimation.play();
        } catch (error) {
            console.log("Video error:", error);
            lastSurpriseButton.style.display = "inline-block";
            lastSurpriseButton.textContent = "Try Again ♡";
        }
    });

    youMeAnimation.addEventListener("ended", function () {

        youMeAnimation.pause();
        youMeAnimation.currentTime = 0;

        lastSurpriseContent.hidden = true;

        lastSurpriseButton.style.display = "inline-block";
        lastSurpriseButton.textContent = "♡ Watch Again ♡";
    });

    youMeAnimation.addEventListener("error", function () {
        console.log("Video file could not be loaded.");
    });
}