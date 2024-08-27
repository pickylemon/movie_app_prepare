import { Component } from '../core/core.js'
import messageStore from '../store/message.js'

export default class Message extends Component {
    constructor() {
        super()
        messageStore.subscribe('message', () => {
            this.render()
        })
    }
    render() {
        this.el.innerHTML = /* html */`
            <h2>${messageStore.state.message}</h2>
        `
    }
}