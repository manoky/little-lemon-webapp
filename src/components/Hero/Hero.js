import restauranfood from '../../assets/images/restauranfood.jpg'
import './hero.css'

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
          <button className="hero-btn btn">Reserve a Table</button>
        </section>
        <aside>
          <img src={restauranfood} alt="" className="hero-image" />
        </aside>
      </div>
    </article>
  )
}
