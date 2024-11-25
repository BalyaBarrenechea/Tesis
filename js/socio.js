document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const tableBody = document.getElementById('tableBody');
    const menuSocios = document.getElementById('menu-socios');
    const menuPagar = document.getElementById('menu-pagar');
  
    // Base de datos simulada
    const socios = [
      { id: 1, nombre: 'Juan', apellido: 'Pérez', telefono: '123456', negocio: 'Negocio A' },
      // Añade más registros aquí
    ];
  
    // Función para renderizar la tabla
    const renderTable = (data) => {
      tableBody.innerHTML = '';
      data.forEach((socio) => {
        tableBody.innerHTML += `
          <tr>
            <td>${socio.id}</td>
            <td>${socio.nombre}</td>
            <td>${socio.apellido}</td>
            <td>${socio.telefono}</td>
            <td>${socio.negocio}</td>
            <td>
              <button class="view-btn">Ver perfil</button>
              <button class="edit-btn">Editar</button>
              <button class="delete-btn">Eliminar</button>
            </td>
          </tr>
        `;
      });
    };
  
    // Renderizar la tabla inicial
    renderTable(socios);
  
    // Funcionalidad de búsqueda
    searchButton.addEventListener('click', () => {
      const searchText = searchInput.value.toLowerCase();
      const filtered = socios.filter(socio =>
        socio.nombre.toLowerCase().includes(searchText)
      );
  
      if (filtered.length === 0) {
        modal.classList.remove('hidden');
      } else {
        renderTable(filtered);
      }
    });
  
    // Cerrar modal
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    // Redirección a "Socios"
    menuSocios.addEventListener('click', () => {
      window.location.href = 'socio.html'; // Redirige a la interfaz de Socios
    });
  
    // Redirección a "Pagar Servicio"
    menuPagar.addEventListener('click', () => {
      window.location.href = 'pagar.html'; // Redirige a la interfaz de Pagar Servicio
    });
  });
  