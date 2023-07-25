document.addEventListener('DOMContentLoaded', () => {
  const collapses = document.getElementsByClassName('question__card');
  const collapsesHeader = document.getElementsByClassName(
    'question__card-header',
  );

  for (let i = 0; i < collapses.length; i++) {
    collapsesHeader[i].addEventListener('click', () => {
      collapses[i].classList.toggle('active');
    });
  }
});
