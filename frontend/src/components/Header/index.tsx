import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <>
            <header>

                <div className="cabecalho">

                    <img src={logo} alt="DSMETA"/>
                        <h1>DSMeta</h1>
                        <p>Desenvolvido por <a className="git" href="https://github.com/riqq54" target="_blank"> @riqq54</a> </p>

                </div>

            </header>
        </>
    )
}

export default Header;