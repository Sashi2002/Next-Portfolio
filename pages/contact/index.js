//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";
import React, { useState } from "react";
import { sendContactForm } from "../../lib/api";

//Chakra UI
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const initValues = { name: "", email: "", subject: "", message: "" };

  const initState = { isLoading: false, error: "", values: initValues };

  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  // const onSubmit = async () => {
  //   setState((prev) => ({
  //     ...prev,
  //     isLoading: true,
  //   }));
  //   try {
  //     await sendContactForm(values);
  //     setTouched({});
  //     setState(initState);
  //     toast({
  //       title: "Message sent.",
  //       status: "success",
  //       duration: 2000,
  //       position: "top",
  //     });
  //   } catch (error) {
  //     setState((prev) => ({
  //       ...prev,
  //       isLoading: false,
  //       error: error.message,
  //     }));
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
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
            // onSubmit={onSubmit}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name *"
                className={`input ${error.name && "input-error"}`}
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              {error.name && <span className="text-red-500">{error.name}</span>}
              <input
                type="text"
                placeholder="Email *"
                className={`input ${error.email && "input-error"}`}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              {error.email && (
                <span className="text-red-500">{error.email}</span>
              )}
            </div>
            <input
              type="text"
              placeholder="Subject *"
              className={`input ${error.subject && "input-error"}`}
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {error.subject && (
              <span className="text-red-500">{error.subject}</span>
            )}
            <textarea
              placeholder="Message *"
              className={`textarea ${error.message && "textarea-error"}`}
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            ></textarea>
            {error.message && (
              <span className="text-red-500">{error.message}</span>
            )}
            <button
              disabled={
                isLoading ||
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              onClick={onSubmit}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let&apos;s talk
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
