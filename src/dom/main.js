import { Component } from './Component.js'
import { Form } from './Form.js'
import { Input } from './Input.js'
import { Label } from './Label.js'


const element = new Component("h1", "body", {id: "h1", textContent: "Componente"})
console.log(element)
element.render()

const form = new Form("body", {className: "mb-3"})

const label = new Label("Name", form, {htmlFor: "nameInput"})
const input = new Input(form, {id: "nameInput", name: "name"})


form.render()
label.render()
form.addChildToForm(input)

form.addChildToForm(
  new Component("div"),
  new Label('Data de Nasc:', form, {htmlFor:"birthDayInput", className:"form-label"}),
  new Input(form, {id:"birthDayInput", name:"birthDay", type:"date", className:"form-control"})
)