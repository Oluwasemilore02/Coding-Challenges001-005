document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const clear = document.getElementById("clear-all");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return; 

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="item-text">${text}</span>
        <button class="remove-btn" aria-label="delete">Delete</button>
      `;
    list.appendChild(li);
    input.value = "";
    input.focus();
  });

  list.addEventListener("click", (e) => {
    if (e.target.matches(".remove-btn")) {
      e.target.closest("li").remove();
    }
  });

  clear.addEventListener("click", () => {
    list.innerHTML = "";
  });
});
