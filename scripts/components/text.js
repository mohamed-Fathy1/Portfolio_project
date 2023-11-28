function createTextComponent (name) {
  document.querySelectorAll('.text-container').forEach((item) => {
    const text = document.createElement('div');
    text.classList.add('text');
    text.innerHTML = `
        <h1>${name}</h1>
        <input type="text" placeholder="Enter text">`;
    item.appendChild(text);
  });
}

export { createTextComponent };
