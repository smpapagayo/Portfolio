const brandText = document.getElementById('brand');

function setBrandText() {
    if (window.matchMedia('(max-width: 760px)').matches) {
        brandText.textContent = 'Sergio MP';
    } else {
        brandText.textContent = 'Sergio M Papagayo';
    }
}

window.addEventListener('load', setBrandText);
window.addEventListener('resize', setBrandText);