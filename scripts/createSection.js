function handleClick (e) {
  const popup = document.querySelector('.new-section-popup');
  if (!popup.firstElementChild.contains(e.target)) {
    document.body.removeEventListener('click', handleClick);
    closePopup();
  }
}

function createNewSection () {
  const popup = document.querySelector('.new-section-popup');
  popup.style.display = 'block';
  let started = false;
  const timer = setInterval(() => {
    if (started) {
      popup.style.visibility = 'visible';
      popup.style.opacity = '1';
      popup.firstElementChild.style.transform = 'translate(-50%, -50%)';
      popup.firstElementChild.style.opacity = '1';
      popup.firstElementChild.style.visibility = 'visible';
      clearInterval(timer);

      document.body.addEventListener('click', handleClick);
      return;
    }
    started = true;
  }, 40);
  document.body.style.overflow = 'hidden';
}

function closePopup () {
  document.body.removeEventListener('click', handleClick);
  const popup = document.querySelector('.new-section-popup');
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
  popup.firstElementChild.style.transform = 'translate(-50%, -50%)';
  popup.firstElementChild.style.opacity = '0';
  popup.firstElementChild.style.visibility = 'hidden';
  let started = false;
  const timer = setInterval(() => {
    if (started) {
      popup.style.display = 'none';
      clearInterval(timer);
      return;
    }
    started = true;
  }, 100);
  document.body.style.overflow = 'auto';
}

function createSection () {
  const newSectionBtn = document.querySelector('.new-section#new-section');
  if (window.edit) {
    newSectionBtn.style.display = 'flex';

    let started = false;
    const timer = setInterval(() => {
      if (started) {
        newSectionBtn.style.visibility = 'visible';
        newSectionBtn.style.transform = 'scale(1)';
        newSectionBtn.style.opacity = '1';
        newSectionBtn.style.transform = 'translateY(0px)';
        clearInterval(timer);
        return;
      }
      started = true;
    }, 40);

    newSectionBtn.addEventListener('click', createNewSection);
    document.getElementById('cancel-section').addEventListener('click', closePopup);
  } else {
    newSectionBtn.style.opacity = '0';
    newSectionBtn.style.transform = 'translateY(-20%)';
    newSectionBtn.style.transform = 'scale(0)';
    newSectionBtn.style.visibility = 'hidden';
    let started = false;
    const timer = setInterval(() => {
      if (started) {
        newSectionBtn.style.display = 'none';
        clearInterval(timer);
        return;
      }
      started = true;
    }, 100);

    newSectionBtn.removeEventListener('click', createNewSection);
    // document.getElementById('cancel-section').removeEventListener('click', closePopup);
  }
}
export { createSection };
