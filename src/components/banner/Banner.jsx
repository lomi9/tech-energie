import { MoveDown } from 'lucide-react';


export default function Banner ({ desktopImg, tabImg, mobileImg, title, text }) {

    return (
        <div className="banner">
            <div className="banner__top">
            <img 
                    src={desktopImg} 
                    srcSet={`${mobileImg} 500w, ${tabImg} 800w, ${desktopImg} 1200w`}
                    sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, 1200px"
                    alt="Métallier faisant des étincelles" 
                    className="banner__top-img"
                />
                <div className="banner__top-filter">
                    <div className="banner__top-filter-content">
                        <h1 className="banner__top-filter-content-title">{title}</h1>
                        <p className="banner__top-filter-content-text">{text}</p>
                    </div>
                    <a href="#about" className="banner__top-filter-scroll">
                        <span href="#about" className="banner__top-filter-scroll-icon icon-bounce"><MoveDown/></span>
                    </a>

                </div>
            </div>
        </div>
    )
}