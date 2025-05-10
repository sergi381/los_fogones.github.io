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
document.addEventListener('DOMContentLoaded', function() {
  const botonMenuFijo = document.getElementById('botonMenuFijo');
  const botonCerrarMenu = document.getElementById('botonCerrarMenu');
  const menuFijo = document.getElementById('menuFijo'); });

  document.addEventListener('DOMContentLoaded', function() {
    const botonMenuFijo = document.getElementById('botonMenuFijo');
    const botonCerrarMenu = document.getElementById('botonCerrarMenu');
    const menuFijo = document.getElementById('menuFijo');
  
    console.log("Botón de menú fijo:", botonMenuFijo);
    console.log("Botón de cerrar menú:", botonCerrarMenu);
    console.log("Menú fijo:", menuFijo);
  
    if (botonMenuFijo && botonCerrarMenu && menuFijo) {
      botonMenuFijo.addEventListener('click', function() {
        menuFijo.style.display = 'block';
      });
  
      botonCerrarMenu.addEventListener('click', function() {
        menuFijo.style.display = 'none';
      });
    } else {
      console.error("Uno o más elementos no fueron encontrados en el DOM.");
    }
  });

  function initMap() {
    const restaurante = { lat: 13.722017505790772, lng: -88.91850142483202 };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: restaurante,
        zoom: 18,
        styles: [
            // Oculta TODOS los puntos de interés (negocios, parques, etc.)
            {
                featureType: "poi",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            // Oculta las etiquetas de las calles (opcional)
            {
                featureType: "road",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            // Oculta el transporte público (autobuses, estaciones)
            {
                featureType: "transit",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            }
        ],
        disableDefaultUI: true // Limpia la interfaz
    });

    // Marcador único para tu restaurante
    new google.maps.Marker({
        position: restaurante,
        map: map,
        title: "Restaurante Los Fogones"
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector('.overlay');
  const card = document.querySelector('.card');
  
  // Mostrar overlay con transición
  setTimeout(function() {
      overlay.classList.add('visible');
      
      // Abrir la carta después de 0.5 segundos
      setTimeout(function() {
          card.classList.add('open');
          
          // Cerrar después de 10 segundos
          setTimeout(function() {
              card.classList.remove('open');
              
              // Ocultar overlay después de que termine la animación
              setTimeout(function() {
                  overlay.classList.remove('visible');
                  
                  // Eliminar completamente después de la transición
                  setTimeout(function() {
                      overlay.style.display = 'none';
                  }, 500);
              }, 1000);
          }, 10000);
      }, 500);
  }, 100);
});