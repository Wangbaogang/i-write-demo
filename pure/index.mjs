import Demo from './pages/demo/index.mjs';
import Router from './router.mjs';
// import XTip from './components/x-tip/index.mjs';

const app = document.querySelector('#app')


const router = new Router();

router.route('demo', () => {
    app.innerHTML = '';    
    app.appendChild(new Demo());
})
router.route('', () => {
    app.innerHTML = '';    
    app.appendChild(new Demo());
})
router.route('about', () => {
    app.innerHTML = '';    
    app.appendChild(new Demo());
})
router.start();
