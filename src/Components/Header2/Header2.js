import React from 'react';
import './Header2.css';


const Header2 = () => {




  return (
    <div>



      {/* mobile devide */}
      <nav className="sidebar close">
        <header>
            <div className="image-text">
                <span className="image">
                    <img src="" alt=""/>
                </span>

                <div className="text logo-text">
                    <span className="name">The Sky Aural</span>
                    <span className="profession">Akash Soni</span>
                </div>
            </div>

            <i className='bx bx-chevron-right toggle'></i>
        </header>

        <div className="menu-bar">
            <div className="menu">

                <li className="search-box">
                    <i className='bx bx-search icon'></i>
                    <input type="text" placeholder="Search..."/>
                </li>

                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Home</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-bar-chart-alt-2 icon' ></i>
                            <span className="text nav-text">Services</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Product</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">About Us</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-heart icon' ></i>
                            <span className="text nav-text">Contact</span>
                        </a>
                    </li>

                    

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <a href="/">
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Logout</span>
                    </a>
                </li>

                <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span className="mode-text text">Dark mode</span>

                    <div className="toggle-switch">
                        <span className="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>

    <section className="home">
        <div className="text">Sidebar</div>
    </section>
    </div>
  );
};

export default Header2;