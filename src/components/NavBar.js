import './NavBar.css';
import FeatherIcon from 'feather-icons-react';


function NavBar(params) {
    return(
        <div className="header">
            v.Kiwi
        
        <ul className="nav-bar">
            <FeatherIcon icon="search" />
            <FeatherIcon icon="github" />     
        </ul>

        </div>
    );
}

export default NavBar;