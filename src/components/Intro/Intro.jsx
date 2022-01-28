import "./intro.css"
import Portrait from "../../img/profile-pic.jpg"
import { Icon } from '@iconify/react';

import { useRef } from "react";
const Intro = () => {
    const aboutPart = useRef(null);

    const myFunc = () =>
        window.scrollTo({
            top: aboutPart.current.offsetTop + aboutPart.current.offsetHeight,
            behavior: "smooth"
        });

    return(
        <div id="i" ref={aboutPart}>
            <div className="i-content">
                <img className="i-profilePic" src={Portrait} alt="Derek Cox II"></img>
                <h1>Derek Cox II</h1>
                <h3>Software Engineer</h3>
                <div className="i-buttons">
                    <a href="https://github.com/dtcii424">
                        <Icon 
                            icon="akar-icons:github-fill" 
                            className="i-icon"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/derek-cox-ii-b45165174">
                        <Icon
                            icon="akar-icons:linkedin-fill" 
                            className="i-icon"
                        />
                    </a>
                    <a href="mailto: dtcii424@gmail.com">
                        <Icon 
                            icon="ic:baseline-email" 
                            className="i-icon" 
                        />
                     </a>
                     <br/>
                     <Icon 
                        icon="bi:arrow-down-circle-fill" 
                        className="i-scroll" 
                        inline={true} 
                        onClick={myFunc} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro