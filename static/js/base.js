// Navbar
let greetUser = document.getElementById('user-greeting');
const currentTime = new Date();
const currentHour = currentTime.getHours() % 24;

if (currentHour >= 1 && currentHour <= 11) {
    greetUser.innerText = "Good Morning, "
} else if (currentHour >= 12 && currentHour <= 15) {
    greetUser.innerText = "Good Afternoon, "
} else {
    greetUser.innerText = "Good Evening, ";
}


let userToggleButton = document.getElementById('user-toggle-button');
let userPanel = document.getElementById('user-panel');
let userPanelBackdrop = document.getElementById('user-panel-backdrop');

let isVisible = false;
userToggleButton.addEventListener("click", () => {
    isVisible = !isVisible;
    userPanel.classList.toggle('hidden');
    userPanelBackdrop.classList.toggle('hidden');

    if (isVisible) {
        userToggleButton.style.transform = 'rotate(90deg)';
    } else {
        isVisible = false;
        userToggleButton.style.transform = 'rotate(0deg)';
    }
})

userPanelBackdrop.addEventListener("click", () => {
    isVisible = false;
    userToggleButton.style.transform = 'rotate(0deg)';
    userPanel.classList.toggle('hidden');
    userPanelBackdrop.classList.toggle('hidden');
})