import '../styles/Card.scss';

export default function Card({ imageSrc, title, onClick }) {
  // Déclare et exporte une fonction nommée "Card" qui prend trois props : 
  // "imageSrc" (source de l'image), "title" (titre affiché sur la carte) et "onClick" (fonction appelée lors du clic).

  return (
    // Retourne le JSX du composant "Card".
    <div className="card" onClick={onClick}>
      {/* La div principale a la classe "card" et déclenche la fonction "onClick" quand on clique sur la carte. */}
      
      <img src={imageSrc} alt={title} />
      {/* Affiche une image dont la source est passée via la prop "imageSrc". 
          L'attribut "alt" utilise la prop "title" pour améliorer l'accessibilité en fournissant un texte alternatif pour l'image. */}
      
      <h2>{title}</h2>
      {/* Affiche le titre de la carte dans un élément <h2>, avec la valeur de la prop "title". */}
    </div>
  );
}