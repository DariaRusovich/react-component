function CardSubtitle(props) {
    if (props) {
        return(
            <h3 className="card-subtitle">{props.subtitle}</h3>
        )
    }
}
export default CardSubtitle