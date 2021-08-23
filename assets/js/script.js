// Delete and start a new one or modify it, feel free.

var container = window.document.querySelector("div.container");
var component = window.document.querySelector("button.btn");
var logo = window.document.querySelector("div.logo");

component.addEventListener("click", onSuccess);

logo.addEventListener("click", () => {
	window.open("https://github.com/BlueJayGM/containerview.git", "_blank");
});

function onSuccess(event) {
	const btnSuccess = event.target || event.srcElement;
	const classList = btnSuccess.classList;
	classList.toggle("success");
	btnSuccess.innerText = classList.value.includes("success") ? "Success" : "Your Component";

	if (classList.value.includes("success")) {
		onCallBalls();
	}
}

// Call all balls
function onCallBalls() {
	let width = container.clientWidth;
	const ball = document.createElement("span");
	ball.classList.add("ball");

	const colors = [
		"var(--red)",
		"var(--blue)",
		"var(--green)",
		"var(--red-light)",
		"var(--blue-light)",
		"var(--green-light)",
	];

	let seed = Math.abs(Math.floor(Math.random() * width) - ball.clientWidth);

	ball.style.animationDelay = `${(Math.random() * 2) / 10}s`;
	ball.style.left = `${seed}px`;
	ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

	ball.addEventListener("animationend", () => {
		container.removeChild(ball);
	});

	container.appendChild(ball);
}

// Calls all balls while the button is on success
setInterval(() => {
	if (component && component.classList.value.includes("success")) {
		onCallBalls();
	}
}, 100);
