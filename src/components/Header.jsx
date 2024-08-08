import { Link, useLocation } from 'react-router-dom';

function Header() {
    const currentPage = useLocation().pathname;
    
    return (
        <header>
            <h1>HELLO THIS IS WORKING YAY</h1>
        </header>
    )
}

export default Header;