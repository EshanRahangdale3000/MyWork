function bookNow(title) {
  alert(`Redirecting to book "${title}"...`);
  window.open("https://www.bookmyshow.com", "_blank");
}

const backToTop = document.getElementById("backToTop");
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
};
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
