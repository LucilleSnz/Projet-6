import Banner from '../components/Banner';
import bannerImg from "../assets/about-banner.png";
import Collapse from '../components/Collapse';

export default function About() {
    const fiabilityContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const serviceContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const securityContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (<div className='about-content'>
        <Banner imageSrc={bannerImg} opacity="0.3"/>
        <div className='collapse-container'>
            <Collapse title="Fiabilité" children={fiabilityContent}/>
            <Collapse title="Respect" children={respectContent}/>
            <Collapse title="Service" children={serviceContent}/>
            <Collapse title="Sécurité" children={securityContent}/> 
        </div>
    </div>
    );
}