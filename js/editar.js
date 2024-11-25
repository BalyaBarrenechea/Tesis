document.addEventListener('DOMContentLoaded', () => {
    const deleteProfileBtn = document.getElementById('deleteProfileBtn');
    const saveChangesBtn = document.getElementById('saveChangesBtn');
    const deleteModal = document.getElementById('deleteModal');
    const saveModal = document.getElementById('saveModal');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const cancelSaveBtn = document.getElementById('cancelSaveBtn');
    const confirmSaveBtn = document.getElementById('confirmSaveBtn');
    const addPuestoBtn = document.getElementById('addPuestoBtn');
    const puestosContainer = document.getElementById('puestos-Container');
    const editForm = document.getElementById('editForm');


    // Abrir modal para eliminar
    deleteProfileBtn.addEventListener('click', () => {
      deleteModal.classList.remove('hidden');
    });
  
    // Cancelar eliminación
    cancelDeleteBtn.addEventListener('click', () => {
      deleteModal.classList.add('hidden');
    });
  
    // Confirmar eliminación
    confirmDeleteBtn.addEventListener('click', () => {
      alert('Socio Eliminado satisfactoriamente');
      window.location.href = 'socio.html';
    });
  
    // Abrir modal para guardar cambios
    saveChangesBtn.addEventListener('click', () => {
      saveModal.classList.remove('hidden');
    });
  
    // Cancelar guardar cambios
    cancelSaveBtn.addEventListener('click', () => {
      saveModal.classList.add('hidden');
    });
  
    // Confirmar guardar cambios
    confirmSaveBtn.addEventListener('click', () => {
      alert('Cambios guardados exitosamente');
      saveModal.classList.add('hidden');
    });
  
    // Agregar nuevos puestos
    addPuestoBtn.addEventListener('click', () => {
      const newPuestoInput = document.createElement('input');
      newPuestoInput.type = 'text';
      newPuestoInput.placeholder = 'Nuevo Puesto';
      newPuestoInput.style.marginBottom = '1rem';
      puestosContainer.insertBefore(newPuestoInput, addPuestoBtn);
    });
  });
  