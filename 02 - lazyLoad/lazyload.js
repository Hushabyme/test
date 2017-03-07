function throttle(fn, delay, atLeast) {
  let timeout = null,
      startTime = new Date();

  return function () {
    const currentTime = new Date();
    clearTimeout(timeout);

    if(currentTime - startTime >= atLeast) {
      fn();
      startTime = currentTime;
    } else {
      timeout = setTimeout(fn, delay);
    }
  }
}

function lazyLoad() {
  let images = document.querySelectorAll('img'),
      len = images.length,
      n = 0;

  return function () {
    const seeHeight = document.documentElement.clientHeight,
          scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    for(let i = 0; i < len; i++) {
      if(images[i].offsetTop < seeHeight + scrollTop) {
        if(images[i].getAttribute('src') === 'img/loading.gif') {
          images[i].src = images[i].getAttribute('data-src');
        }

        n = n + 1;
      }
    }
  }
}

const loadImages = lazyLoad();
loadImages();

window.addEventListener('scroll', throttle(loadImages, 500, 1000));