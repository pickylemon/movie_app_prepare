//컴포넌트 생성
//페이지를 구분할 수 있는 라우터 기능
//컴포넌트 간의 통신을 할 수 있는 스토어 개념


//// Component ////
export class Component {
    constructor(payload = {}) {
        const { 
            tagName  = 'div', 
            state = {} 
        } = payload
        this.el = document.createElement(tagName)
        this.state = state
        this.render()
    }

    render() {
        // Component 클래스를 extends해서 사용할때만 쓰임
    }
}