import Collapse from './../components/Collapse.jsx';

function AboutPage() {
    return (
        <div>
            <h1>À propos</h1>
            <Collapse title="Fiabilité">
                <p>Le texte décrivant la fiabilité.</p>
            </Collapse>
            <Collapse title="Respect">
                <p>Le texte décrivant le respect.</p>
            </Collapse>
            <Collapse title="Service">
                <p>Le texte décrivant le service.</p>
            </Collapse>
            <Collapse title="Sécurité">
                <p>Le texte décrivant la sécurité.</p>
            </Collapse>
        </div>
    );
}

export default AboutPage;