import { Testimonial } from './Testimonial'
import tonia from '../../assets/images/tm.jpeg'
import james from '../../assets/images/jas2.jpeg'
import mary from '../../assets/images/maj.jpeg'
import paul from '../../assets/images/ps.jpeg'
import './testimonials.css'

const testimonials = [
  {
    name: 'James Smith',
    rating: 5,
    review: 'The meal was awesome, the people are warm and welcoming',
    avatar: james,
  },
  {
    name: 'Mary Jean',
    rating: 5,
    review:
      'The best place to look when you have limited time to reverse a place for family dinner',
    avatar: mary,
  },
  {
    name: 'Paul Jones',
    rating: 4,
    review: 'The ordering process was straight forward, very user friendly',
    avatar: paul,
  },

  {
    name: 'Tonia Miller',
    rating: 5,
    review: 'Quality food nothing beats that, on top of beautiful warm people',
    avatar: tonia,
  },
]

export const Testimonials = () => {
  return (
    <article className="testimonials">
      <section className="container testimonials-inner ">
        <h2>Testimonials</h2>
        <div className="testimonial-list">
          {testimonials.map((item) => (
            <Testimonial
              review={item.review}
              rating={item.rating}
              name={item.name}
              avatar={item.avatar}
            />
          ))}
        </div>
      </section>
    </article>
  )
}
