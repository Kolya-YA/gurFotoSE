console.log('gallery-script.js loaded');
// const picArr = []
// const galleries = document.querySelectorAll('.sc-gallery');
// galleries.forEach((gallery) => {
// 	const imgs = gallery.querySelectorAll(".sc-gallery__item img")
//     imgs.forEach((img) => {
// 		picArr.push(img.dataset);
// 	});
// })

// console.log(picArr);

const galleries = document.querySelectorAll('.sc-gallery');
const dialog = document.querySelector('.sc-gallery__dialog');
const dialogCloseBtn = dialog.querySelector('.sc-gallery__dialog-close');
const dialogPic = dialog.querySelector('picture');
const dialogLegacyImg = dialogPic.querySelector('img');

dialogCloseBtn.addEventListener("click", () => {
	dialog.close();
})

galleries.forEach((gallery) => {
    gallery.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            console.log(e.target.dataset)
			dialogLegacyImg.src = e.target.dataset.legacylink;
			dialogLegacyImg.alt = e.target.alt;
            dialog.showModal()
		}
	});
})