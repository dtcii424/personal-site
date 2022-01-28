import "./image.css"

const Image = (props) => {
    return(
        <div className="imageContainer">
            <img 
                className="image"
                src={props.src}
                alt={props.text}>
            </img>
            <h5 style={{fontSize: "18px"}}>
                {props.text}
            </h5>
        </div>
    )
}

export default Image