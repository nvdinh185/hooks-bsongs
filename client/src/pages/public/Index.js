import axios from 'axios';
import { useState, useEffect } from 'react';

import Categories from "../../components/Categories";
import Newsongs from "../../components/Newsongs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Song from "../../components/Song";
import Searchform from "../../components/Searchform";

const Index = () => {

    const [listSongs, setListSongs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var result = await axios('http://localhost:3001/song');
            setListSongs(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className="main">
            <Header />
            <div className="content">
                <div className="content_resize">
                    <div className="mainbar">
                        {listSongs.map(song =>
                            <Song
                                key={song.id}
                                id={song.id}
                                name={song.name}
                                description={song.description}
                                image={song.image}
                                date_create={song.date_create}
                                counter={song.counter}
                            />
                        )}

                        <p className="pages">
                            <small>Trang 1 của 5</small>
                            <span>1</span>
                            <a href="">2</a>
                            <a href="">3</a>
                            <a href="">4</a>
                            <a href="">5</a>
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

export default Index;