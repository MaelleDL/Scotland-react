const Banner = ({ setBanner }) => {
    const hideBanner = () => {
        setBanner(false);
    };
    return (
        <div className="banner">
            <p>Ce site est fictif et n'est qu'un exercice de développement web mais n'hésitez pas à aller visiter le site de l'office du tourisme d'Ecosse: <a href="https://www.visitscotland.com/fr-fr/" target="_blank" rel="noopener noreferrer">visitscotland</a>.</p>
            <button onClick={hideBanner}>Cacher ce message</button>
        </div>
    );
};

export default Banner;