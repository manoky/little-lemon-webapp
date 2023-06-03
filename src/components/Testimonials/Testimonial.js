import { StarRating } from '../StarRating'
import './testimonial.css'

export const Testimonial = ({ name, rating, review, avatar }) => {
  return (
    <article className="testimonial" id="testimonials">
      <StarRating count={5} rated={rating} />
      <figure>
        <img src={avatar} alt="" />
        <figcaption>{name}</figcaption>
      </figure>
      <p>{review}</p>
    </article>
  )
}
