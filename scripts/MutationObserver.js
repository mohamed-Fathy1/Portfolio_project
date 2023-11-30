const observer = new MutationObserver(function (mutations) {
  console.log('style changed!');
  if (mutations[0].target.style.display === 'none') {
    return;
  }
  const target = mutations[0].target;
  const cssText = target.attributes.style;
  target.parentElement.firstElementChild.attributes.style.value = cssText.value;
  target.parentElement.firstElementChild.style.display = 'none';
  // mutations.forEach(function(mutationRecord) {
  //     console.log('style changed!');
  // });
});

export { observer };
