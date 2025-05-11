const rotators = Array.from(document.querySelectorAll('.rotator'));

function getRandomCase(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function cleanActive(rotator) {
  rotator.querySelectorAll('.rotator__case').forEach(el => {
    el.classList.remove('rotator__case_active');
  });
}

function showRotator(rotator) {
  const rotatorCases = Array.from(rotator.querySelectorAll('.rotator__case'));

  function update() {
    cleanActive(rotator);
    const current = getRandomCase(rotatorCases);
    current.classList.add('rotator__case_active');

    setTimeout(update, 1000);
  }

  update();
}

// Запустить все ротаторы
rotators.forEach(rotator => {
  showRotator(rotator);
});
