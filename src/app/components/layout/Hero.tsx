import Image from "next/image";
import heroImg from "../../../../public/hero.jpg";
import { useTypedSuperpower } from "@/hooks/useTypedSuperPower";

export default function Hero() {
  const superpowers = [
    "Frontend Developer",
    "Web Designer",
    "React Developer",
    "Web Scientist",
  ];
  const { typedSuperpower } = useTypedSuperpower(superpowers);
  return (
    <section>
      <div className="relative w-full h-[800px] ">
        <Image
          src={heroImg}
          alt="bg image of a computer"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="mb-7 font-sans text-4xl text-tertiary">Hello,</p>
          <h1 className="mb-7 font-serif text-[64px] font-bold text-tertiary">
            I am Giorgio Cignitti
          </h1>
          <h2 className="font-sans text-4xl text-tertiary">
            <span className="blinking-cursor">{typedSuperpower}</span>
          </h2>
          <p className="mb-7 font-sans text-xl font-bold text-tertiary leading-[35px] tracking-wide">
            I can convert your design in maintanable, clean and scalable code,
            building-up full-responsive websites
          </p>
        </div>
      </div>
    </section>
  );
}
