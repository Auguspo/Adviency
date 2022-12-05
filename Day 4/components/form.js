import "../css/styles.css"
import { useState } from "react"

function FormRegalos() {
  const [gift, setGift] = useState("")
  const [giftsList, setGiftsList] = useState(["Medias", "Gorras", "Tuki"])

  const handleChange = (e) => {
    setGift(e.target.value)
  }

  const handleSubmit = (e) => {
    setGiftsList([...giftsList, gift])
    setGift("")
    console.log(giftsList)
    e.preventDefault()
  }

  function handleRemove(gift) {
    const newList = giftsList.filter((el) => el !== gift)
    setGiftsList(newList)
    console.log(newList)
  }

  return (
    <div className="question"> 
      <form onSubmit={handleSubmit}>
        <div >
          <input
            type="text"
            name="gift"
            placeholder="Que regalo queres?"
            value={gift}
            onChange={handleChange}
          />
          <button type="submit">Agregar</button>
        </div>
        <ul>
          {giftsList.map((gift, index) => (
            <div className="list">
              <li key={index}> 🎄 {gift}  </li>
              <button type="button" onClick={() => handleRemove(gift)}>
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
      </form>
    </div>
  )
}

export default FormRegalos
