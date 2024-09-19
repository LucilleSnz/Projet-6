const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    {/* Utilisez Link pour la navigation */}
                    <a href="/">Accueil</a>
                    <a href="/about">À propos</a>
                </nav>
            </header>
        
        <main>{children}</main>
        
            <footer>
                <p>Footer de l'application</p>
            </footer>
        </div>
    );
};

export default Layout;
