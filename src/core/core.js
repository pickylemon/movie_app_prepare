//컴포넌트 생성
//페이지를 구분할 수 있는 라우터 기능
//컴포넌트 간의 통신을 할 수 있는 스토어 개념


//// Component ////
export class Component {
    constructor(payload = {}) {
        const { 
            tagName  = 'div', 
            state = {},
            props = {} 
        } = payload
        this.el = document.createElement(tagName)
        this.state = state
        this.props = props
        this.render()
    }

    render() {
        // Component 클래스를 extends해서 사용할때만 쓰임
    }
}


//// Router ////
function routeRender(routes) {
    if(!location.hash) { //주소에 해시가 없으면
        history.replaceState(null, '', '/#/') //history내역에 기록을 남기지 않으며 대체
    }

    const routerView = document.querySelector('router-view')
    const [ hash, queryString = '' ] = location.hash.split('?') //해시와 쿼리스트링을 나누어 담는다.(split + 배열 구조 분해 할당)
    
    // a=123&b=456
    // ['a=123', 'b=456']
    // { a: '123', b: '456' }
    // 쿼리 스트링을 객체로 가공해서 state에 저장
    const query = queryString
        .split('&')
        .reduce((acc, cur)=>{
            const [ key, value ] = cur.split('=')
            acc[key] = value
            return acc
        }, {})
    history.replaceState(query, '')

    const currentRoute 
        = routes.find(route => 
                        // /#\/about\/?$/.test(hash)
                        new RegExp(`${route.path}/?$`).test(hash)
    )
    routerView.innerHTML = ''
    routerView.append(new currentRoute.component().el)

    window.scrollTo(0, 0) //페이지 위치를 최상단으로 바꿔줌(페이지 전환처럼 눈속임)
}

export function createRouter(routes) {
    return function () {
        window.addEventListener('popstate', () => {
            routeRender(routes)
        })
        routeRender(routes) //popstate는 처음에는 직접 동작하지 않기때문에 최초 호출 필요
    }
}

//// Store ////
export class Store {
    constructor(state) {
        this.state = {}
        this.observers = {}
        for(const key in state) {
            Object.defineProperty(this.state, key, {
                get: () => state[key], // state['message']
                set: val => {
                    console.log(val)
                    state[key] = val
                    this.observers[key]()
                }
            })
        } 
    }
    subscribe(key, cb) { //변경된 데이터를 감지하고 감시하는 메소드
        this.observers[key] = cb
    }
}