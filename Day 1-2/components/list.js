import "../css/styles.css"
import React from "react"

let gifts = ["Medias", "Gorras", "Tuki"]

function List(props) {
  
    return gifts.map((el) => <li>{el}</li>)

}

export default List
