document.querySelectorAll('.btn-next').forEach((btn) => {
  btn.addEventListener('click', () => {
    const currentStep = btn.closest('.form-step');

    // Vérifie tous les champs obligatoires de l'étape courante
    const fields = currentStep.querySelectorAll('input, select, textarea');
    let isValid = true;

    fields.forEach((field) => {
      const isEmpty =
        field.value.trim() === '' || (field.tagName === 'SELECT' && field.selectedIndex === 0);

      if (isEmpty) {
        isValid = false;
        field.classList.add('is-invalid');
      } else {
        field.classList.remove('is-invalid');
      }
    });

    if (!isValid) return;

    // Passe à l'étape suivante
    const currentIndex = parseInt(currentStep.id.split('-')[1]);
    const nextStep = document.getElementById(`step-${currentIndex + 1}`);

    if (nextStep) {
      currentStep.classList.add('d-none');
      nextStep.classList.remove('d-none');
    }
  });
});
