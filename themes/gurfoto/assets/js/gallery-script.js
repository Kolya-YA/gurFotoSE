console.log("gallery-script.js loaded");
// const picArr = []
// const galleries = document.querySelectorAll('.sc-gallery');
// galleries.forEach((gallery) => {
// 	const imgs = gallery.querySelectorAll(".sc-gallery__item img")
//     imgs.forEach((img) => {
// 		picArr.push(img.dataset);
// 	});
// })

// console.log(picArr);

const galleries = document.querySelectorAll(".sc-gallery");
const dialog = document.querySelector(".gallery-dialog");
const dialogCloseBtn = dialog.querySelector(".gallery-dialog__close");
const dialogPic = dialog.querySelector("picture");
const dialogLegacyImg = dialogPic.querySelector("img");
let scrollPosition = 0;

galleries.forEach((gallery) => {
	gallery.addEventListener("click", (e) => {
		if (e.target.tagName === "IMG") {
			console.log(e.target.dataset);
			dialogLegacyImg.src = e.target.dataset.legacylink;
			dialogLegacyImg.alt = e.target.alt;
			openDialog();
		}
	});
});

dialogCloseBtn.addEventListener("click", () => {
	closeDialog();
});

dialog.addEventListener("click", (e) => {
	const dialogDimensions = dialog.getBoundingClientRect();
	if (
		e.clientX < dialogDimensions.left ||
		e.clientX > dialogDimensions.right ||
		e.clientY < dialogDimensions.top ||
		e.clientY > dialogDimensions.bottom
	) {
		closeDialog();
	}
});

dialog.addEventListener("cancel", (e) => {
	closeDialog();
	e.preventDefault();
});

// Prevent touchmove events on iOS when dialog is open
document.addEventListener(
	"touchmove",
	(e) => {
		if (dialog.open && !dialog.contains(e.target)) {
			e.preventDefault();
		}
	},
	{ passive: false },
);

function openDialog() {
	scrollPosition = window.scrollY;
	document.body.classList.add("dialog-open");
	document.body.style.top = `-${scrollPosition}px`;
	dialog.showModal();
}

function closeDialog() {
	document.body.classList.remove("dialog-open");
	document.body.style.top = "";
	window.scrollTo({
		left: 0,
		top: scrollPosition,
		behavior: "instant",
	});
	dialog.close();
}
