import "./AboutPage.css";

function AboutPage() {
    return (
        <div className="home-page">
            <main className="main-content">
                <h2>About the devs</h2>
                <article className="about-card">
                    <h3>Alexande Tomolillo</h3>
                    <section className="about-meal">
                        <div className="col">
                            <img
                                src="https://familystylefood.com/wp-content/uploads/2021/12/Coq-Au-Vin-hero-macro-500x500.jpg"
                                width={64}
                                alt=""
                            />
                            <div>
                                <h4>Favorite meal</h4>
                                <p>Coq au vin</p>
                                <p>A chicken braised in red wine, lardons and mushrooms</p>
                            </div>
                        </div>
                        <h4>Favorite dessert</h4>
                        <div className="col">
                            <img
                                src="https://img.cuisineaz.com/660x660/2014/08/07/i31454-photo-de-creme-brulee.jpeg"
                                width={64}
                                alt=""
                            />
                            <div>
                                <p>A custard dessert with hard caramel top</p>
                                <p>Crème brûlée</p>
                            </div>
                        </div>
                    </section>
                </article>
                <article className="about-card">
                    <h3>Lo&iuml;c Tramis</h3>
                    <section className="about-meal">
                        <h4>Favorite meal</h4>
                        <img
                            src="https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/1039/tartiflette-recette-AdobeStock_224565159.jpeg"
                            width={64}
                            alt=""
                        />
                        <div>
                            <p>A Savoyard gratin with potatoes, Reblochon cheese, cream and pork</p>
                            <p>Tartiflette</p>
                        </div>
                    </section>
                    <section className="about-meal">
                        <h4>Favorite dessert</h4>
                        <img
                            src="https://www.cookandrecord.com/wp-content/uploads/2020/08/recette-fraisier-cook-and-record-4-scaled.jpg"
                            width={64}
                            alt=""
                        />
                        <div>
                            <p>A cake made of an almond sponge cake, meringue, pastry cream, and strawberries</p>
                            <p>Fraisier</p>
                        </div>
                    </section>
                </article>
            </main>
        </div>
    );
}

export default AboutPage;
