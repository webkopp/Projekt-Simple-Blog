import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
            <header>
                <h1>My Life</h1>
                <button>
                    <Link to='/' >Home</Link>
                </button>
                <button>
                    <Link to='/blog' >Blog</Link>
                </button>
            </header>
        </>
     );
}
 
export default Header;