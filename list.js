const input = document.getElementsByClassName("input")[0];
const white = document.getElementsByClassName("white")[0];

function list() {
  const el = document.createElement("div");
  const text = document.createElement("div");
  text.innerHTML = input.value;
  el.appendChild(text);
  white.appendChild(el);
  input.value = "";
  el.className = "style";

  const remove = document.createElement("div");
  remove.innerHTML = input.value;
  el.appendChild(remove);
  remove.className = "delete";
  remove.addEventListener("click", function () {
    el.remove();
  });

  const edit = document.createElement("button");
  edit.innerHTML = "edit";
  el.appendChild(edit);
  edit.className = "edit";
  edit.addEventListener("click", function () {
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "done";
    el.appendChild(doneBtn);
    text.contentEditable = true;

    doneBtn.addEventListener("click", function () {
      text.contentEditable = false;
      doneBtn.remove();
    });
  });

  button.addEventListener("click", function () {
    if (input === 0) {
      alert("empty!");
    }
  });

  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedTime = formatter.format(date);
  console.log(formattedTime);
  el.appendChild(date);
}

const button = document.getElementById("button");
button.onclick = list;
