import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";
import React, { useState } from "react";
import { sendContactForm } from "../../lib/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation before submitting the form
    let newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    // Add email validation logic (you can use a library like Yup for this)
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }
    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        // Form is valid, send data to the server using sendContactForm
        const response = await sendContactForm(formData);

        if (response.ok) {
          // Handle successful submission (e.g., show a success message)
          console.log("Form submitted successfully");
        } else {
          // Handle server error (e.g., show an error message)
          console.error("Error submitting the form");
        }
      } catch (error) {
        // Handle network error or other issues
        console.error("An unexpected error occurred", error);
      }
    }
  };

  return (
    <div className="h-full bg-primary/30 flex justify-center">
      <div className="container max-auto py-32 text-center xl:text-left flex items-center justify-center">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] contact-scroll">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8 max-md:mb-4"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name *"
                className={`input ${errors.name && "input-error"}`}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}
              <input
                type="text"
                placeholder="email *"
                className={`input ${errors.email && "input-error"}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
            <input
              type="text"
              placeholder="subject *"
              className={`input ${errors.subject && "input-error"}`}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <span className="text-red-500">{errors.subject}</span>
            )}
            <textarea
              placeholder="message *"
              className={`textarea ${errors.message && "textarea-error"}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
