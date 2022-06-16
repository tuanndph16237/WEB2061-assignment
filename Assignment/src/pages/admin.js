import { deleteBook, getBooks } from "../api/product";
import Products from "./Products";
import reRender from '../helpers/reRender';
import bookAdd from "./ProductAdd";
const Admin = {
        render: async() => {
                const response = await getBooks();
                const dataBook = response.data;
                const count = 1;
                return `
        <div class="container">
            <table class="table table-striped table-hover">
                <thead>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th><a href="/newbook" class="btn btn-info">New product</a></th>
                </thead>
                <tbody>
                ${
                    dataBook.map((data) => (
                    `
                    <tr>
                        <td>${data.id}</td>
                        <td>${data.name}</td>
                        <td><img width="90px" src="${data.image}" /></td>
                        <td>${data.price}.000đ</td>
                        <td style="width: 500px;">${data.description}</td>
                        <td>
                            <a class="btn btn-primary" href="/books/edit/${data.id}">Edit</a>
                            <a class="btn btn-danger" data-id="${data.id}" data-name="${data.name}">Delete</a>
                        </td>
                    </tr>
                    `
                    ))
                }
                </tbody>
            </table>
        </div>`
    },
    afterRender: () => {
        // Đây là nơi thực thi nghiệp vụ định nghĩa sự kiện xoá
        // 1. Tìm toàn bộ nút xoá và thêm sự kiện click cho nó
        const deleteBtns = document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            // addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
            btn.addEventListener('click', async () => {
                // Tìm xem chúng ta muốn xoá thằng nào
                // const data = btn.dataset; // {id: '', name: ''} với id ~ data-id, name ~ data-name
                const btnId = btn.dataset.id;
                // Thực hiện xoá
                await deleteBook(btnId);
                // window.location.reload();
                window.location.reload();
            });

        });
    }
}
export default Admin;