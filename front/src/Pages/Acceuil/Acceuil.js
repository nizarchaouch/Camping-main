import "./Acceuil.css"
import Proposer from "../../Components/proposer/proposer";
import IciNous from "../../Components/IciNous/IcuNous";
import ServiceNous from "../../Components/ServiceNous/ServiceNous";
import Map from "../../Components/Map/Map";

function Acceuil() {
    return (
        <>
            <div className="header "></div>
            {/******************* * / A PROPOS NOTER SITE ***********************/}
            <Proposer title="A propos de notre site." subtitle="Les campeurs du monde entier sont les bienvenus."></Proposer>
            {/******************* * /ICI NOUS CAMPINER ***********************/}
            <IciNous></IciNous>

            <Proposer title="Nos Services" subtitle="campiner offer"></Proposer>
            <ServiceNous></ServiceNous>

            <Proposer title="Map De Centre De Camping" ></Proposer>          
            <Map></Map>  

            {/* <Footer></Footer> */}
        </>
    );
}

export default Acceuil;