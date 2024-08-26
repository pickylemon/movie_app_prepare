import App from './App'
import router from './routes/index'

const root = document.querySelector('#root')
root.append(new App().el)

router() //위치가 중요