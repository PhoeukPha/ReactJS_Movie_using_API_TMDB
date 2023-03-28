import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignRight} from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
            <div className='container'>
                <Link to={'/'} className ='navbar-brand text-white'>Movie</Link>
                <a className='' href='#'></a>
                <button className='btn btn-dark text-white navbar-toggler border-3 px-2' type='button'
                    data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
                    <FontAwesomeIcon icon={faAlignRight} />
                </button>
                <div className='offcanvas offcanvas-start-lg bg-dark' id='offcanvasExample'
                    aria-labelledby='offcanvasExampleLabel'>
                    <div className='offcanvas-header d-flex d-lg-none'>
                        {/* <h5 className='offcanvas-title text-white' id='offcanvasExampleLabel'>Navbar</h5> */}
                        <Link to={'/'} className ='offcanvas-title text-white' id='offcanvasExampleLabel'>Movie</Link>
                    </div>
                    <div className='offcanvas-body p-lg-0'>
                        <ul className='navbar-nav'>
                            <Link to={'filter'} className='nav-item'>
                                <li className='nav-link'>កំពុងចាក់បញ្ចាំង</li>
                            </Link>
                            <Link to={'filter'} className='nav-item'>
                                <li className='nav-link'>មក​ដល់ឆាប់ៗនេះ</li>
                            </Link>
                            <Link to={'filter'} className='nav-item'>
                                <li className='nav-link'>ទំនាក់ទំនងយើង​ខ្ញុំ</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
