import './about.css'
import MandA from '../../assets/images/MarioandAdrianA.jpg'

export const About = () => {
  return (
    <article className="about-us container" id="about">
      <section className="text-col">
        <h2>Little Lemon</h2>
        <span>Chicago</span>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </section>
      <aside className="images-col">
        <figure className="image-wrapper">
          <img src={MandA} alt="" />
        </figure>
      </aside>
    </article>
  )
}
