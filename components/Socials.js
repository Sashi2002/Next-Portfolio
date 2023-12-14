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
    link: "https://linkedin.com/in/your-username",
  },
  {
    platform: "Twitter",
    icon: <RiTwitterXLine />,
    link: "https://twitter.com/your-username",
  },
  {
    platform: "Instagram",
    icon: <RiInstagramLine />,
    link: "https://instagram.com/your-username",
  },
  {
    platform: "Thread",
    icon: <RiThreadsLine />,
    link: "",
  },
  {
    platform: "Facebook",
    icon: <RiFacebookBoxLine />,
    link: "https://facebook.com/your-username",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg ">
      {socialData.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className="hover:text-accent transition-all duration-300"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
