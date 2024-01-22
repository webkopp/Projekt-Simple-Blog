import { Link } from "react-router-dom"

const Nav = () => {
    return ( 
        <>
            <h5>nav</h5>
            <nav>
                <Link to="/"><button>My Life</button></Link>
                <Link to="/"><button>Home</button></Link>
                <Link to="/"><button>Blog</button></Link>
            </nav>
        </>
     );
}
 
export default Nav;