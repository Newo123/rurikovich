document.addEventListener('DOMContentLoaded', () => {
  const tabButtonsProject = document.querySelectorAll(
    '.projects-project__card',
  );
  const tabsProject = document.querySelectorAll('.specific-project');

  if (tabButtonsProject.length > 0 && tabsProject.length > 0) {
    tabsProject[0].classList.add('_active');
    tabButtonsProject.forEach((tabButton, index) => {
      tabButton.addEventListener('click', () => {
        tabsProject.forEach(tab => {
          tab.classList.remove('_active');
        });
        tabsProject[index].classList.add('_active');
      });
    });
  }
});
