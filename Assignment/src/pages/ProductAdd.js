import { createBook, getBook, updateBook } from "../api/product";
const bookAdd = {
    render: async(id) => {
        let books = {
            name: '',
            image: '',
            price: '',
            description: '',
        };
        if (id) {
            const response = await getBook(id);
            books = response.data;
        }
        return (
            `<div class="container" style="width: 600px;">
                <form>
                    <div class="form-floating mb-3">
                        <input type="text" value="${books.name}" class="form-control" id="name">
                        <label for="floatingInput">Tên sản phẩm</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" value="${books.image}" class="form-control" id="image">
                        <label for="floatingInput">Hình ảnh</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" value="${books.price}" class="form-control" id="price">
                        <label for="floatingInput">Giá sản phẩm</label>
                    </div>
                    <div class='form-group'>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" value="" id="description" style="height: 100px">${books.description}</textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                    </div>
                    <div class='form-group' style="margin-top: 2%;">
                        <button type='button' class="btn btn-success" id='btn'>
                            ${id ? 'Cập nhật' : 'Thêm sản phẩm'}
                        </button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: (id) => {
        // console.log('afterRender', id);
        const submitBtn = document.querySelector('#btn');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const image = document.querySelector('#image').value;
            const price = document.querySelector('#price').value;
            const descript = document.querySelector('#description').value;

            const submitData = {
                name: name,
                image: image,
                price: price,
                description: descript,
            };

            if (id) {
                await updateBook(id, submitData);
                alert('Cập nhật sản phẩm thành công');
                window.location = "/admin";
            } else {
                await createBook(submitData);
                alert('Thêm sản phẩm thành công');
                window.location = "/admin";
            }
            router.navigate('/books');

        });
    }
};

export default bookAdd;