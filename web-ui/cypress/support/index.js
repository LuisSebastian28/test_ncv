Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorar errores de tipo AxiosError con un status 404 (no encontrado)
    if (err instanceof Error && err.status === 404) {
      return false;
    }
    // Fallar en caso de cualquier otro tipo de error
    else {
      return true;
    }
  });
  