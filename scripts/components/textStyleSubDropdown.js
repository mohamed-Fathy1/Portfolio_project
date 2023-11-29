
function changeFontFamily (target, randomId) {
  const text = document.getElementById(`text-${randomId}`).lastElementChild;
  text.style.fontFamily = target.value;
}

function changeFontSize (inputElement, randomId) {
  const text = document.getElementById(`text-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.fontSize = inputValue;
}

function textStyleSubDropdown (index, randomId) {
  document.getElementById(`text-container-${randomId}`).addEventListener('change', function (event) {
    const target = event.target;

    if (target.id.startsWith('fontFamily')) {
      changeFontFamily(target, randomId);
    } else if (target.id.startsWith('fontSize')) {
      changeFontSize(target, randomId);
    }
  });
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${randomId}">
                        <label for="fontSize-${index}-${randomId}">Font Size (px):</label>
                        <input type="number" id="fontSize-${index}-${randomId}" value="16">

                        <label for="fontColor-${index}-${randomId}">Font Color:</label>
                        <div class="color-picker" id="fontColor-${index}-${randomId}"></div>

                        <label for="fontWeight-${index}-${randomId}">Bold:</label>
                        <input type="checkbox" id="fontWeight-${index}-${randomId}">

                        <label for="fontFamily-${index}-${randomId}">Font Family:</label>
                        <select id="fontFamily-${index}-${randomId}">
                            <option value="Arial, sans-serif">Arial</option>
                            <option value="'Times New Roman', serif">Times New Roman</option>
                            <option value="'Courier New', monospace">Courier New</option>
                        </select>
                    </div>
      `);
}

export { textStyleSubDropdown };
