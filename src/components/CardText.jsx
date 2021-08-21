function CardText(props) {
    if (props) {
       return(
        <p className="card-text">{props.text}</p>
       )
    }
}
export default CardText