import { Element } from "react-scroll";
const Banner = () => {
  return (
    <Element name="about">
      <div className="mt-20 px-3">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">About Me</h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            I’m a developer based in <strong>Khmelnytskyi, Ukraine</strong>, with over <strong>3 years</strong> of hands-on experience building scalable and high-performance web applications. I specialize in integrating third-party APIs and enhancing business process automation. My core stack includes <strong>React</strong>, <strong>Nest.js</strong>, and <strong>.NET</strong>.
          </p>

          <p>
            I've worked on diverse projects ranging from enterprise platforms to <strong>Web3 solutions</strong>, where I led the frontend development of crypto-asset platforms and implemented advanced transaction logic. I’m passionate about improving UI/UX, ensuring responsive and accessible design, and staying updated with the latest tech trends.
          </p>

          <p>
            Beyond coding, I’ve automated processes in <strong>DeFi protocols</strong>, optimized website performance, and contributed to significant user experience improvements in every project I've touched.
          </p>

          <p>
            Feel free to reach out via email at <a className="color-blue-500 text-primary hover:underline" href="mailto:vlasandrey878@gmail.com"><strong>vlasandrey878@gmail.com</strong></a>, or connect with me on <a className="color-blue-500 text-primary hover:underline" href="https://github.com/Andryxatt" target="blank">GitHub</a> and <a className="color-blue-500 text-primary hover:underline" target="blanc" href="https://www.linkedin.com/in/andrii-vlasiuk-eng/">LinkedIn</a>!
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Banner;
