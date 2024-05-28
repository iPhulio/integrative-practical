/* java desplazamiento suave */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Java carrusel */
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalItems;
        items[currentIndex].classList.add('active');
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        items[currentIndex].classList.add('active');
    });
});

/* java validacion */
const formValidation = (event) => {
    event.preventDefault();
    const name = event.target.name.value
    if (name.trim() === ''){
        alert('El nombre es requerido')
        return false
    }
    const lastname = event.target.lastname.value
    if (lastname.trim() === ''){
        alert('El apellido es requerido')
        return false
    }
    const email = event.target.email.value
    if (email.trim() === ''){
        alert('El email es requerido')
        return false
    }
    const location = event.target.location.value
    if (location === ''){
        alert('La ubicación es requerida')
        return false
    }
    const installation = event.target.installation.checked
    const manufactury = event.target.manufactury.checked
    if (!installation && !manufactury){
        alert('Debe seleccionar el tipo de servicio')
        return false
    }
    const image = event.target.image.files[0]
    if (!image) {
        alert('La imagen es requerida')
        return false
    }
    const allowedExtension = ['image/jpg', 'image/png','image/jpeg','image/webp'];
    if (allowedExtension.indexOf(image.type)===-1) {
        alert('Solo se permiten imagenes jpg, png, jpeg y webp')
        return false
    }
    alert('Su solicitud fue registrada exitosamente')
    document.getElementById("contact-form").reset();
}