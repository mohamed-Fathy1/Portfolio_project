function backgroundStyleSubDropdown (index, randomId, id) {
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${id}-${randomId}">
                        <label for="backgroundColor-${index}-${id}-${randomId}">Background Color:</label>
                        <div class="color-picker" id="backgroundColor-${index}-${id}-${randomId}"></div>
                    </div>
      `);
}

export { backgroundStyleSubDropdown };
