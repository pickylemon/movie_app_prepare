// export default class App {
//     constructor() {
//         this.el = document.createElement('div')
//         this.el.textContent = 'Hello, world!'
//     }
// }

import { Component } from './core/core.js'

export default class App extends Component {
    constructor() {
        super ({
            tagName: 'h1'
        })
    }
    render() {
        this.el.textContent = 'Hello, world!'
    }
}