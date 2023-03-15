import Link from '../Link';
import './Navbar.css';

function Navbar() {
    return ( 
        <nav className='container-navegacao'>
            <ul>
                <li><Link link='#inicio' nome='Inicio' /></li>
                <li><Link link='#inicio' nome='Sobre mim' /></li>
                <li><Link link='#inicio' nome='Projetos' /></li>
                <li><Link link='#inicio' nome='Contato' /></li>
            </ul>
        </nav>
    )
}

export default Navbar;