import { Element } from "react-scroll";

const Banner = () => {
  return (
    <Element name="about">
      <div className="mt-20 px-3">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">About Me</h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            I’m a frontend developer based in <strong>Khmelnytskyi, Ukraine</strong>, with over <strong>3 years</strong> of hands-on experience building modern, scalable, and high-performance web applications. My core stack is centered around <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Nest.js</strong>.
          </p>

          <p>
            I specialize in creating efficient, reusable UI components, integrating third-party APIs, and automating business processes. My work focuses on improving performance, maintainability, and user experience through clean and structured code.
          </p>

          <p>
            I've contributed to projects ranging from enterprise applications to <strong>Web3 platforms</strong>, where I led frontend development for crypto-asset management systems, implemented multi-transaction logic, and optimized DeFi protocol automation.
          </p>

          <p>
            I’m passionate about continuous learning, responsive design, accessibility, and delivering products that make a measurable impact.
          </p>

          <p>
            Feel free to reach out via email at{" "}
            <a
              className="color-blue-500 text-primary hover:underline"
              href="mailto:vlasandrey878@gmail.com"
            >
              <strong>vlasandrey878@gmail.com</strong>
            </a>
            , or connect with me on{" "}
            <a
              className="color-blue-500 text-primary hover:underline"
              href="https://github.com/Andryxatt"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              className="color-blue-500 text-primary hover:underline"
              href="https://www.linkedin.com/in/andrii-vlasiuk-eng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            !
          </p>
          <div className="mt-8 flex justify-center">
            <a
             className="max-w-[200px] border border-white rounded-md px-6 py-2 mt-4 md:mt-0 hidden md:block cursor-pointer"
              href={`${import.meta.env.VITE_BASE_URL}Andrii_Vlasiuk_CV_2025.pdf`}
              download
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Banner;
