const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

//cart

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');

const openModal = () =>{
	modalCart.classList.add('show')
};

const closeModal = () =>{
	modalCart.classList.remove('show');
	document.removeEventListener('keydown', escapeHandler)
};

const escapeHandler = (event) =>{
	if (event.code === "Escape") {
        closeModal();
    }
}

modalCart.addEventListener('click',(event) =>{
	const target = event.target;
	if (target.classList.contains('show') || target === modalCart) {
        closeModal();
    }
})


buttonCart.addEventListener('click',openModal);
modalClose.addEventListener('click',closeModal);

//scroll smooth

{
	const scrollLink = document.querySelectorAll('a.scroll-link');

for (let i = 0; i<scrollLink.length; i++){
	scrollLink[i].addEventListener('click',(ev)=>{
		ev.preventDefault();
		const id = scrollLink[i].getAttribute('href');
		document.querySelector(id).scrollIntoView({
			behavior:'smooth',
			block:'start'
		})
	})
}
}