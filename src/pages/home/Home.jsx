import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import bannerMetallerieDesktop from "../../assets/content/banner-metal-large.webp";
import bannerMetallerieTab from "../../assets/content/banner-metal-medium.webp";
import bannerMetallerieMobile from "../../assets/content/banner-metal-small.webp";
import bannerPlomberieDesktop from "../../assets/content/banner-bain-or-large.webp";
import bannerPlomberieTab from "../../assets/content/banner-bain-or-medium.webp";
import bannerPlomberieMobile from "../../assets/content/banner-bain-or-small.webp";
import logo from "../../assets/logo-mtech-energie-transparent.png";


export default function Home () {

    const navigate = useNavigate();

    const goToMetallerie = (event) => {
        event.preventDefault();

        const tl1 = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            onComplete: () => navigate('/metallerie') 
        });

        tl1.to(".home__content-circle", {
            duration: 0.5,
            rotationY: 180,
            autoAlpha: 0
        });

        tl1.to(".home__content-left", {
            duration: 1.5,
            width: "100%",
            immediateRender: false
        }, "-=0.25");

        tl1.to(".home__content-right", {
            duration: 1.5,
            width: "0%"
        }, "-=1.5");

        tl1.to(".home__content-right-image-filter-button-title", {
            duration: 1.5,
            autoAlpha: 0
        }, "-=1.5");
    };

    const goToPlomberie = (event) => {

        event.preventDefault();

        const tl2 = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            onComplete: () => navigate('/plomberie') 
        });

        tl2.to(".home__content-circle", {
            duration: 0.5,
            rotationY: 180,
            autoAlpha: 0
        });

        tl2.to(".home__content-right", {
            duration: 1.5,
            width: "100%",
            immediateRender: false
        }, "-=0.25");

        tl2.to(".home__content-left", {
            duration: 1.5,
            width: "0%"
        }, "-=1.5");

        tl2.to(".home__content-left-image-filter-button-title", {
            duration: 1.5,
            autoAlpha: 0
        }, "-=1.5");
    };


    return (
        <section className="home">
            <div className="home__content">
            <article className="home__content-left">
                <img 
                src={bannerMetallerieDesktop} 
                srcSet={`${bannerMetallerieMobile} 500w, ${bannerMetallerieTab} 800w, ${bannerMetallerieDesktop} 1200w`}
                sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, 1200px"
                alt="Métallier faisant des étincelles"
                className="home__content-left-image"/>
                <div className="home__content-left-image-filter">
                    <div className="home__content-left-image-filter-button">
                    <Link to="/metallerie" onClick={goToMetallerie} className="home__content-left-image-filter-button-title">
                        Métallerie
                    </Link>
                    </div>
                </div>

            </article>
            <article className="home__content-right">
            <img 
            src={bannerPlomberieDesktop} 
            srcSet={`${bannerPlomberieMobile} 500w, ${bannerPlomberieTab} 800w, ${bannerPlomberieDesktop} 1200w`}
            sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, 1200px"
            alt="Tuyaux de plomberie"
            className="home__content-right-image"></img>
                <div className="home__content-right-image-filter">
                <div className="home__content-right-image-filter-button">
                    <Link to="/plomberie"  onClick={goToPlomberie} className="home__content-right-image-filter-button-title">
                        Plomberie
                    </Link>
                    </div>
                </div>
            </article>
            <div className="home__content-circle">
                <img src={logo} alt="logo M-Tech ENERGIE" className="home__content-circle-logo"/>

            </div>
            </div>
        </section>
    )
}