 
const grabingMobileScreensSwiper = document.getElementById(
"grabingMobileScreensSwiper"
);
const grabingSwiper = new Swiper(grabingMobileScreensSwiper, {
slidesPerView: "auto",
spaceBetween: 24,
grabCursor: true,
freeMode: true,
});

// Variables to track movement
let startPosition = 0;
let isDragging = false;

// Event listener for touch start (or mousedown)
grabingSwiper.on("touchStart", (grabingSwiper, event) => {
startPosition = event.touches ? event.touches[0].clientX : event.clientX; // Get initial X position
isDragging = true; // Set dragging to true
});

// Event listener for touch move (or mousemove)
grabingSwiper.on("touchMove", (grabingSwiper, event) => {
if (isDragging) {
const currentPosition = event.touches
? event.touches[0].clientX
: event.clientX; // Get current X position
const distanceMoved = currentPosition - startPosition; // Calculate distance moved

// Determine direction
const movingRight = distanceMoved > 0; // true if moving right, false if moving left
grabingMobileScreensSwiper.classList.remove("move-cards-to-right");
grabingMobileScreensSwiper.classList.remove("move-cards-to-left");
const direction = movingRight ? "right" : "left";

grabingMobileScreensSwiper.classList.add(`move-cards-to-${direction}`);
startPosition = currentPosition;
}
});

// Event listener for touch end (or mouseup)
grabingSwiper.on("touchEnd", () => {
isDragging = false; // Reset dragging state
}); 