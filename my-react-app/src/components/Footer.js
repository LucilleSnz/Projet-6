import kasa from "../assets/kasalogo.svg";


export default function Footer() { // Déclare un composant fonctionnel nommé Footer.
    return ( // Retourne le JSX du footer.
    <footer className="footer"> {/* Définit la balise footer avec une classe CSS pour le styliser. */}
        <img src={kasa} alt="logo Kasa" className="footer__logo"/> {/* Affiche le logo Kasa avec une classe CSS spécifique. */}
        <p className="footer__text">© 2020 Kasa. All rights reserved</p> {/* Affiche un texte de copyright. */}
    </footer>
    );
}