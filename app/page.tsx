import Image from "next/image";

export default function Home() {
  return (
    <div id="navbar" className="py-10 px-20 hidden sm:flex text-white bg-black justify-around items-center">
      <p>Home</p>
      <p>About</p>
      <p>Projects</p>
      <p>Contact Us</p>
      <p>Testimonials</p>
    </div>
  );
}
