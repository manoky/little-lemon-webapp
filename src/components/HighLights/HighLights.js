import greekSalad from '../../assets/images/greek salad.jpg'
import dessert from '../../assets/images/lemon dessert.jpg'
import bruchetta from '../../assets/images/bruchetta.svg'
import { Card } from '../Card/Card'
import './hightlist.css'

export const HighLights = () => {
  return (
    <article className="hightlight" id="menu">
      <section className="highlight-section-header">
        <h2>This weeks special!</h2>
        <button className="btn">Online Menu</button>
      </section>
      <div className="hightlight-menu-list">
        <Card
          image={greekSalad}
          title="Greek Salad"
          price={12.99}
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        />
        <Card
          image={bruchetta}
          title="Bruchetta"
          price={5.99}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <Card
          image={dessert}
          title="Lemon Dessert"
          price={5}
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </article>
  )
}
