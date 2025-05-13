import { Element } from "react-scroll";
import Modal from "./ui/Modal";
import { useState } from "react";
import emailjs from 'emailjs-com'; // 👈 додано

const ContactMe = () => {
  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const user = import.meta.env.VITE_EMAILJS_USER_ID;
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
      console.log("Form data:", formData);
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ← обов’язково
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
    <Element name='contact'>
      <div className="flex flex-col md:flex-row justify-between align-middle mt-24 mb-24 relative p-5">
        <h2 className="text-4xl font-bold w-full md:w-[70%]">Contact me for the tasks you need to be done in a short time.</h2>
        <button onClick={() => setIsOpen(true)} className="text-center bg-primary hover:opacity-70 text-white py-2 px-4 w-[250px] rounded-md font-bold cursor-pointer">Contact Me</button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Send a Message"
          children={
            <div className="text-black">
              <form className="flex flex-col" onSubmit={handleSubmit}>
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
                <button
                  type="submit"
                  className="text-center bg-primary hover:opacity-70 text-white py-2 px-4 max-w-[200px] rounded-md font-bold cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          }
        />
      </div>
    </Element>
  );
};

export default ContactMe;
