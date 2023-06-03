import { Link } from "react-router-dom";
import restauranfood from "../../assets/images/restauranfood.jpg";
import "./hero.css";

export const Hero = () => {
  return (
    <article className="hero">
      <div className="hero-inner">
        <section>
          <h1 className="hero-header">Little Lemon</h1>
          <span className="hero-city">Chicago</span>
          <p className="hero-subtitle">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="hero-btn btn" to="/booking" aria-label="On Click">
            Reserve a Table
          </Link>
        </section>
        <aside>
          <img src={restauranfood} alt="" className="hero-image" />
        </aside>
      </div>
    </article>
  );
};
