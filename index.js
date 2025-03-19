console.log("hello world");

const picker = document.querySelector("emoji-picker");
const selectedEmoji = document.getElementById("selectedEmoji");

picker.addEventListener("emoji-click", event => {
    selectedEmoji.textContent = event.detail.unicode;
    localStorage.setItem("mood", event.detail.unicode); // Save in LocalStorage
    document.getElementById("openModal").setAttribute("disabled",true);
});

// Load saved mood from LocalStorage
window.onload = () => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
        selectedEmoji.textContent = savedMood;
        document.getElementById("openModal").setAttribute("disabled",true);
    }
};
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close modal function
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
