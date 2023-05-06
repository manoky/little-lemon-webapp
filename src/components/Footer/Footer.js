import './footer.css'

export const Footer = () => (
  <footer className="footer">
    <article className="container footer-inner">
      <section className="footer-section-item">
        <h2>Navigation</h2>
        <ul className="footer-section-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order">Order online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </section>
      <section className="footer-section-item">
        <h2>Contact</h2>
        <ul className="footer-section-list">
          <li>124 eat good ave, Chicago</li>
          <li>234556677</li>
          <li>info@littlelemon.com</li>
        </ul>
      </section>
      <section className="footer-section-item">
        <h2>Social Media Links</h2>
        <ul className="footer-section-list">
          <li>
            <a href="#twitter">Twitter</a>
          </li>
          <li>
            <a href="#facebook">Facebook</a>
          </li>
          <li>
            <a href="#instagram">Instagram</a>
          </li>
          <li>
            <a href="#tiktok">Tiktok</a>
          </li>
        </ul>
      </section>
    </article>
  </footer>
)
