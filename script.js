document.addEventListener('DOMContentLoaded', function() {
  const botonMenu = document.querySelector('.boton-menu');
  const submenu = document.querySelector('.submenu');
  
  botonMenu.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation(); // Evita que el click se propague
    
    // Alternar la clase 'activo' en el submenú
    submenu.classList.toggle('activo');
    
    // Alternar la clase 'menu-activo' en el item padre
    this.parentElement.classList.toggle('menu-activo');
  });
  
  // Cerrar el menú al hacer click en cualquier parte del documento
  document.addEventListener('click', function() {
    submenu.classList.remove('activo');
    botonMenu.parentElement.classList.remove('menu-activo');
  });
  
  // Evitar que el menú se cierre al hacer click dentro de él
  submenu.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});

// Evita el scroll automático a secciones en móviles
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 768) { // Solo para móviles
    setTimeout(() => {
      window.scrollTo(0, 0); // Fuerza scroll al inicio
      history.scrollRestoration = 'manual'; // Desactiva scroll automático
    }, 100);
  }
});

// SOLUCIÓN DEFINITIVA - Colocar al final del body
window.addEventListener('load', () => {
  if (location.hash) {
    setTimeout(() => {
      window.scrollTo(0, 0);
      location.hash = '';
    }, 10);
  }
});