import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from '../AppContext';
import kasa from "../assets/kasa-logo.png";

export default function Header() {
  // Déclare et exporte une fonction nommée "Header", qui est un composant fonctionnel sans props.

  const { setShowSlideshow } = useAppContext();
  // Utilise le hook "useAppContext" pour obtenir une fonction "setShowSlideshow" du contexte global de l'application.
  // Cette fonction est probablement utilisée pour contrôler l'affichage d'un diaporama (slideshow).

  return (
    // Retourne le JSX du composant "Header".
    <header className="header">
      {/* Définit un élément <header> avec la classe CSS "header" pour le styliser. */}
      
      <img src={kasa} alt="logo Kasa" className="header__logo"/>
      {/* Affiche le logo de Kasa avec l'attribut "src" qui provient d'une image "kasa". 
          L'attribut "alt" est utilisé pour fournir un texte alternatif (accessibilité) si l'image ne se charge pas. */}

      <nav>
        {/* Définit une balise de navigation <nav> qui contient la structure de menu. */}
        
        <ul>
          {/* Liste non ordonnée contenant les éléments du menu. */}
          
          <li>
            <NavLink to="/" onClick={() => setShowSlideshow(false)}>Accueil</NavLink>
            {/* Lien de navigation qui utilise "NavLink" pour rediriger vers la page d'accueil ("/").
                Quand l'utilisateur clique dessus, la fonction "setShowSlideshow(false)" est exécutée, 
                ce qui désactive probablement le diaporama. */}
          </li>
          
          <li>
            <NavLink to="/about">A Propos</NavLink>
            {/* Lien de navigation pour rediriger vers la page "A Propos" ("/about"). Aucun comportement supplémentaire n'est défini ici. */}
          </li>
        </ul>
      </nav>
    </header>
  );
}