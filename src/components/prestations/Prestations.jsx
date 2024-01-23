

export default function Prestations ({ prestationsImage, title, listItems }) {
    
    return (
        <section className="plomberie__services">

            <div className="plomberie__services-left">
                <div className="plomberie__services-left-image">
                    <img src={prestationsImage} alt="Plomberie" className="plomberie__services-left-image-img"/>
                </div>
                <div className="plomberie__services-left-image-filter"></div>
            </div>

            <article className="plomberie__services-right">
                <div className="plomberie__services-right-title">
                    <h2 className="plomberie__services-right-title-h1">
                    {title}
                    </h2>
                </div>
                <div className="plomberie__services-right-yellow">
                    <ul className="plomberie__services-right-yellow-list">
                    {listItems && listItems.map((item, index) => (
                            <li key={index} className="plomberie__services-right-yellow-list-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </article>


        </section>
    )
}