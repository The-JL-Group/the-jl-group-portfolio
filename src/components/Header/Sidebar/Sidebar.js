import React from 'react';
import { socialsIcons } from './sideIcons';
import './sidebar.css';

const Sidebar = () => {
  return (
    // Sidebar Container
    <section>
      {/* Sidebar */}
      <ul className="social-sidebar">
        {socialsIcons.map((sidebar, index) => (
          <li>
            <a key={index} href={sidebar.pathway} className="text-white dark:text-blk" target="_blank" rel="noreferrer">
              {sidebar.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
