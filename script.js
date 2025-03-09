document.addEventListener('DOMContentLoaded', function() {
  const desplegables = document.querySelectorAll('.Desplegable');
  
  // Función para cerrar todos los submenús
  function cerrarTodosSubmenus() {
    desplegables.forEach(desplegable => {
      const submenu = desplegable.querySelector('.submenu');
      if (submenu) {
        submenu.style.display = 'none';
      }
    });
  }
  
  // Manejo de eventos para elementos desplegables
  desplegables.forEach(desplegable => {
    // Evento para el enlace principal del desplegable
    const enlacePrincipal = desplegable.querySelector('a');
    
    enlacePrincipal.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const submenu = desplegable.querySelector('.submenu');
      
      // Cierra todos los submenus primero
      cerrarTodosSubmenus();
      
      // Abre el submenu actual
      if (submenu) {
        submenu.style.display = 'block';
      }
    });
    
    // Evento para hover en dispositivos no táctiles
    desplegable.addEventListener('mouseenter', function() {
      if (window.innerWidth > 768) {
        const submenu = this.querySelector('.submenu');
        if (submenu) {
          submenu.style.display = 'block';
        }
      }
    });
    
    desplegable.addEventListener('mouseleave', function() {
      if (window.innerWidth > 768) {
        const submenu = this.querySelector('.submenu');
        if (submenu) {
          submenu.style.display = 'none';
        }
      }
    });
  });

  // Cerrar submenu cuando se hace clic en cualquier lugar
  document.addEventListener('click', function() {
    cerrarTodosSubmenus();
  });

  // Smooth scroll para los enlaces del submenu
  document.querySelectorAll('.submenu a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Cerrar el submenu después de hacer clic
      cerrarTodosSubmenus();
      
      const href = this.getAttribute('href');
      const section = document.querySelector(href);
      
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Ajuste para dispositivos móviles
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
      cerrarTodosSubmenus();
    }
  });
});
