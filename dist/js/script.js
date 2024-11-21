// Navbar Fixed
window.onscroll = () => {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;
	const toTop = document.querySelector("#to-top");

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
		toTop.classList.remove("hidden");
		toTop.classList.add("flex");
	} else {
		header.classList.remove("navbar-fixed");
		toTop.classList.remove("flex");
		toTop.classList.add("hidden");
	}
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});

// Klik dimanapun navMenu menutup
window.addEventListener("click", (e) => {
	if (e.target != hamburger && e.target != navMenu) {
		hamburger.classList.remove("hamburger-active");
		navMenu.classList.add("hidden");
	}
});

// Download CV
document.getElementById("download-cv").addEventListener("click", () => {
	// Menautkan file PDF dan memulai unduhan
	window.open('dist/CV_Rafli Bima Pratandra_2024.pdf', '_blank');
});

// EmailJS
document.getElementById("contact").addEventListener("submit", (e) => {
	e.preventDefault();
  
	// ambil data dari formulir
	const name = document.querySelector("input[name='name']").value;
	const email = document.querySelector("input[name='email']").value;
	const message = document.querySelector("textarea[name='message']").value;
  
	// Log data untuk debugging
	console.log({ from_name: name, message: message, reply_to: email });
  
	// Kirim email
	emailjs
		.send("service_37by0fc", "template_ljklr77", {
			from_name: name,
			message: message,
			reply_to: email,
		})
		.then(
			(response) => {
			alert("Pesan berhasil terkirim!");
			},
			(error) => {
			console.error("Gagal mengirim pesan:", error);
			alert("Terjadi kesalahan saat mengirim pesan!");
			}
		);
});  