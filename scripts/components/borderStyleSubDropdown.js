function changeBorderStyle (e, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  text.style.borderStyle = e.value;
}

function changeBorderWidth (inputElement, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.borderWidth = inputValue;
}

function changeBorderRadius (inputElement, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.borderRadius = inputValue;
}

function borderStyleSubDropdown (index, randomId, id) {
// Add event listeners after the component is added to the DOM
  document.getElementById(`text-container-${id}-${randomId}`).addEventListener('change', function (event) {
    const target = event.target;

    if (target.id.startsWith('borderWidth')) {
      changeBorderWidth(target, randomId, id);
    } else if (target.id.startsWith('borderStyle')) {
      changeBorderStyle(target, randomId, id);
    } else if (target.id.startsWith('borderRadius')) {
      changeBorderRadius(target, randomId, id);
    }
  });
  return (`
    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${id}-${randomId}">
      <label for="borderColor-${index}-${id}-${randomId}">Border Color:</label>
      <div class="color-picker" id="borderColor-${index}-${id}-${randomId}"></div>
      <label for="borderWidth-${index}-${id}-${randomId}">Border Width:</label>
      <input type="number" id="borderWidth-${index}-${id}-${randomId}" value="1" min="1" max="10" step="1">
      <label for="borderStyle-${index}-${id}-${randomId}">Border Style:</label>
      <select id="borderStyle-${index}-${id}-${randomId}">
        <option value="none">None</option>
        <option value="solid">Solid</option>
        <option value="dotted">Dotted</option>
        <option value="dashed">Dashed</option>
        <option value="double">Double</option>
        <option value="groove">Groove</option>
      </select>
      <label for="borderRadius-${index}-${id}-${randomId}">Border Radius:</label>
      <input type="number" id="borderRadius-${index}-${id}-${randomId}" value="0" min="0" max="100" step="1">
    </div>
  `);
}

export { borderStyleSubDropdown, changeBorderWidth };
