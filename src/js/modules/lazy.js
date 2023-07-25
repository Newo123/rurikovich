'use strict';

const lazyImages = document.querySelectorAll(
  'img[data-src],source[data-srcset]',
);
const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;
const loadMoreBlock = document.querySelector('_load-more');

let lazyImagesPositions = [];

const lazyScrollCheck = () => {
  let imgIndex = lazyImagesPositions.findIndex(
    item => pageYOffset > item - windowHeight,
  );

  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute('data-src');
    } else if (lazyImages[imgIndex].dataset.srcset) {
      lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
      lazyImages[imgIndex].removeAttribute('data-srcset');
    }
    delete lazyImagesPositions[imgIndex];
  }
};

const getMap = () => {
  const loadMapBlockPosition =
    loadMapBlock.getBoundingClientRect().top + pageYOffset;

  if (pageYOffset > loadMapBlockPosition - windowHeight) {
    const loadMapUrl = loadMapBlock.dataset.map;

    if (loadMapUrl) {
      loadMapBlock.insertAdjacentHTML(
        'beforeend',
        `<iframe src="${loadMapUrl}" width="100%" loading="lazy" frameborder="0"></iframe>`,
      );

      loadMapBlock.classList.add('_loaded');
    }
  }
};

const lazyScroll = () => {
  if (
    document.querySelectorAll('img[data-src],source[data-srcset]').length > 0
  ) {
    lazyScrollCheck();
  }
  if (!loadMapBlock.classList.contains('_loaded')) {
    getMap();
  }
};

if (lazyImages.length > 0) {
  lazyImages.forEach(img => {
    if (img.dataset.src || img.dataset.srcset) {
      lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
      lazyScrollCheck();
    }
  });
}
if (!loadMapBlock.classList.contains('_loaded')) {
  getMap();
}

window.addEventListener('scroll', lazyScroll);
