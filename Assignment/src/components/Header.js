import Nav from "./Nav";
const Header = {
    render: () => {
        return `
        <div>
        <div>${Nav.render()}</div>
        </div>
        `
    }
}
export default Header;