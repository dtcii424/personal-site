import "./about.css"
import Image from "../Image/Image"
import imageData from "../Image/imageData.jsx";



const About = () => {
    const  images = imageData.map(item => <Image key={item.id} src={item.src} text={item.text}/>);

    return(
        <div className="a">
            <h1 className="a-h1">About</h1>
            <div className="a-content">
                <div className="a-card1">
                    <h3 style={{fontSize: "32px"}}>Bio</h3>
                    <h5>Hey! I'm Derek, a software engineer currently working for the U.S. Department of Defense.
                        I graduated Magna Cum Laude with a BS in Computer Science from the University of Texas at San Antonio.
                        I love programming, working in teams, and competing in hackathons with my friends.
                        When I'm not working I enjoy tech, comicbooks, sports, sneakers, and spending time with family and friends.</h5>
                </div>
                <div className="a-card2">
                    <h3 style={{fontSize: "32px"}}>Programming, Frameworks & Software Tools</h3>
                    <div className="a-card-imgs">
                        {images}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About