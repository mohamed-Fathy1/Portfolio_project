function createTextComponent (name, ele) {
  const text = document.createElement('div');
  text.classList.add('text');
  text.innerHTML = `
        <h1>${name}</h1>
        <input type="text" placeholder="Enter text">`;
  ele.appendChild(text);
}

export { createTextComponent };
