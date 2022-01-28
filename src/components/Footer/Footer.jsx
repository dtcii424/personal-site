import "./footer.css"
import { Icon } from '@iconify/react';

const Footer = () => {

    return(
        <div className="f">   
            <h3 className="f-h3">© Derek Cox II 2022</h3>
            <a href="https://github.com/dtcii424">
                <Icon 
                    icon="akar-icons:github-fill" 
                    className="f-button"
                />
            </a>
            <a href="https://www.linkedin.com/in/derek-cox-ii-b45165174">
                <Icon
                    icon="akar-icons:linkedin-fill" 
                    className="f-button"
                />
            </a>
            <a href="mailto: dtcii424@gmail.com">
                <Icon 
                    icon="ic:baseline-email" 
                    className="f-button"
                />
            </a>
        </div>
    )
}

export default Footer