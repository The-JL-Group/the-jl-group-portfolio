import React, { Component } from 'react';
import './cardModals.css';

// Close Icon
import { AiOutlineCloseCircle } from 'react-icons/ai';

// Images
import linaImg from '../../../../assets/lina.jpg';

<<<<<<< HEAD
import { ReactComponent as Close } from '../../../../assets/icons/x-icon-light.svg';
=======
const closeBtn = [
  {
    icon:  <AiOutlineCloseCircle size={'3rem'} />,
  }
];

>>>>>>> ee69b504c1da13472143d5c66390333e52c4d6eb

// James Modal
export default class LModal extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="l-modal">
        <div className="modal-btn-close-container">
          <button
            type="button"
            className="modal-btn-close"
            onClick={this.props.hide}
          >
            <Close />
          </button>
        </div>
        <div className="modal-card">
          <div className="modal-img-container">
            <img src={linaImg}></img>
          </div>
          <div className="modal-content">
            <div className="modal-details">
=======
      <div className="l-modal bg-blkRgba dark:bg-white">
        <div className='modal-btn-close-container'>
          {closeBtn.map((close, index) => (
             <button type="button" className='modal-btn-close text-white dark:text-blk' onClick={this.props.hide}>
              {close.icon}
             </button>
          ))}
        </div>
        <div className='modal-card bg-white dark:bg-blk'>
          <div class="modal-img-container">
            <img src={linaImg}></img>
          </div>
          <div className='modal-content'>
            <div className='modal-details text-blk dark:text-white'>
>>>>>>> ee69b504c1da13472143d5c66390333e52c4d6eb
              <h4>Lina Choi</h4>
              <span>UX/UI Developer</span>
              <div className="modal-data">
                <div>
                  <h3>24</h3>
                  <span>Projects</span>
                </div>

                <div>
                  <h3>29</h3>
                  <span>Followers</span>
                </div>

                <div>
                  <h3>39</h3>
                  <span>Following</span>
                </div>
              </div>

<<<<<<< HEAD
              <div className="modal-action-btn">
                <a href="https://github.com/choilina16" target="_blank">
                  <button>Follow GitHub</button>
                </a>
=======
              <div className='modal-action-btn'>
                <a href="https://github.com/choilina16" target="_blank"><button className='bg-blk text-white dark:bg-white dark:text-blk'>Follow GitHub</button></a>
>>>>>>> ee69b504c1da13472143d5c66390333e52c4d6eb
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
