import Navigo from "navigo";
import Header from "./components/Header";
import Home from "./pages/home";
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./pages/Products";
import bookDetail from "./pages/BookDetail";
import CartDetail from "./pages/CartDetail";
import Footer from "./components/Footer";
import Admin from "./pages/admin";
import bookAdd from "./pages/ProductAdd";
import router from './helpers/router';
// Khởi tạo đối tượng router
// const router = new Navigo('/', { linksSelector: 'a' });
// router.navigate('/students');



const render = async(content, id) => {
    // content sẽ là toàn bộ component
    // cần thêm tham số vào hàm này để truyền id cho những phần detail
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    // Sau khi content đã render xong thì afterRender mới được chạy
    if (content.afterRender) {
        content.afterRender(id);
    }
};

router.on({
    '/': () => render(Home),
    '/products': () => render(Products),
    '/products/:id': (data) => render(bookDetail, data.data.id),
    '/cartDetail': () => render(CartDetail),
    '/admin': () => render(Admin),
    '/newbook': () => render(bookAdd),
    '/books/edit/:id': (data) => render(bookAdd, data.data.id),

});
router.resolve();