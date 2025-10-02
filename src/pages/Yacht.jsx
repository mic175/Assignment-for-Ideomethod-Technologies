import { useParams, Link } from "react-router-dom";
import { YACHTS } from "../data/yachts";

export default function Yacht() {
  const { id } = useParams();
  const y = YACHTS.find(x => x.id === id);
  if (!y) return <div className="container"><p>Yacht not found.</p></div>;

  return (
    <section className="yacht-gallery">
      <div className="container">
        <div className="yacht-card" style={{maxWidth:900, margin:"0 auto"}}>
          <div className="yacht-image" aria-hidden>{y.icon}</div>
          <div className="yacht-info">
            <h2 style={{marginBottom:8}}>{y.name}</h2>
            <p>{y.desc}</p>
            <div className="yacht-specs" style={{marginTop:12}}>
              <span>{y.guests} Guests</span>
              <span>{y.bedrooms} Bedrooms</span>
              <span>{y.ft}ft</span>
            </div>
            <div className="price">${y.price}/day</div>
            <div style={{display:"flex", gap:12}}>
              <Link to="/contact" className="btn-primary">Reserve</Link>
              <Link to="/fleet" className="btn-secondary" style={{borderColor:"#2c5aa0", color:"#2c5aa0"}}>Back to Fleet</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
