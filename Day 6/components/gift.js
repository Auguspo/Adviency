
function Gift({count}){

function manyGift(count){
    if( count === 0) return <h1>Escribe tu primer regalo</h1>
    else return <h1>Regalos : { count }</h1>

}
return(
    <div>
        { manyGift(count) }
    </div>
)
}

export default Gift