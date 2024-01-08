let startInterval = false;
/**
    * @description save delay
    * @returns {void}
    * @example
    * saveDelay();
* */
function saveDelay () {
  if (startInterval === true) {
    return;
  }
  startInterval = true;
  const intervalId = setInterval(() => {
    if (window.timeToSave === 0) {
      clearInterval(intervalId);
      savePortfolio();
      return;
    }
    window.timeToSave -= 1000;
  }, 1000);
}

/**
    * @description save portfolio
    * @returns {void}
    * @example
    * savePortfolio();
* */
function savePortfolio () {
  let intervalId;
  intervalId = setInterval(
    () => {
      if (window.isSaved === true || (window.timeToSave !== 0 && window.edit === true)) {
        clearInterval(intervalId);
        return;
      }
      const savePopUp = document.querySelector('.notification-popup');
      savePopUp.classList.add('show');
      setTimeout(() => {
        savePopUp.classList.remove('show');
      }, 3000);
      localStorage.setItem('portfolio', JSON.stringify(window.portfolio));
      console.log('saving');
      window.isSaved = true;
      window.timeToSave = maxTimeToSave;
      startInterval = false;
      if (window.edit === false) {
        clearInterval(intervalId);
      }
    }
    , 1000);
}

export { savePortfolio, saveDelay };
