function changeBorderStyle (e, randomId) {
  const text = document.getElementById(`text-${randomId}`).lastElementChild;
  text.style.borderStyle = e.value;
  const styles = window.getComputedStyle(text);
  const cssText = text.attributes.style;
  document.getElementById(`text-${randomId}`).firstElementChild.attributes.style.value = cssText.value;
  document.getElementById(`text-${randomId}`).firstElementChild.style.display = 'none';
}

function changeBorderWidth (inputElement, randomId) {
  const text = document.getElementById(`text-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.borderWidth = inputValue;
}

function changeBorderRadius (inputElement, randomId) {
  const text = document.getElementById(`text-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.borderRadius = inputValue;
}

function borderStyleSubDropdown (index, randomId) {
// Add event listeners after the component is added to the DOM
  document.getElementById(`text-container-${randomId}`).addEventListener('change', function (event) {
    const target = event.target;

    if (target.id.startsWith('borderWidth')) {
      changeBorderWidth(target, randomId);
    } else if (target.id.startsWith('borderStyle')) {
      changeBorderStyle(target, randomId);
    } else if (target.id.startsWith('borderRadius')) {
      changeBorderRadius(target, randomId);
    }
  });
  return (`
    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${randomId}">
      <label for="borderColor-${index}-${randomId}">Border Color:</label>
      <div class="color-picker" id="borderColor-${index}-${randomId}"></div>
      <label for="borderWidth-${index}-${randomId}">Border Width:</label>
      <input type="number" id="borderWidth-${index}-${randomId}" value="1" min="1" max="10" step="1">
      <label for="borderStyle-${index}-${randomId}">Border Style:</label>
      <select id="borderStyle-${index}-${randomId}">
        <option value="none">None</option>
        <option value="solid">Solid</option>
        <option value="dotted">Dotted</option>
        <option value="dashed">Dashed</option>
        <option value="double">Double</option>
        <option value="groove">Groove</option>
      </select>
      <label for="borderRadius-${index}-${randomId}">Border Radius:</label>
      <input type="number" id="borderRadius-${index}-${randomId}" value="0" min="0" max="100" step="1">
    </div>
  `);
}

export { borderStyleSubDropdown, changeBorderWidth };
