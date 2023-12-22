import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiThreadsLine,
} from "react-icons/ri";

const socialData = [
  {
    platform: "GitHub",
    icon: <RiGithubLine />,
    link: "https://github.com/sashi2002",
  },
  {
    platform: "LinkedIn",
    icon: <RiLinkedinBoxLine />,
    link: "https://www.linkedin.com/in/sashikanta-mohanty",
  },
  {
    platform: "Twitter",
    icon: <RiTwitterXLine />,
    link: "https://twitter.com/Sashikantmohan4",
  },
  {
    platform: "Instagram",
    icon: <RiInstagramLine />,
    link: "https://www.instagram.com/sashikant.mohanty/",
  },
  {
    platform: "Thread",
    icon: <RiThreadsLine />,
    link: "https://www.threads.net/@sashikant.mohanty",
  },
  {
    platform: "Facebook",
    icon: <RiFacebookBoxLine />,
    link: "https://www.facebook.com/sashikant.mohanty.75",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl ">
      {socialData.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
