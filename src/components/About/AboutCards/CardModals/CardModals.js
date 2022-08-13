import React, { Component } from 'react';
import './cardModals.css';

// Images
import jamesImg from "../../../../assets/james.jpg";
import linaImg from "../../../../assets/lina.jpg";

import { ReactComponent as Close } from "../../../../assets/icons/x-icon-light.svg";

// James Modal
export default class JModal extends Component {
  render() {
    return (
      <div className="j-modal z-50">
        <div className='modal-btn-close-container'>
          <button type="button" className='modal-btn-close' onClick={this.props.hide}>
            <Close/>
          </button>
        </div>
        <div className='modal-card'>
          <div class="modal-img-container">
            <img src={jamesImg}></img>
          </div>
          <div className='modal-content'>
            <div className='modal-details'>
              <h4>James Edwards</h4>
              <span>UX/UI Developer</span>
              <div className='modal-data'>
                
                <div>
                  <h3>39</h3>
                  <span>Projects</span>
                </div>

                <div>
                  <h3>13</h3>
                  <span>Followers</span>
                  </div>

                <div>
                  <h3>14</h3>
                  <span>Following</span>
                </div>
              </div>

              <div className='modal-action-btn'>
                <button>Follow GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
            
//  <button type="button" className='j-modal-btn-close border' onClick={this.props.hide}>Exit</button>

// Lina Modal
// const LinaCardModal = () => {
//   return (
//     <div>Hi</div>
//   )
// }

// export { JamesCardModal, LinaCardModal };