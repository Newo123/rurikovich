document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY >= 70) {
      header.style.position = 'fixed';
      header.style.top = '0';
      header.nextElementSibling.style.marginTop = '50px';
    } else {
      header.removeAttribute('style');
      header.nextElementSibling.removeAttribute('style');
    }
  });
});
