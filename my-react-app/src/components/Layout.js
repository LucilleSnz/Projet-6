import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) { // Déclare un composant fonctionnel Layout prenant en argument "children".
  const location = useLocation(); // Utilise le hook useLocation pour obtenir la route actuelle.
  let pageClass = ""; // Initialise une variable "pageClass" pour déterminer la classe de la page.

  if (location.pathname === "/about") { // Si le chemin est "/about", attribue "about-page" à "pageClass".
    pageClass = "about-page";
} else if (location.pathname === "/") { // Si le chemin est "/", attribue "home-page".
    pageClass = "home-page";
} else if (location.pathname.startsWith("/property/")) { // Si le chemin commence par "/property/", attribue "home-page".
    pageClass = "home-page";
} else { // Si aucune des conditions n'est remplie, attribue "error-page".
    pageClass = "error-page";
}

  return ( // Retourne le JSX du Layout.
    <div className={`wrapper ${pageClass}`}> {/* Applique une classe dynamique basée sur "pageClass" au wrapper. */}
      <Header /> {/* Affiche le composant Header. */}
      <main>{children}</main> {/* Affiche le contenu principal passé en prop "children". */}
      <Footer /> {/* Affiche le composant Footer. */}
    </div>
  );
}