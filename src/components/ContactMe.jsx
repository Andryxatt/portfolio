import { Element } from "react-scroll";
import Modal from "./ui/Modal";
import { useState } from "react";
import { FaTelegramPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", message: "" };

    if (!formData.email) {
      newErrors.email = "Email required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsOpen(false);
        })
        .catch((error) => {
          console.error("Email error:", error);
          alert("Failed to send message. Please try again later.");
        });
    }
  };

  return (
    <Element name="contact">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-24 mb-24 p-5 relative">
        {/* Текст і кнопка */}
        <div className="flex flex-col gap-4 w-full md:w-[70%]">
          <h2 className="text-4xl font-bold leading-tight">
            Contact me for the tasks you need to be done in a short time.
          </h2>
          <p className="text-gray-400 text-base">
            I’m always open to discussing new projects or opportunities.
            Feel free to reach out through any of the following:
          </p>

          {/* Соціальні посилання */}
          <div className="flex gap-5 mt-2">
            <a
              href="https://web.telegram.org/k/#@Andryxatt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition duration-300"
            >
              <FaTelegramPlane size={22} /> Telegram
            </a>
            <a
              href="https://www.linkedin.com/in/andrii-vlasiuk-eng/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition duration-300"
            >
              <FaLinkedin size={22} /> LinkedIn
            </a>
            <a
              href="https://github.com/Andryxatt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition duration-300"
            >
              <FaGithub size={22} /> GitHub
            </a>
          </div>
        </div>

        {/* Кнопка “Contact Me” */}
        <button
          onClick={() => setIsOpen(true)}
          className="max-w-[200px] border border-white rounded-md px-6 py-2 mt-4 md:mt-0 hidden md:block cursor-pointer"
        >
          Contact Me
        </button>

        {/* Модалка з формою */}
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Send a Message"
        >
          <div className="text-black">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label className="block text-sm font-medium mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
              />

              <label className="block text-sm font-medium mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-2">{errors.email}</p>
              )}

              <label className="block text-sm font-medium mb-2">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mb-4">{errors.message}</p>
              )}

              <button
                type="submit"
                className="bg-primary hover:opacity-80 text-white py-2 px-4 rounded-md font-bold cursor-pointer self-start"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </Element>
  );
};

export default ContactMe;
