function changelineHeight (target, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  text.style.lineHeight = target.value;
}

function changePadding (inputElement, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.padding = inputValue;
}

function changeMargin (inputElement, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.margin = inputValue;
}

function changeTextAlign (target, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  text.style.textAlign = target.value;
}

function spacingAndAlignmentSubDropdown (index, randomId, id) {
  document.getElementById(`text-container-${id}-${randomId}`).addEventListener('change', function (event) {
    const target = event.target;

    if (target.id.startsWith('lineHeight')) {
      changelineHeight(target, randomId, id);
    } else if (target.id.startsWith('padding')) {
      changePadding(target, randomId, id);
    } else if (target.id.startsWith('margin')) {
      changeMargin(target, randomId, id);
    } else if (target.id.startsWith('textAlign')) {
      changeTextAlign(target, randomId, id);
    }
  });
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${id}-${randomId}">
                        <label for="lineHeight-${index}-${id}-${randomId}">Line Height:</label>
                        <input type="number" id="lineHeight-${index}-${id}-${randomId}" value="1" min="1" max="10" step="1">

                        <label for="padding-${index}-${id}-${randomId}">Padding:</label>
                        <input type="number" id="padding-${index}-${id}-${randomId}" value="1" min="1" max="10" step="1">

                        <label for="margin-${index}-${id}-${randomId}">Margin:</label>
                        <input type="number" id="margin-${index}-${id}-${randomId}" value="1" min="1" max="10" step="1">


                        <label for="textAlign-${index}-${id}-${randomId}">Text Align:</label>
                        <select id="textAlign-${index}-${id}-${randomId}">
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                            <option value="justify">Justify</option>
                        </select>
                    </div>
      `);
}

export { spacingAndAlignmentSubDropdown };
