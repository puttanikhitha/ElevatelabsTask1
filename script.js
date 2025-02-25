
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}


document.getElementById("exploreBtn").addEventListener("click", () => {
    alert("🚀 Your space journey begins soon!");
});


function showDetails(planet) {
    alert(`🌌 Exploring ${planet} - Book your spot now!`);
}


document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("✅ Booking successful! See you in space!");
});
