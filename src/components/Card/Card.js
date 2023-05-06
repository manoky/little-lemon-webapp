import './card.css'

export const Card = ({ image, title, price, description }) => {
  return (
    <article className="menu-card">
      <img src={image} alt="" />
      <section className="menu-description">
        <h2>
          <span>{title}</span> <span>${price}</span>
        </h2>
        <p>{description}</p>
        <p className="order-highlight">Order a delivery</p>
      </section>
    </article>
  )
}
