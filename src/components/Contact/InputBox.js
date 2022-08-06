import React from 'react';
import './contact.css';

const InputBox = () => {
  return (
    <div className="input-box-container">
      {/* INPUT BOX NAME */}
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <input
            type="text"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleText0"
            placeholder="name"
          />
        </div>
      </div>

      {/* INPUT BOX EMAIL */}
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <input
            type="email"
            class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
            id="exampleEmail0"
            placeholder="email"
          />
        </div>
      </div>

      {/* INPUT BOX MESSAGE */}
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <textarea
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-org
              bg-white bg-clip-padding
              border border-solid border-org
              rounded
              transition
              ease-in-out
              m-0
              focus:text-blk focus:bg-white focus:border-org focus:outline-none
            "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="your message"
          ></textarea>
        </div>
      </div>

      {/* INPUT BOX BUTTON */}
      <div class="flex space-x-2 justify-center">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 bg-org text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-org focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pnk active:shadow-lg transition duration-150 ease-in-out dark:bg-pnk"
        >
          send
        </button>
      </div>
    </div>
  );
};

export default InputBox;
