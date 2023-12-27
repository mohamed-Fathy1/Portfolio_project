let startInterval = false;
/**
    * @description save delay
    * @returns {void}
    * @example
    * saveDelay();
* */
function saveDelay () {
  if (startInterval === true) {
    console.log('startInterval');
    return;
  }
  startInterval = true;
  const intervalId = setInterval(() => {
    if (window.timeToSave === 0) {
      clearInterval(intervalId);
      savePortfolio();
      console.log('saved');
      return;
    }
    window.timeToSave -= 1000;
    console.log(window.timeToSave);
  }, 1000);
  // console.log('saveDelay');
  // console.log(intervalId);
  // return intervalId;
  // window.setTimeout(() => {
  //   window.timeToSave = 0;
  //   savePortfolio();
  // }, 10000);
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
        clearInterval(intervalId);
        return;
      }
      console.log(window.isSaved);
      console.log('saving');
      const savePopUp = document.querySelector('.notification-popup');
      savePopUp.classList.add('show');
      setTimeout(() => {
        savePopUp.classList.remove('show');
      }, 3000);
      localStorage.setItem('portfolio', JSON.stringify(window.portfolio));
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
