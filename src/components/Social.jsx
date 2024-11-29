import Link from "next/link"

// Icons

import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaMedium  } from "react-icons/fa6";

const Socials = [
  {
    icon: <SiGithub />,
    url: "https://github.com/sankaraxi",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/sankargnanasekar/",
  },
  {
    icon: <FaXTwitter />,
    url: "https://x.com/sankar_axi",
  },
  {
    icon: <FaMedium />,
    url: "https://medium.com/@sankar_gnanasekar",
  },
]

const Social = ({containerStyles , iconStyles}) => {
  return (
    
    <div className={containerStyles}>
      {Socials.map((social, index) => (
        <Link key={index} href={social.url} className={iconStyles}>
            {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social