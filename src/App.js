// export default class App {
//     constructor() {
//         this.el = document.createElement('div')
//         this.el.textContent = 'Hello, world!'
//     }
// }

import { Component } from './core/core.js'

export default class App extends Component {
    constructor() {
        super({
            state: {
                inputText: ''
            }
        })
    }

    //선언적 렌더링 : 사용할 데이터를 선언해서(ex. state의 inputText) 렌더링하는 것.
    render() {
        this.el.classList.add('search') //클래스 이름 추가
        this.el.innerHTML = /* html */`
            <input>
            <button>Click!</button>
        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            this.state.inputText = inputEl.value
        })

        const buttonEl = this.el.querySelector('button')
        buttonEl.addEventListener('click', () => {
            console.log(this.state.inputText)
        })
    }
}