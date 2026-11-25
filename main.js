
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

const main = document.getElementById("main");
const success = document.getElementById("success");

// 아니요 버튼 도망가기
function moveButton() {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

// PC에서 마우스를 가져가면 도망가기
noButton.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") {
        moveButton();
    }
});

// 모바일에서 터치하면 도망가기
noButton.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveButton();
}, { passive: false });

// 네 버튼을 누르면 성공 화면으로 전환
yesButton.addEventListener("click", () => {
    main.style.display = "none";
    success.style.display = "block";
});
