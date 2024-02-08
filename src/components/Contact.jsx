import React, { useState } from "react";
import emailjs from "emailjs-com";
import Loader from "./loader";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("typing");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    let templateParams = {
      to_name: "Pablo",
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send("i00kmkmj", "template_tdkyvb2", templateParams, "G9MdOFgSf2VxumY5X")
      .then(
        (response) => {
          setStatus("success");

          setTimeout(() => {
            setStatus("typing");
            setData({ message: "", email: "" });
          }, 3000);
          console.log("res", response);
        },
        (error) => {
          setStatus("error");

          setTimeout(() => {
            setStatus("typing");
            setData({ message: "", email: "" });
          }, 3000);
          console.log("errror", error);
        }
      );
  };

  return (
    <div class="flex w-full flex-col justify-center px-2 md:px-6 py-12 lg:px-8">
      <h2 className="text-lg text-white">Contacto</h2>
      <div className="">
        <h2 className="mt-10 text-center text-lg font-semibold leading-9 tracking-tight text-gray-300 ">
          Dejame tu mensaje
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <form
          className="space-y-6 w-full max-w-[500px]"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-300"
            >
              Tu Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                value={data.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-100 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="mensaje"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Mensaje
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="text"
                name="message"
                value={data.message}
                onChange={handleChange}
                type=""
                autocomplete="current-text"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 "
              disabled={status === "loading"}
            >
              {status === "loading" ? <Loader /> : "Enviar"}
            </button>
            {status === "success" && (
              <p className=" text-sm text-green-700">
                El mensaje se envio correctamente
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700">
                Hubo un error al enviar el mensaje
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
