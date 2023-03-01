


function Card(props) {
    const item = props.item;
    return (
        <div>
            <img className="card-img-top imgShadow mb-0 pb-0" style={{ "height": "260px", "borderRadius": "7px" }} src={item.img} alt={item.title}></img>
            <div className=" d-flex justify-content-center align-items-center mt-0 pt-0" style={{ "flexDirection": "column" }}>
                <p className="fs-5 mb-0 mt-1">{item.title}</p>
                <p className="fs-5 mt-0">{item.place}</p>
            </div>
        </div>
    )
}


export default Card;