import { Component } from '../core/core.js'
import messageStore from '../store/message.js'

export default class TextField extends Component {
    render() {
        this.el.innerHTML = /* html */`
            <input value="${messageStore.state.message}"/> <!--getter-->
        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            messageStore.state.message = inputEl.value //setter
        })
    }
}