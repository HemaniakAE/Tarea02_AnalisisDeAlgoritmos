function Header() {
    return (
        <header className="header">
            <h1>
                Maximizador de conjuntos{' '}
                <img 
                src="/icono conjunto.png" 
                alt="Conjunto logo" 
                className="header-logo"
                style={{ height: "1.4em",verticalAlign: "middle"}} 
                />
            </h1>
        </header>
    );
}

export default Header;