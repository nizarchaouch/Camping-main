import "./CardDest.css";
import { Link } from "react-router-dom";
import korbous from "../../Images/korbous/korbous.jpg";
import { Image } from "react-bootstrap";

function CardDest(props) {
    // const card1 =style.card1'
    // background: ${(props)=>props.color};
    // ';
    let im = props.ima
    return (
        <div class="col-sm-6 col-md-6 col-lg-3 " >
            <Link to="/acceuil" className="mx-4 ">
                <div className="card">
                <Image src={korbous}  className=" " fluid/>
                <img src={korbous} height="70px" width="70px" />
                    <h5>{props.title}</h5>
                    <p>{props.subtitle}</p>
                </div>
                
                
                
            </Link>
            {im}
        </div>
    );
}

export default CardDest;