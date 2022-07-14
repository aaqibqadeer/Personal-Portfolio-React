import Image from "next/image";

export const Logo = () => {
  return (
    <div className="logo">
      <a href="#home">
        <Image
          src={"/img/logo/logo.png"}
          alt="Logo"
          width="110"
          height="20.33"
        />
      </a>
    </div>
  );
};
