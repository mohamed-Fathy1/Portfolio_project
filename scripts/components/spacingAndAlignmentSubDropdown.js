function changelineHeight (target, randomId) {
  const text = document.getElementById(`text-${randomId}`).lastElementChild;
  text.style.lineHeight = target.value;
}

function changePadding (inputElement, randomId) {
  const text = document.getElementById(`text-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.padding = inputValue;
}

function changeMargin (inputElement, randomId) {
  const text = document.getElementById(`text-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.margin = inputValue;
}

function changeTextAlign (target, randomId) {
  const text = document.getElementById(`text-${randomId}`).lastElementChild;
  text.style.textAlign = target.value;
}

function spacingAndAlignmentSubDropdown (index, randomId) {
  document.getElementById(`text-container-${randomId}`).addEventListener('change', function (event) {
    const target = event.target;

    if (target.id.startsWith('lineHeight')) {
      changelineHeight(target, randomId);
    } else if (target.id.startsWith('padding')) {
      changePadding(target, randomId);
    } else if (target.id.startsWith('margin')) {
      changeMargin(target, randomId);
    } else if (target.id.startsWith('textAlign')) {
      changeTextAlign(target, randomId);
    }
  });
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${randomId}">
                        <label for="lineHeight-${index}-${randomId}">Line Height:</label>
                        <input type="number" id="lineHeight-${index}-${randomId}" value="1" min="1" max="10" step="1">

                        <label for="padding-${index}-${randomId}">Padding:</label>
                        <input type="number" id="padding-${index}-${randomId}" value="1" min="1" max="10" step="1">

                        <label for="margin-${index}-${randomId}">Margin:</label>
                        <input type="number" id="margin-${index}-${randomId}" value="1" min="1" max="10" step="1">


                        <label for="textAlign-${index}-${randomId}">Text Align:</label>
                        <select id="textAlign-${index}-${randomId}">
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                            <option value="justify">Justify</option>
                        </select>
                    </div>
      `);
}

export { spacingAndAlignmentSubDropdown };
