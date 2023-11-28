function spacingAndAlignmentSubDropdown (index, randomId) {
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${randomId}">
                        <label for="lineHeight-${index}-${randomId}">Line Height:</label>
                        <input type="number" id="lineHeight-${index}-${randomId}" value="1" min="1" max="10" step="1">

                        <label for="padding-${index}-${randomId}">Padding:</label>
                        <input type="number" id="padding-${index}-${randomId}" value="1" min="1" max="10" step="1">

                        <label for="margin-${index}-${randomId}">Margin:</label>


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
