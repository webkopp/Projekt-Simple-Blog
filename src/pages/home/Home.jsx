import Header from "../../components/header/Header";
import { Link } from "react-router-dom"

const Home = () => {
    return ( 

        <>
            <Nav />
            <Header />
            <h2>Home</h2>
            <div>
                <h3>Welcome to my simple blog</h3>
                <button>
                    <Link to='/blog' >Go to...</Link>
                </button>
            </div>
        </>
     );
}
 
export default Home;