import Banner from "../../components/banner/Banner";
import desktopBanner from "../../assets/content/banner-bain-or-large.webp";
import tabBanner from "../../assets/content/banner-bain-or-medium.webp";
import mobileBanner from "../../assets/content/banner-bain-or-small.webp";
import Article from "../../components/article/Article";
import Prestations from "../../components/prestations/Prestations";
import Footer from "../../components/footer/Footer";
import presationsCard from "../../assets/plomberie/card-plomberie-baignoire.webp";
import plomberie1 from "../../assets/plomberie/plomberie-douche_2.webp";
import plomberie2 from "../../assets/plomberie/plomberie-douche_italienne_1.webp";
import plomberie3 from "../../assets/plomberie/salle_de_bain_douche_1.webp";
import plomberie4 from "../../assets/plomberie/chauffage_1.jpg";
import plomberie5 from "../../assets/plomberie/plomberie_4.jpg";
import plomberie6 from "../../assets/plomberie/chauffage_2.jpg";
import plomberie7 from "../../assets/plomberie/plomberie_5.jpg";
import plomberie8 from "../../assets/plomberie/chauffage_3.jpeg";
import plomberie9 from "../../assets/plomberie/plomberie_6.jpg";
import plomberie10 from "../../assets/plomberie/chauffage_4.jpeg";
import plomberie11 from "../../assets/plomberie/plomberie_7.jpg";
import plomberie12 from "../../assets/plomberie/plomberie_8.jpg";
import plomberie13 from "../../assets/plomberie/plomberie_9.jpg";
import Scroller from "../../components/scroller/Scroller";
import Contact from "../../components/contact/Contact";
import Fournisseurs from "../../components/fournisseurs/Fournisseurs";
import Marques from "../../components/marques/Marques";

export default function Plomberie () {

    const bannerDesktopImg = desktopBanner;
    const bannerTabImg = tabBanner;
    const bannerMobileImg = mobileBanner;
    const bannerTitle = "Nos services de plomberie et chauffage";
    const bannerText = "";

    const article1title = "Votre confort, notre engagement.";
    const article1text = "Chez M Tech ENERGIE, nous offrons des services complets allant de l'installation neuve à la rénovation de votre plomberie sanitaire. Nos compétences techniques nous permettent de répondre à une large gamme de besoins : de l'entretien minutieux au dépannage efficace. Notre équipe qualifiée s'engage également dans la mise en place de solutions durables.";

    const prestationsImg = presationsCard;
    const prestationsTitle = "Prestations";
    const prestationsList = [
        "Installations sanitaires complètes",
        "Création de douches à l'italienne",
        "Remplacement et maintenance de chauffe-eau",
        "Installation de solutions WC modernes et éco-responsables",
        "Installation de plomberie pour votre cuisine",
        "Mise en place de VMC",
        "Travaux de zinguerie pour une finition impeccable", 
    ];

    const article2title = "Nos réalisations en images";
    const article2text = "";

    const scrollerImages = [
        { url: plomberie1, description: "Description" },
        { url: plomberie2, description: "Description" },
        { url: plomberie3, description: "Description" },
        { url: plomberie4, description: "Description" },
        { url: plomberie5, description: "Description" },
        { url: plomberie6, description: "Description" },
        { url: plomberie7, description: "Description" },
        { url: plomberie8, description: "Description" },
        { url: plomberie9, description: "Description" },
        { url: plomberie10, description: "Description" },
        { url: plomberie11, description: "Description" },
        { url: plomberie12, description: "Description" },
        { url: plomberie13, description: "Description" },

      ];


    return (
        <>
        <div className="plomberie__banner" >
            <Banner desktopImg={bannerDesktopImg} tabImg={bannerTabImg} mobileImg={bannerMobileImg} title={bannerTitle} text={bannerText}/>
        </div>
        <div className="plomberie__content" id="about">
            <Article title={article1title} text={article1text}/>
            <Prestations prestationsImage={prestationsImg} title={prestationsTitle} listItems={prestationsList}/>
            <Article title={article2title} text={article2text}/>
            <Scroller images={scrollerImages} />
            <Fournisseurs/>
            <Marques/>
            <Contact/>
            <Footer/>
        </div>
        </>
    )
}