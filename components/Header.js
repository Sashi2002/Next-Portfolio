import Image from "next/legacy/image";
import Link from "next/link";

//components
import Socials from "../components/Socials";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-8 xl:h-[98px]">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center py-4">
          {/* logo */}
          <Link href={"/"}>
            <div className="w-[320px] h-[100px] max-sm:w-[300px] relative md:right-28 lg:right-44 brightness-200">
              <Image
                src={"/logo.png"}
                width={220}
                height={148}
                layout="fill"
                objectFit="cover"
                alt=""
                priority={true}
              />
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
