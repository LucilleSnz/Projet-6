import '../styles/Banner.scss';

export default function Banner({ imageSrc, title, opacity }) { 
  // Déclare et exporte une fonction appelée "Banner" qui prend trois props : 
  // imageSrc (source de l'image), title (titre du banner) et opacity (opacité pour l'overlay).
  
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity || 0.6})`
    // Définit un objet "overlayStyle" pour l'overlay du banner avec une couleur de fond.
    // La couleur est un noir avec une opacité (valeur entre 0 et 1) qui est égale à "opacity" si elle est fournie.
    // Si "opacity" n'est pas définie, une opacité par défaut de 0.6 est utilisée.
  };

  return (
    // Retourne le JSX du composant Banner.
    <div className="banner" style={{ backgroundImage: `url(${imageSrc})` }}>
      {/* La div principale a la classe "banner" et applique l'image de fond grâce à la prop "imageSrc". */}
      
      <div className='banner-overlay' style={overlayStyle}></div>
      {/* Cette div sert de superposition (overlay) sur l'image de fond, avec un style (overlayStyle) basé sur l'opacité spécifiée. */}
      
      <h1>{title}</h1>
      {/* Affiche le titre passé en prop "title" dans un élément <h1>. */}
    </div>
  );
}