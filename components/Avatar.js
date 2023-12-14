import Image from "next/image";
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar1.png"}
        width={530}
        height={600}
        alt=""
        className="translate-z-0"
      />
    </div>
  );
};

export default Avatar;
