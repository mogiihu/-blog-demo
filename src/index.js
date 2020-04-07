import Header from './header';
import Sidebar from './siderbar';
import Content from './content';
import Qiyu from './timg.jpg';
import './index.css';

var img = new Image();
img.src = Qiyu;
img.classList.add('img')
var dom = document.getElementById('root');
dom.append(img);

console.log('222')

new Header();
new Sidebar();
new Content();


const app = () => {
    console.log('es6');
}
app();