document.addEventListener('DOMContentLoaded', async () => {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const tableBody = document.getElementById('tableBody');
  const menuSocios = document.getElementById('menu-socios');
  const menuPagar = document.getElementById('menu-pagar');

  // Variable para almacenar los datos cargados del archivo JSON
  let socios = [];

  // Función para cargar los datos desde un archivo JSON
  const cargarSocios = async () => {
    try {
      const response = await fetch('../data/socios.json'); // Verifica la ruta
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      socios = await response.json();
      renderTable(socios); // Renderizar la tabla inicial con los datos cargados
    } catch (error) {
      console.error('Error al cargar los datos del archivo JSON:', error);
    }
  };

  // Función para renderizar la tabla
  const renderTable = (data) => {
    tableBody.innerHTML = ''; // Limpia la tabla antes de renderizar
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

  // Funcionalidad de búsqueda
  searchButton.addEventListener('click', () => {
    const searchText = searchInput.value.toLowerCase();

    // Filtra los datos que contengan el texto en algún campo
    const filtered = socios.filter(
      (socio) =>
        socio.nombre.toLowerCase().includes(searchText) ||
        socio.apellido.toLowerCase().includes(searchText) ||
        socio.telefono.toLowerCase().includes(searchText) ||
        socio.negocio.toLowerCase().includes(searchText)
    );

    // Si no hay resultados, muestra el modal
    if (filtered.length === 0) {
      modal.classList.remove('hidden');
    } else {
      renderTable(filtered); // Renderiza solo los resultados
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

  // Cargar los datos al cargar la página
  await cargarSocios();
});
