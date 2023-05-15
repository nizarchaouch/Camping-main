import "./Destination.css";
import CardDest from "../../Components/CardDest/CardDest";
import Proposer from "../../Components/proposer/proposer";
import korbous from "../../Images/korbous/korbous.jpg";

function Destination() {

    

    const Destination = [
        {
            id: "d1",
            title: "Korbous",
            subtitle: "Tunisie,Nabeul",
            image:"../../../public/camping-tent.png",
        },
        {
            id: "d2",
            title: "Oued Zitoun",
            subtitle: "Tunisie,Bizerte",
            image:"../../../public/camping-tent.png",
            // image:
        },
        {
            id: "d3",
            title: "Djebel Ressas",
            subtitle: "Tunisie,Ben Arous,Nabeul",
            image:"../../../public/camping-tent.png",
            // image:,
        }, {
            id: "d4",
            title: "Oued Zen",
            subtitle: "Tunisie,Jendouba",
            image:"../../../public/camping-tent.png",
            // image:,
        }
    ]

    const listDest= Destination.map((item)=><CardDest ima={item.image} id={item.id} title={item.title} subtitle={item.subtitle} />);

    return (
        
        <div className="containerr">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p id="tn"><Proposer title="La Tunisie" ></Proposer></p>
                        <p id="dest"><Proposer subtitle="Destinatin De Camping" ></Proposer></p>
                    </div>
                </div>
            </div>
            <div className="row">
                {listDest}
                {/* <CardDest  title="Korbes" subTitle="Tunisie" ></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest>
                <CardDest title="Korbes" subTitle="Tunisie"></CardDest> */}
               
                
            </div>
            
        </div>
    );
}

export default Destination;