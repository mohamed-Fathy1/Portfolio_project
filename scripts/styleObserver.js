import { saveDelay } from './savePortfolio.js';

// Description: This file contains the style observer that is used to
//  update the style of the editable elements when the style changed.
const styleObserver = new MutationObserver(function (mutations) {
  console.log(mutations);
  if (mutations[0].target.style.display === 'none' || mutations.length !== 1) {
    return;
  }
  const target = mutations[0].target;
  const cssText = target.attributes.style;
  target.parentElement.firstElementChild.attributes.style.value = cssText.value;
  target.parentElement.firstElementChild.style.display = 'none';
  // mutations.forEach(function(mutationRecord) {
  //     console.log('style changed!');
  // });
  console.log(target.parentElement.firstElementChild.style);
  console.log(cssText.value);
  window.isSaved = false;
  console.log(target);
  console.log('style changed!');
  const id = target.parentElement.id.split('-')[1];
  const randomId = target.parentElement.id.split('-')[2];
  console.log(id);
  console.log(randomId);
  window.portfolio[`section-${id}`].edits.text[`text-container-${id}-${randomId}`].style = cssText.value;
  window.isSaved = false;
  window.timeToSave = maxTimeToSave;
  if (window.timeToSave === maxTimeToSave) {
    console.log('saveDelay');
    saveDelay();
  }
});

export { styleObserver };
