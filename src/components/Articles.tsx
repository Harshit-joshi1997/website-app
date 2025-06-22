import Article1 from '../assets/Article1.jpg'
import Article2 from "../assets/Article2.jpg";
import Article3 from "../assets/Article3.jpg";
import Article4 from "../assets/Article4.jpg";
import "../components/style.css"


const Articles = () => {
  return (
<div className="row">
  <div className="col">
    <div className="card" style={{ width: "19rem", padding:"15px",marginLeft:"2px" }}>
      <img src={Article4} className="card-img-top"style={{height:"50vh"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">Smoking in Teenagers</h5>
        <p className="card-text" style={{fontSize:"15px"}}>
          Smoking causes significant health effects in teens, including lung damage, reduced physical fitness, and the potential to develop severe nicotine addiction. Keeping an open dialogue with teens can help. 
        </p>
        <a href="#" className="btn btn-primary">Read full Article</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{ width: "19rem", padding:"15px" ,marginBottom:"10px",marginLeft:"5px",height:"98vh"}}>
      <img src={Article1} className="card-img-top" style={{height:"60vh"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">Financial Management </h5>
        <p className="card-text" style={{fontSize:"15px"}}>
          Financial management is crucial for individuals and businesses because it helps with financial planning, budgeting, managing risks, and ensuring compliance with regulations. It enables informed decision-making, helps maximize 
        </p>
        <a href="#" className="btn btn-primary">Read full Article</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{ width: "19rem", padding:"15px",marginLeft:"5px"}}>
      <img src={Article2} className="card-img-top2" style={{height:"29vh"}} alt="..." />
      <div className="card-body"style={{ width: "20rem", padding:"15px" ,marginBottom:"10px",marginLeft:"5px",height:"62vh"}}>
        <h5 className="card-title" style={{marginLeft:"-11px"}}>Change in music industry</h5>
        <span><p className="card-text" style={{display:"flex",alignContent:"start",justifyContent:"center",marginBottom:"10px",fontSize:"15px",marginLeft:"-11px"}}>
          The music industry has undergone a significant transformation in recent years, primarily driven by technological advancements and changing consumer behavior.Studios are now affortable.
        </p></span>
        <a href="#" className="btn btn-primary">Read full Article</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{ width: "19rem", padding:"15px" ,marginBottom:"10px",marginLeft:"5px",height:"97vh"}}>
      <img src={Article3} className="card-img-top3" style={{height:"50vh"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">Live life on you terms</h5>
        <p className="card-text" style={{fontSize:"15px"}}>
          Living life on your own terms means making decisions and living in a way that aligns with your own values, desires, and goals, rather than conforming to societal expectations or the deman
        </p>
        <a href="#" className="btn btn-primary">Read full Article</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Articles;