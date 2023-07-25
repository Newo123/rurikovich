document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active');
    document.body.classList.toggle('hidden');
    document.querySelector('.header__burger').classList.toggle('active');
  });

  document.querySelector('.service').addEventListener('click', () => {
    document.querySelector('.service__list').classList.toggle('active');
  });

  const second = document.querySelectorAll('.service__list-item span');

  for (let i = 0; i < second.length; i++) {
    second[i].addEventListener('click', () => {
      second[i].nextElementSibling.classList.toggle('active');
    });
  }
});
