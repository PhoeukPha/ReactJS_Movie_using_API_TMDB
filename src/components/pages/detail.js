import React, { useEffect, useState } from 'react';
import img1 from '../images/thumbnails/1.jpeg';
import ads1 from '../images/ads/1.gif';
import logo from '../images/icons/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import axios from 'axios';
import Card from '../inc/card';
import moment from 'moment';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, TelegramShareButton, TelegramIcon } from "react-share";


const DetailPage = () => {

    const param = useParams();
    const APP_URL = `https://api.themoviedb.org/3/movie/${param.id}/similar?api_key=1a3c5fdc288d8f4245dd5df33bc61a5d&&page=1`;

    const [detailData, setDetailData] = useState({});
    const [trailerKey, setTrailerKey] = useState('');
    const [similar, setSimilar] = useState([]);

    const fetchMovieData = async () => {
        
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=1a3c5fdc288d8f4245dd5df33bc61a5d&append_to_response=videos`);
        setDetailData(response.data);
        const trailer = response.data.videos.results.find(video => video.type === 'Trailer');
        if (trailer) {
            setTrailerKey(trailer.key);
        }
        
    }

    useEffect(() => {

        fetchMovieData();

        fetch(APP_URL)
            .then((res) => res.json())
            .then(data => {
                setSimilar(data.results.slice(0, 4));
            })
    }, []);

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
                                    <div className="line"></div>
                                    <div className="title text-center">
                                        <h3 className="m-0">{detailData.title}</h3>
                                    </div>
                                    <div className="author">
                                        <img src={logo} alt="" className="img_author" />
                                        <label className="author_name">by <a href="#">TMDB</a></label>
                                        <span className="datetime">: {moment(detailData.release_date).fromNow()}</span>
                                    </div>
                                    <div className="line"></div>
                                    <div className="content-video text-center">
                                        {trailerKey &&
                                            <iframe
                                                title={detailData.title}
                                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                                width="560"
                                                height="415"
                                                frameBorder="0"
                                                allowFullScreen
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            />
                                        }
                                    </div>
                                    <div className="line"></div>
                                    <div className="share-to-social">
                                        <FacebookShareButton
                                            url={'http://localhost:3000/'}
                                            quote={`Watch ${detailData.title}`}
                                            className="facebook">
                                            <FacebookIcon size={40} round />
                                        </FacebookShareButton>

                                        <TelegramShareButton
                                            url={'http://localhost:3000/'}
                                            title={`Watch ${detailData.title}`}
                                            className="telegram">
                                            <TelegramIcon size={40} round />
                                        </TelegramShareButton>
                                    </div>
                                    <div className="card-header space-between card-header_custom mb-2">
                                        <label className="head_title">ភាពយន្តដែលកំពុងត្រៀមចេញឆាប់ៗនេះ🔥</label>
                                        <a href="#" className="">Show More</a>
                                    </div>
                                    <div className="row">
                                        {
                                            similar.length === 0 ? <center><h5>Loading...</h5></center> : similar.map((item) => (
                                                <Card
                                                    key={item.id}
                                                    id={item.id}
                                                    title={item.original_title}
                                                    img={'https://image.tmdb.org/t/p/w500' + item.poster_path}
                                                />
                                            ))
                                        }

                                    </div>
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
                                                <TelegramIcon size={25} round className='mx-2' />សូមចុចនៅទីនេះ 🔥
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
                                                    <FontAwesomeIcon icon={faCirclePlay} />
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
            </div >

            {/* Footer */}
            <div div className="footer" >
                <div className="container con_mobile_0">
                    <div className="content-footer">
                        <div className="row_flex">
                            <img src={logo} alt="" className="m-3 img_logo_footer" />
                            <p className="text-white p-3">មិនអនុញ្ញាតិឲ្យមានការប្រើប្រាស់វិធីណាមួយមកធ្វើការថតចម្លង ឬក្លែងបន្លំ រាល់ពត៌មានដែលមាននៅក្នុងគេហទំព័រនេះទេ ។</p>
                        </div>
                        <span className="copyright">© 2022<a href="index.html">Name Movie</a>All Rights Reserved</span>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default DetailPage;