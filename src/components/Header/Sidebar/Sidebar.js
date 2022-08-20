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
          <li href={sidebar.pathway}>
            <a key={index} className="text-white dark:text-blk">
              {sidebar.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
