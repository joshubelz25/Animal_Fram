'use strict';

const form = document.getElementById("*")
const label = document.createElement("label")
const input = document.createElement("input")
const submit = document.createElement("input")
const fieldset = document.getElementById("first")
const content = document.createElement("textarea")
const main = document.createElement("main")

label.textContent="date"
input.type="text"
input.id="date"
input.name="input"
submit.type="submit"
submit.id="press"
submit.name="submit"
submit.textContent="submit"
content.id="info"
content.name="content"
content.rows="5"
content.cols="30"

fieldset.appendChild(label)
fieldset.appendChild(input)
fieldset.appendChild(content)
fieldset.appendChild(submit)



form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
const title = event.target.title.value;
const content = event.target.content.value;

const h2 = document.createElement('h2');
const p = document.createElement('p');

h2.textContent = title;
p.textContent = content;

const formContent = document.getElementById('render');

formContent.appendChild(h2);
formContent.appendChild(p);
}