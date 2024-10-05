import './Kartya.css'

function Kartya(props){
    //Kártya komponens jsx nyelvem íródott, appon belül használhatód
   
    return (
        <div className="kartya">
            <h3>Név: {props.obj.nev}</h3>
            <p>Kor: {props.obj.kor} ev</p>

        </div>

    )



}

export default Kartya