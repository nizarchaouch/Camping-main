import "./CardDest.css";
import { Link } from "react-router-dom";


function CardDest(props) {
    let imageName=props.ima;
    let korbous=require(`../../Images/${imageName}`);
    return (
        <div class="col-sm-6 col-md-6 col-lg-3 " >
            <Link to="/acceuil" className="mx-4 ">
                <div className="card"  style={{backgroundImage: `url(${korbous})`}}>
                    <h5>{props.title}</h5>
                    <p>{props.subtitle}</p>
                </div>                
            </Link>
            {/* {im} */}
        </div>
    );
}

export default CardDest;