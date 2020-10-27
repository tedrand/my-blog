import React from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const SocialIcons = ({social}) => {
    return (
        <div className="row icon-row mt-auto">
            <a href={`mailto: randtheodore@gmail.com`}
                target="_blank"
                rel="noreferrer">
                <FaEnvelope />
            </a>
            <a href={`https://www.linkedin.com/in/${social?.linkedIn || ``}`}
                target="_blank"
                rel="noreferrer">
                <FaLinkedin />
            </a>
            <a href={`https://github.com/tedrand`}
                target="_blank"
                rel="noreferrer">
                <FaGithub />
            </a>
        </div>
    )
}

export default SocialIcons