import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Categories from "../components/Categories";
import Newsongs from "../components/Newsongs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Song from "../components/Song";
import Searchform from "../components/Searchform";

const Cat = () => {
    let { cId } = useParams();

    const [listSongByCat, setListSongByCat] = useState([]);
    // const [catById, setCatById] = useState({});
    useEffect(() => {
        async function fetchData() {
            var news = await axios(`http://localhost:3001/song/songsbycat?cid=${cId}`);
            setListSongByCat(news.data);
        }
        fetchData();
    }, [cId]);

    return (
        <div className="main">
            <Header />
            <div className="content">
                <div className="content_resize">
                    <div className="mainbar">
                        <div className="article">
                            <h1>Nhạc trẻ</h1>
                        </div>
                        {listSongByCat.map(song =>
                            <Song
                                key={song.id}
                                name={song.name}
                                description={song.description}
                                image={song.image}
                                date_create={song.date_create}
                                counter={song.counter}
                            />
                        )}

                        <p className="pages">
                            <small>Trang 1 của 3</small>
                            <span>1</span>
                            <a href="">2</a>
                            <a href="">3</a>
                            <a href="#">»</a>
                        </p>
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

export default Cat;