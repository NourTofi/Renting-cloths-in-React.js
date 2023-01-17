function Nav() {
    return (
        <nav className="nav">
            <h2 className="logo">Nour</h2>
            <ul>
                <li><a href="#" className="home">Home</a></li>
                <li><a href="#" className="categories">Categories</a></li>
                <li><a href="#" className="addProduct">Add product</a></li>
                <li><a href="#" className="about">About</a></li>
            </ul>
            <button href="#" className="logIn">Log in</button>
        </nav>
    );
}

export default Nav;