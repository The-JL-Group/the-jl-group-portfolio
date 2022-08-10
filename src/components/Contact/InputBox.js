import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const InputBox = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pf27c74',
        'template_mt9q5gv',
        form.current,
        'aV5vgf8-feK56xvce'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMessage').value = '';
  };

  return (
    <div className="input-box-container">
      {/* INPUT BOX NAME */}
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex justify-center">
          <div className="mb-3 sm:w-2/3 xl:w-96">
            <input
              type="text"
              name="user_name"
              id="inputName"
              className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-black
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-org focus:ring-org focus:ring-1 focus:outline-none
              dark:focus:border-pnk dark:focus:ring-pnk
              "
              placeholder="name"
            />
          </div>
        </div>

        {/* INPUT BOX EMAIL */}
        <div className="flex justify-center">
          <div className="mb-3 sm:w-2/3 xl:w-96">
            <input
              type="email"
              name="user_email"
              id="inputEmail"
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-black
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-org focus:ring-org focus:ring-1 focus:outline-none
                dark:focus:border-pnk dark:focus:ring-pnk
                "
              placeholder="email"
            />
          </div>
        </div>

        {/* INPUT BOX MESSAGE */}
        <div className="flex justify-center">
          <div className="mb-3 sm:w-2/3 xl:w-96">
            <textarea
              name="message"
              id="inputMessage"
              className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-black
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-org focus:ring-org focus:ring-1 focus:outline-none
              dark:focus:border-pnk dark:focus:ring-pnk
              "
              rows="3"
              placeholder="your message"
            ></textarea>
          </div>
        </div>

        {/* INPUT BOX BUTTON */}
        <div className="flex space-x-2 justify-center">
          <button
            type="submit"
            value="send"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-3 sm:px-1/3 xl:px-12 bg-org text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-org hover:shadow-lg focus:bg-ltOrg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-org active:shadow-lg transition duration-150 ease-in-out
            dark:bg-pnk dark:hover:bg-pnk dark:focus:bg-ltPnk dark:active:bg-pnk"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
