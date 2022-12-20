import { Component } from './Component.js'

const element = new Component("h1", "body", {id: "h1", textContent: "Hello"})
console.log(element)
element.render()




const span = new Component("span", "body", {id: "span", textContent: "deu certo"})

span.render()