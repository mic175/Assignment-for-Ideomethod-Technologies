export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive yacht rental services for the perfect maritime experience</p>
        </div>

        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">🍽️</div>
            <h3>Catering</h3>
            <p>Gourmet dining experiences prepared by professional chefs</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🎣</div>
            <h3>Water Sports</h3>
            <p>Complete equipment for fishing, diving, and water activities</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🗺️</div>
            <h3>Route Planning</h3>
            <p>Custom itineraries to explore the most beautiful destinations</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🛠️</div>
            <h3>Maintenance</h3>
            <p>24/7 technical support and maintenance for worry-free sailing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
