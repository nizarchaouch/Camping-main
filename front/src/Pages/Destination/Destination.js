import "./Destination.css";
import CardDest from "../../Components/CardDest/CardDest";
import Proposer from "../../Components/proposer/proposer";

function Destination() {

    

    const Destination = [
        {
            id: "d1",
            title: "Korbous",
            subtitle: "Tunisie,Nabeul",
            image:"korbous/korbous.jpg",
        },
        {
            id: "d2",
            title: "Oued Zitoun",
            subtitle: "Tunisie,Bizerte",
            image:"ouedZen/ouedzen.jpg"
        },
        {
            id: "d3",
            title: "Djebel Ressas",
            subtitle: "Tunisie,Ben Arous,Nabeul",
            image:"djabelRassas/djabelrassas.jpg"
        }, {
            id: "d4",
            title: "Oued Zen",
            subtitle: "Tunisie,Jendouba",
            image:"ouedZen/ouedzen.jpg"
        }
    ]

    const listDest= Destination.map((item)=><CardDest ima={item.image} id={item.id} title={item.title} subtitle={item.subtitle} />);

    return (
        
        <div className="containerr">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p id="tn"><Proposer title="La Tunisie" ></Proposer></p>
                        <p ><Proposer subtitle="Destinatin De Camping" ></Proposer></p>
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