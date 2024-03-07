import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Categories from "../components/Categories";
import Newsongs from "../components/Newsongs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searchform from "../components/Searchform";

const Detail = () => {

    const { dId } = useParams();

    const [songById, setSongById] = useState({});
    useEffect(() => {
        async function fetchData() {
            var result = await axios(`http://localhost:3001/song/songbyid?id=${dId}`);
            setSongById(result.data);
        }
        fetchData();
    }, [dId]);

    return (
        <div className="main">
            <Header />
            <div className="content">
                <div className="content_resize">
                    <div className="mainbar">
                        <div className="article">
                            <h1>{songById.cat_name}</h1>
                            <div className="clr" />
                            <p>Ngày đăng: {songById.date_create}. Lượt xem: {songById.counter}</p>
                            <div className="vnecontent">
                                <h2>{songById.song_name}</h2>
                                <iframe src={'https://www.youtube.com/embed/' + songById.id_link} />
                            </div>
                        </div>
                        <div className="article">
                            <h2>Bài hát liên quan</h2>
                            <div className="clr" />
                            <div className="comment">
                                {" "}
                                <a href="">
                                    <img
                                        src="/images/only-love.jpg"
                                        width={40}
                                        height={40}
                                        alt=""
                                        className="userpic"
                                    />
                                </a>
                                <h2>
                                    <a href="">Only Love</a>
                                </h2>
                                <p>
                                    có phải một ngày nào đó em cũng mãi xa cuộc đời tôi ! có phải tôi
                                    vẫn luôn là người ngộ nhận về một câu chuyện tình yêu tuyệt đẹp !
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        <Searchform />
                        <div className="clr" />
                        <div className="gadget">
                            <Categories />
                        </div>
                        <div className="gadget">
                            <Newsongs />
                        </div>
                    </div>
                    <div className="clr" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Detail;