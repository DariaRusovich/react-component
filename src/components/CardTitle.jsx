function CardTitle(props) {
    console.log(props);
    if(props){
    return(
        <>
       <h2>{props.title}</h2>
        </>
    )
    }
}

export default CardTitle