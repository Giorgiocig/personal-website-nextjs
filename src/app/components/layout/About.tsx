import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import heroImg from "../../../../public/hero.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-40">
      <div className="flex justify-between ">
        <div className=" md:w-1/5">
          <Image
            src={heroImg}
            alt="image about Giorgio Cignitti"
            className="h-auto object-cover rounded-md"
          />
        </div>

        <div className="md:w-3/4">
          <h2 className="font-serif text-5xl font-bold mb-6">About Me</h2>

          <p className="font-sans text-xl leading-[1.4] mb-10">
            I am Giorgio Cignitti, web developer with a background in life
            science and a passion for web development and coding. I hold a
            doctorate degree in neuroscience from Montpellier University and I
            have 8 years of experience as Python developer and 5 years as web
            developer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-3xl text-indigo-600"
                />
                <p className="font-serif text-3xl font-bold text-indigo-600">
                  Name:
                </p>
              </div>
              <p className="font-sans text-lg">Giorgio Cignitti</p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-3xl text-indigo-600"
                />
                <p className="font-serif text-3xl font-bold text-indigo-600">
                  Phone:
                </p>
              </div>
              <p className="font-sans text-lg">+33 0767909776</p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-3xl text-indigo-600"
                />
                <p className="font-serif text-3xl font-bold text-indigo-600">
                  Mail:
                </p>
              </div>
              <p className="font-sans text-lg">giorgiocignitti@gmail.com</p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#contactMe"
              className="inline-block bg-indigo-600 text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
