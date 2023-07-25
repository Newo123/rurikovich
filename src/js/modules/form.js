document.addEventListener('DOMContentLoaded', () => {
  const allFrom = document.querySelectorAll('.form-valid');

  // Макса для номера телефона

  const getMask = inputs => {
    inputs.forEach(input => {
      if (input.dataset.tel) {
        const maskOptions = {
          mask: '+{7}(000)000-00-00',
        };
        const mask = IMask(input, maskOptions);
      }
    });
  };

  // Проверка формы на пустоту

  if (allFrom.length > 0) {
    allFrom.forEach(form => {
      getMask(form.querySelectorAll('input'));

      form.addEventListener('submit', e => {
        e.preventDefault();
        const inputs = e.currentTarget.querySelectorAll('input');

        inputs.forEach(input => {
          if (input.nextElementSibling !== null) {
            return;
          }

          if (input.value === '') {
            const required = document.createElement('span');
            required.classList.add('error__field-proj');
            required.innerText = 'Обязательное поле';
            input.after(required);

            input.addEventListener('input', () => {
              if (input.parentNode.children.length > 1) {
                input.parentNode.removeChild(required);
              }
            });
          }

          if (input.nextElementSibling === null) {
            const success = document.querySelector('.success');
            success.classList.remove('success__none');

            setTimeout(() => {
              success.classList.add('success__none');
            }, 5000);
          }
        });
      });
    });
  }
});
