document.addEventListener('DOMContentLoaded', async () => {
  const modalRegistrarSocio = document.getElementById('modalRegistrarSocio');
  const formRegistrarSocio = document.getElementById('formRegistrarSocio');
  const cancelarRegistro = document.getElementById('cancelarRegistro');
  const btnCrearSocio = document.querySelector('.create-btn');
  const tableBody = document.getElementById('tableBody');

  let socios = [];

  // Función para cargar los datos desde un archivo JSON
  const cargarSocios = async () => {
    try {
      const response = await fetch('../data/socios.json'); // Verifica la ruta correcta
      if (!response.ok) {
        throw new Error(`Error al cargar JSON: ${response.status}`);
      }
      socios = await response.json();
      renderTable(socios); // Renderizar los datos iniciales
    } catch (error) {
      console.error('Error al cargar los datos del archivo JSON:', error);
    }
  };

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

  // Mostrar modal para registrar socio
  btnCrearSocio.addEventListener('click', () => {
    modalRegistrarSocio.classList.remove('hidden');
  });

  // Cerrar modal al cancelar
  cancelarRegistro.addEventListener('click', () => {
    modalRegistrarSocio.classList.add('hidden');
    formRegistrarSocio.reset();
  });

  // Procesar formulario de registro
  formRegistrarSocio.addEventListener('submit', (event) => {
    event.preventDefault();

    const nuevoSocio = {
      id: socios.length + 1,
      nombre: formRegistrarSocio.nombre.value,
      apellido: formRegistrarSocio.apellido.value,
      dni: formRegistrarSocio.dni.value,
      domicilio: formRegistrarSocio.domicilio.value,
      correo: formRegistrarSocio.correo.value,
      negocio: formRegistrarSocio.asociacion.value,
      telefono: formRegistrarSocio.telefono.value,
      edad: formRegistrarSocio.edad.value,
      genero: formRegistrarSocio.genero.value,
    };

    socios.push(nuevoSocio);
    renderTable(socios);

    modalRegistrarSocio.classList.add('hidden');
    formRegistrarSocio.reset();
  });

  // Cargar los datos al iniciar
  await cargarSocios();
});
