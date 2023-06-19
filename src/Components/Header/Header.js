import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">Movies List</h1>
            <div className="header-login">
                <button className="header-login--button">Login</button>
            </div>            
        </div>
    )
};

export default Header;