import "../css/styles.css"
import  {useState} from "react"

let gifts = ["Medias", "Gorras", "Tuki"]



function FormRegalos() {
    const [gift, setGift] = useState('');
    const [giftsList, setGiftsList] = useState([]);

    const handleChange = (e) => {
        setGift(e.target.value);
    }

    const handleSubmit = (e) => {
        setGiftsList([...giftsList, gift])
        setGift('');
        console.log(setGift);
        e.preventDefault();
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div >
                <input type="text" name="gift" placeholder="Que regalo queres?" value={gift} onChange={handleChange}  />
                <button type="submit" >Agregar</button>
            </div>
            <ul >
                {gifts.map(el=><li> 🎄 {el}</li>)}
                {giftsList.map( (gift, index) =>  (
                    <li key={index}> 🎄 {gift} </li>
                ))}
            </ul>
        </form>
    </div>
    )
}

export default FormRegalos


