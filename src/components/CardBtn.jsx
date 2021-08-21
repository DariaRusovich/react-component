function CardBtn(props) {
    if (props) {
        return (
            <button className="card-btn">{props.btn}</button>
        )
    }
}
export default CardBtn