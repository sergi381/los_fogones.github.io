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
    const enlacePrincipal = desplegable.querySelector('a');
    
    enlacePrincipal.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const submenu = desplegable.querySelector('.submenu');
      
      // Toggle del submenu actual
      if (submenu) {
        const estaVisible = submenu.style.display === 'block';
        cerrarTodosSubmenus(); // Cierra todos los otros submenús
        submenu.style.display = estaVisible ? 'none' : 'block';
      }
    });
  });

  // Cerrar submenu cuando se hace clic fuera
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.Desplegable')) {
      cerrarTodosSubmenus();
    }
  });
});
