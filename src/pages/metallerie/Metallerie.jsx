import Banner from "../../components/banner/Banner";
import desktopBanner from "../../assets/content/banner-metallerie-desktop.webp";
import tabBanner from "../../assets/content/banner-metallerie-tab.webp";
import mobileBanner from "../../assets/content/banner-metallerie-mobile.webp";
import Article from "../../components/article/Article";
import Prestations from "../../components/prestations/Prestations";
import Footer from "../../components/footer/Footer";
import presationsCard from "../../assets/metallerie/card-metallier-travail-2.webp";
import metallerie1 from "../../assets/metallerie/metallerie_1.jpeg";
import metallerie2 from "../../assets/metallerie/metallerie_2.jpeg";
import metallerie3 from "../../assets/metallerie/metallerie_3.jpeg";
import metallerie4 from "../../assets/metallerie/metallerie_4.jpeg";
import metallerie5 from "../../assets/metallerie/metallerie_5.jpeg";
import metallerie6 from "../../assets/metallerie/metallerie_6.jpeg";
import metallerie7 from "../../assets/metallerie/metallerie_7.jpeg";
import metallerie8 from "../../assets/metallerie/metallerie_8.jpg";
import metallerie9 from "../../assets/metallerie/metallerie_9.jpeg";
import metallerie10 from "../../assets/metallerie/metallerie_10.jpeg";
import metallerie11 from "../../assets/metallerie/metallerie_11.jpg";
import metallerie12 from "../../assets/metallerie/metallerie_12.jpg";
import Scroller from "../../components/scroller/Scroller";
import Contact from "../../components/contact/Contact";

export default function Metallerie () {

    const bannerDesktopImg = desktopBanner;
    const bannerTabImg = tabBanner;
    const bannerMobileImg = mobileBanner;
    const bannerTitle = "Nos services de métallerie";
    const bannerText = "Votre expert métallier";

    const article1title = "Nous donnons vie à vos projets";
    const article1text = "De la conception de meubles sur mesure à la fabrication d'éléments structuraux personnalisés, notre équipe excelle dans l'art de la métallerie. Chacune de nos créations est façonnée avec précision et créativité, en mêlant esthétique et fonctionnalité. Nos techniques de soudure, perçage, pliage et découpe nous permettent de répondre à la totalité de vos besoins, enrichissant vos espaces de vie intérieurs et extérieurs.";

    const prestationsImg = presationsCard;
    const prestationsTitle = "Prestations";
    const prestationsList = [
        "Ameublement intérieur sur mesure : Conception et réalisation de pièces uniques adaptées à votre espace.",
        "Fabrication et pose de verrières",
        "Fabrication de portillons extérieurs",
        "Conception de portails électriques pratiques et sécurisés",
        "Création de pièces décoratives qui ajoutent une touche unique à votre intérieur.",
        "Réalisation de gardes-corps sécurisés et personnalisés",
        "Conception d'escaliers sur mesure",
        "Projets personnalisés : Nous sommes à votre écoute pour réaliser tout autre projet selon vos désirs et spécifications.",
    ];

    const article2title = "Nos réalisations en images";
    const article2text = "";

    const scrollerImages = [
        { url: metallerie1, description: "Description" },
        { url: metallerie2, description: "Description" },
        { url: metallerie3, description: "Description" },
        { url: metallerie4, description: "Description" },
        { url: metallerie5, description: "Description" },
        { url: metallerie6, description: "Description" },
        { url: metallerie7, description: "Description" },
        { url: metallerie8, description: "Description" },
        { url: metallerie9, description: "Description" },
        { url: metallerie10, description: "Description" },
        { url: metallerie11, description: "Description" },
        { url: metallerie12, description: "Description" },

      ];


    return (
        <>
        <div className="metallerie__banner" >
            <Banner desktopImg={bannerDesktopImg} tabImg={bannerTabImg} mobileImg={bannerMobileImg} title={bannerTitle} text={bannerText}/>
        </div>
        <div className="metallerie__content" id="about">
            <Article title={article1title} text={article1text}/>
            <Prestations prestationsImage={prestationsImg} title={prestationsTitle} listItems={prestationsList}/>
            <Article title={article2title} text={article2text}/>
            <Scroller images={scrollerImages} />
            <Contact/>
            <Footer/>
        </div>
        </>
    )
}