import React from 'react';
import './header.css';

const Toggle = () => {
  return (
    <div className="toggle-button">
      <div class="flex justify-center">
        <div class="form-check form-switch mb-7">
          <input
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault56"
          />
        </div>
      </div>
    </div>
  );
};

export default Toggle;
