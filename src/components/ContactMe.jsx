import { Element } from "react-scroll";
import Modal from "./ui/Modal";
import { useState } from "react";
const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Очистка ошибок при вводе
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      message: "",
    };

    // Проверка email
    if (!formData.email) {
      newErrors.email = "Email required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

    // Проверка message
    if (!formData.message) {
      newErrors.message = "Message required.";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Message submitted:", formData);
      // Очистка формы
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }
  };
  return (
    <Element name='contact'>
      <div className="flex flex-col  md:flex-row justify-between align-middle mt-24 mb-24 relative p-5">
        <h2 className="text-4xl font-bold w-full md:w-[70%]">Contact me for the tasks you need to be done in a short time</h2>
        <button onClick={() => setIsOpen(true)} className="bg-primary hover:opacity-70 text-white py-2 px-4 w-[250px] h-[50px] rounded-md font-bold justify-self-end self-center">Contact Me</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title" children={<div className="text-black">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* Поле имени */}
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>

            {/* Поле email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Поле message */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                rows={4}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className="bg-primary hover:opacity-70 text-white py-2 px-4 rounded-md font-bold self-end"
            >
              Submit
            </button>
          </form>
        </div>} />
      </div>
    </Element>
  )
}

export default ContactMe