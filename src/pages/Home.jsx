import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Luxury Yacht Rentals</h1>
          <p>Experience the ultimate luxury with our premium yacht collection. Sail away to paradise with unmatched comfort and style.</p>
          <div className="hero-buttons">
            <Link to="/fleet" className="btn-primary">Explore Yachts</Link>
            <Link to="/services" className="btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose LuxYacht?</h2>
            <p>We provide exceptional yacht rental experiences with unmatched service quality</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛥️</div>
              <h3>Premium Fleet</h3>
              <p>Our carefully curated collection of luxury yachts offers the finest vessels for your perfect getaway.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍✈️</div>
              <h3>Professional Crew</h3>
              <p>Experienced and certified crew members ensure your safety and provide exceptional hospitality service.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌊</div>
              <h3>Best Destinations</h3>
              <p>Explore breathtaking coastal destinations and hidden gems with our expertly planned routes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
