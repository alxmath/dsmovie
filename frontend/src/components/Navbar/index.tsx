import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'

function Navbar() {

    return (
        <header className='dsmovie-nav-content'>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/alxmath">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/alxmath</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
        );
}

export default Navbar;