import React from "react";

const Contact = () => {
  return (
    <div class="flex w-full flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="text-lg text-white">Contacto</h2>
      <div class="">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
          Dejame tu mensaje
        </h2>
      </div>

      <div class="">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-300"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="mensaje"
                class="block text-sm font-medium leading-6 text-gray-300"
              >
                Mensaje
              </label>
            </div>
            <div class="mt-2">
              <textarea
                id="text"
                name="text"
                type=""
                autocomplete="current-text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
