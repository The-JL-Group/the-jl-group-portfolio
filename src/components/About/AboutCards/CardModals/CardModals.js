import React, { Component } from 'react';
import './cardModals.css';

// Close Icon
import { AiOutlineCloseCircle } from 'react-icons/ai';

// Images
import jamesImg from '../../../../assets/james.jpg';

const closeBtn = [
  {
    icon: <AiOutlineCloseCircle size={'3rem'} />,
  },
];

// James Modal
export default class JModal extends Component {
  render() {
    return (
      <div className="j-modal bg-blkRgba dark:bg-white">
        <div className="modal-btn-close-container">
          {closeBtn.map((close, index) => (
            <button
              type="button"
              className="modal-btn-close text-white dark:text-blk"
              onClick={this.props.hide}
            >
              {close.icon}
            </button>
          ))}
        </div>

        <div className="modal-card bg-white dark:bg-blk">
          <div class="modal-img-container">
            <img src={jamesImg}></img>
          </div>
          <div className="modal-content">
            <div className="modal-details text-blk dark:text-white">
              <h4>James Edwards</h4>
              <span>UX/UI Developer</span>
              <div className="modal-data">
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

              <div className="modal-action-btn">
                <a href="https://github.com/jimbolikesgithub" target="_blank" rel="noreferrer">
                  <button className="bg-blk text-white hover:bg-org hover:text-blk dark:bg-white dark:text-blk dark:hover:bg-pnk dark:hover:text-white">
                    Follow GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
