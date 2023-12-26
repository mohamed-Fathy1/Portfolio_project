/**
    * @description save delay
    * @returns {void}
    * @example
    * saveDelay();
* */
function saveDelay () {
  window.timeToSave = 10000;
  // const intervalId = setInterval(() => {
  //   if (window.timeToSave === 0) {
  //     clearInterval(intervalId);
  //     return;
  //   }
  //   window.timeToSave -= 1000;
  //   console.log(window.timeToSave);
  // }, 1000);
  window.setTimeout(() => {
    window.timeToSave = 0;
    console.log('Hii');
    savePortfolio();
  }, 10000);
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
      if (window.isSaved === true || window.timeToSave !== 0) {
        return;
      }
      const savePopUp = document.querySelector('.notification-popup');
      savePopUp.classList.add('show');
      setTimeout(() => {
        savePopUp.classList.remove('show');
      }, 3000);
      localStorage.setItem('portfolio', JSON.stringify(window.portfolio));
      window.isSaved = true;
      if (window.edit === false) {
        clearInterval(intervalId);
      }
    }
    , 1000);
}

export { savePortfolio, saveDelay };
