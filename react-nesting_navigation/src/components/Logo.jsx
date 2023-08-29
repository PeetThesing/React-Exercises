import Image from "../components/Image";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
}
