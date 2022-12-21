import { Component } from "./Component.js";

export class Form extends Component {
  constructor(parent, options) {
    super("form", parent, options)
  }




  addChildToForm(...args) {
    args.forEach(( arg ) => {
      this.getElement().appendChild(arg.getElement());
    })
  }
}