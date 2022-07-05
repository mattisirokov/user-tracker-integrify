const Navbar = () => {
    //basic navbar used throughout the project, nothing special.
    return ( 
        <nav className="navbar">
            <h1> Integrify user database</h1>
            <div className="links">
                <a href="/"> Home </a>
                <a href="/"> Report user</a>
            </div>
        </nav>
     );
}
 
export default Navbar;