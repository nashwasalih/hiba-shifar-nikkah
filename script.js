/* =========================================================
   ENVELOPE OPENING + MAIN CONTENT
   ========================================================= */
const envelopeOverlay = document.getElementById('envelopeOverlay');
const mainContent     = document.getElementById('mainContent');
const music           = document.getElementById('bgMusic');

let isOpening = false;

function openInvitation() {
    if (isOpening) return;
    isOpening = true;

    if (music) {
        music.volume = 0.5;
        music.loop = true;
        music.play().catch(() => {
            console.log("Audio play requires user interaction");
        });
    }

    envelopeOverlay.classList.add('opening');

    setTimeout(() => {
        mainContent.classList.add('visible');
    }, 1400);

    setTimeout(() => {
        envelopeOverlay.classList.add('fade-out');
        setTimeout(() => {
            envelopeOverlay.style.display = 'none';
        }, 900);
    }, 2200);
}

if (envelopeOverlay) {
    envelopeOverlay.addEventListener('click', openInvitation);
}

/* =========================================================
   COUNTDOWN TIMER
   ========================================================= */
const weddingDate = new Date("August 20, 2026 12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const countdownContainer = document.getElementById("countdown");
    if (!countdownContainer) return;

    if (distance < 0) {
        countdownContainer.innerHTML = `
            <div class="countdown-unit">
                <div class="countdown-number">✨</div>
                <div class="countdown-label">Happily Ever After</div>
            </div>
        `;
        return;
    }

    const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownContainer.innerHTML = `
        <div class="countdown-unit">
            <div class="countdown-number">${days}</div>
            <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-unit">
            <div class="countdown-number">${hours}</div>
            <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-unit">
            <div class="countdown-number">${minutes}</div>
            <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-unit">
            <div class="countdown-number">${seconds}</div>
            <div class="countdown-label">Seconds</div>
        </div>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =========================================================
   FADE-IN ON SCROLL
   ========================================================= */
const fadeElements = document.querySelectorAll(
    '.hero-frame, .parent-card, .quran-verse, .details-ribbon, .countdown-card, .location-card'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

fadeElements.forEach(el => observer.observe(el));

console.log("💌 Wedding Invitation Loaded | Khadeeja & Hamdan | August 20, 2026");