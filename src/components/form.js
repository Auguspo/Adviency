import "../css/button.css"
import "../css/styles.css"
import { useState } from "react"
import Gift from "./gift"

function FormRegalos() {
  const [gift, setGift] = useState("")
  const [quantity, setQuantity] = useState("1");
  const [giftsList, setGiftsList] = useState([{name:"asd",
cant: 1},])

  const handleChange = (e) => {
     setGift(e.target.value)
   
  }

  const handleSubmit = (e) => {
    const rep = giftsList.filter((el) => el.name !== gift.name )

    setGiftsList([...rep, {name:gift, cant:quantity}])
    setGift("") //Borrar input
    
    console.log(giftsList)
    e.preventDefault()
   

    // https://github.com/JoelTokatli/adviency/blob/main/dia-8-adviency/src/Components/GiftsCard.jsx
    
  }

  function handleRemove(gift) {
    const newList = giftsList.filter((el) => el.name !== gift).length <giftsList
    setGiftsList(newList)
    console.log(newList)
  }

  function handleRemoveTotal() {
    
    if(window.confirm("Seguro que quieres borrar todos los regalos?")){setGiftsList([])}

  }

  return (
    <div className="question"> 

  <Gift count={ giftsList.length } />
      <form onSubmit={handleSubmit}>
        <div className="inputerino">
          <input className="input1"
            type="text"
            name="gift"
            placeholder="Que regalo queres?"
            value={gift.name}
            onChange={handleChange}
          />
          <input className="input2"
          type="number"
          id="number"
          required="required"
          min={1}
          max={10}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
          <button  className="button" type="submit">Agregar</button> 
        </div>
        <ul>
          {giftsList.map((gift, index) => (
            <div className="list">
              <li key={index}> 🎄 {gift.name} x{gift.cant}</li>
              
              <button className="button" type="button" onClick={() => handleRemove(gift.name)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </ul>

<div className="borrartodo">
        <button className="borrartodo button" type="button" onClick={() => handleRemoveTotal()}>
    No quiero regalos!
  </button> </div>
      </form>
      
      </div>
   
  )
}

export default FormRegalos
