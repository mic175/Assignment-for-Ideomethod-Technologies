import { Link } from "react-router-dom";
import { YACHTS } from "../data/yachts";

export default function Fleet() {
  return (
    <section id="yachts" className="yacht-gallery">
      <div className="container">
        <div className="section-title">
          <h2>Our Yacht Collection</h2>
          <p>Choose from our exclusive selection of luxury yachts</p>
        </div>

        <div className="gallery-grid">
          {YACHTS.map(y => (
            <div className="yacht-card" key={y.id}>
              <div className="yacht-image" aria-hidden>{y.icon}</div>
              <div className="yacht-info">
                <h3>{y.name}</h3>
                <p>{y.desc}</p>
                <div className="yacht-specs">
                  <span>{y.guests} Guests</span>
                  <span>{y.bedrooms} Bedrooms</span>
                  <span>{y.ft}ft</span>
                </div>
                <div className="price">${y.price}/day</div>
                <div style={{display:"flex", gap:12}}>
                  <Link to={`/yacht/${y.id}`} className="btn-primary">View</Link>
                  <Link to="/contact" className="btn-secondary" style={{borderColor:"#2c5aa0", color:"#2c5aa0"}}>Book</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
