function borderStyleSubDropdown (index, randomId) {
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${randomId}">
                        <label for="borderColor-${index}-${randomId}">Border Color:</label>
                        <div class="color-picker" id="borderColor-${index}-${randomId}"></div>

                        <label for="borderWidth-${index}-${randomId}">Border Width:</label>
                        <input type="number" id="borderWidth-${index}-${randomId}" value="1" min="1" max="10" step="1">

                        <label for="borderStyle-${index}-${randomId}">Border Style:</label>
                        <select id="borderStyle-${index}-${randomId}">
                            <option value="solid">Solid</option>
                            <option value="dotted">Dotted</option>
                            <option value="dashed">Dashed</option>
                            <option value="double">Double</option>
                            <option value="groove">Groove</option>
                        </select>
                    </div>
      `);
}

export { borderStyleSubDropdown };
