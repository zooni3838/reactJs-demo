import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const menuItems = [
    { id: 1, title: 'Home', icon: '🏠', subMenu: [] },
    {
      id: 2,
      title: 'Products',
      icon: '🛍️',
      subMenu: [
        { id: 21, title: 'Laptops', icon: '💻', subMenu: [] },
        { id: 22, title: 'Smartphones', icon: '📱', subMenu: [] },
      ],
    },
    { id: 3, title: 'Contact', icon: '✉️', subMenu: [] },
  ]

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (menuItem) => {
    // Handle menu item click, e.g., navigate to a page
    console.log(`Clicked ${menuItem}`);

    setSelectedItem(menuItem)
    // if menuItem.subMenu
    //....
  
  };

  useEffect(() => {
    // Additional setup, if needed
  }, []);

  const renderSubMenu = (subMenuItems) => {
    if (subMenuItems.length === 0) return null;

    return (
      <ul className="submenu">
        {subMenuItems.map((subMenuItem) => (
          <li key={subMenuItem.id} onClick={() => handleClick(subMenuItem)}>
            {subMenuItem.icon && <span className="menu-icon">{subMenuItem.icon}</span>}
            {subMenuItem.title}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className='App'>
      <div className="menu">
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.id} onClick={() => handleClick(menuItem)}>
              {menuItem.icon && <span className="menu-icon">{menuItem.icon}</span>}
              {menuItem.title}
              {renderSubMenu(menuItem.subMenu)}
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default App;

// React.memo can be used to optimize the performance for bigger components
const MenuItem = ({ title, icon, subMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-item">
      <div className="menu-item-header" onClick={handleToggleSubMenu}>
        <span className="menu-item-icon">{icon}</span>
        <span className="menu-item-title">{title}</span>
      </div>
      {isOpen && (
        <div className="submenu">
          {subMenu.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}