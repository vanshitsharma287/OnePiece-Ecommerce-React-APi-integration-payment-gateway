import { Link } from "react-router";
import Header from "../../components/common/Header";
import BreadCrumb from "../../components/common/Breadcrumb";
import "../../css/About.css";

const About = () => (
    <section className="about-page">
        <Header />
        <BreadCrumb items={[{ label: "About", to: "/about", active: true }]} />

        <main className="about-content">
            <section className="about-intro">
                <p className="about-eyebrow">ABOUT ONEPIECE</p>
                <h2>A little more joy in every find.</h2>
                <p className="about-lead">
                    OnePiece is a shopping experience built around making it easy to
                    discover products, save the ones you love, and keep everything
                    you want in one place.
                </p>
                <Link className="about-shop-link" to="/">Explore the shop</Link>
            </section>

            <section className="about-highlights" aria-label="What you can do at OnePiece">
                <article className="about-highlight">
                    <span className="about-highlight-number">01</span>
                    <h3>Discover</h3>
                    <p>Browse a broad product catalogue and search for something specific.</p>
                </article>
                <article className="about-highlight">
                    <span className="about-highlight-number">02</span>
                    <h3>Make it yours</h3>
                    <p>Save favourites, adjust quantities, and choose your preferred currency.</p>
                </article>
                <article className="about-highlight">
                    <span className="about-highlight-number">03</span>
                    <h3>Check out</h3>
                    <p>Try the address and delivery flow and review your order summary.</p>
                </article>
            </section>

            <section className="about-contact" aria-labelledby="about-contact-title">
                <div>
                    <p className="about-eyebrow">GET IN TOUCH</p>
                    <h2 id="about-contact-title">Contact us</h2>
                    <p className="about-contact-intro">
                        Have a question about the shop? Reach out directly.
                    </p>
                </div>
                <div className="about-contact-details">
                    <p><span>Name</span><strong>Vanshit Sharma</strong></p>
                    <p>
                        <span>Email</span>
                        <a href="mailto:vanshitsharma287@gmail.com">vanshitsharma287@gmail.com</a>
                    </p>
                </div>
            </section>

            <p className="about-demo-note">
                OnePiece is a frontend demo. Product data comes from DummyJSON, and
                checkout does not process real payments or place real orders.
            </p>
        </main>
    </section>
);

export default About;
