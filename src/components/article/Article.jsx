

export default function Article ({ title, text }) {

    return (
        <section className="section__header">
            <article className="section__header-content">
                <div className="section__header-content-title">
                    <h1 className="section__header-content-title-h1">
                        {title}
                    </h1>
                    <div className="section__header-content-title-underline1"></div>
                    <div className="section__header-content-title-underline2"></div>
                </div>

                <p className="section__header-content-text">
                {text}
                </p>

            </article>

        </section>
    )
}