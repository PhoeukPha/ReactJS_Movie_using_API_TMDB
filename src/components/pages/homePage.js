import React from 'react';
import img1 from '../images/thumbnails/1.jpeg';
import ads1 from '../images/ads/1.gif';
import logo from '../images/icons/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
// import Card from '../inc/card';
import DataMovie from './dataMovie';
const HomePage = () => {
    return (
        <div>
            {/* Main Content */}
            <div className="wrapper">
                <div className="con_mobile_0">
                    <div className="card card__custom con_mobile_10px">
                        <div className="head__ads text-center mt-3 mb-3">
                            <img src={ads1} alt="" className="head__img__ads" />
                        </div>
                        <div className="main__content">
                            <div className="row row_10px">
                                <div className="col-12 col-sm-12 col-md-9 col-xl-9">
                                    <section>
                                        <div className="card-header space-between card-header_custom mb-2">
                                            <label className="head_title">ភាពយន្តថ្មីៗ 🔥</label>
                                            <a href="#" className="">Show More</a>
                                        </div>
                                        <div className="row">
                                            <DataMovie/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-12 col-sm-12 col-md-3 col-xl-3 sticky-top">
                                    <div className="card-header card-header_custom">
                                        <label className="head_title">សូមចុចចូលរួមជាមួយយើង 🔥</label>
                                    </div>
                                    <div className="card-body card__custom">
                                        <div className="card-body telegram-card">
                                            <p className="card-text">ទទួលបានការ Update ភាពយន្តថ្មីៗ មុខគេចូលរួមជាមួយ Telegram
                                                របស់យើង។</p>
                                            <a href="https://t.me/camboits" className="btn d-block btn-telegram head_title"
                                                target="_blank">
                                                <i className="fa-brands fa-telegram me-2"></i>សូមចុចនៅទីនេះ 🔥
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-header card-header_custom mt-3">
                                        <label className="head_title">សូមចុចចូលរួមជាមួយយើង 🔥</label>
                                    </div>
                                    <div className="card-body card__custom">
                                        <div className="card card_custom_item">
                                            <a href="#">
                                                <img src={img1} className="card-img-top img_thumn_" alt="..." />
                                                <span className="play">
                                                    <FontAwesomeIcon icon={faCirclePlay} beat />
                                                </span>
                                                <div className="card-body pt_pb_5px">
                                                    <h5 className="card-title">Card title ndsajkfn dsnjcxzvklafhl asjkdfh</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-header card-header_custom mt-3">
                                        <label className="head_title">សូមចុចចូលរួមជាមួយយើង 🔥</label>
                                    </div>
                                    <div className="card-body card__custom mb-3">
                                        <div className="row">
                                            <div className="col-6 col-sm-6 col-md-6 col-xl-6">
                                                <div className="card card_custom_item_small">
                                                    <a href="#">
                                                        <img src={img1} className="card-img-top img_thumn_small" alt="..." />
                                                        <span className="play">
                                                            <FontAwesomeIcon icon={faCirclePlay} />
                                                        </span>
                                                        <div className="card-body pt_pb_5px">
                                                            <h5 className="card-title">Card title ndsajkfn dsnjcxzvklafhl asjkdfh</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6 col-md-6 col-xl-6">
                                                <div className="card card_custom_item_small">
                                                    <a href="#">
                                                        <img src={img1} className="card-img-top img_thumn_small" alt="..." />
                                                        <span className="play">
                                                            <FontAwesomeIcon icon={faCirclePlay} />
                                                        </span>
                                                        <div className="card-body pt_pb_5px">
                                                            <h5 className="card-title">Card title ndsajkfn dsnjcxzvklafhl asjkdfh</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <div className="container con_mobile_0">
                    <div className="content-footer">
                        <div className="row_flex">
                            <img src={logo} alt="" className="m-3 img_logo_footer" />
                            <p className="text-white p-3">មិនអនុញ្ញាតិឲ្យមានការប្រើប្រាស់វិធីណាមួយមកធ្វើការថតចម្លង ឬក្លែងបន្លំ រាល់ពត៌មានដែលមាននៅក្នុងគេហទំព័រនេះទេ ។</p>
                        </div>
                        <span className="copyright">© 2022<a href="index.html">Name Movie</a>All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;