function backgroundStyleSubDropdown (index, randomId) {
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${randomId}">
                        <label for="backgroundColor-${index}-${randomId}">Background Color:</label>
                        <div class="color-picker" id="backgroundColor-${index}-${randomId}"></div>
                    </div>
      `);
}

export { backgroundStyleSubDropdown };
