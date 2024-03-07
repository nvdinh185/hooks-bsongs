import axios from 'axios';
import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

const Newsongs = () => {

    const [listNewSongs, setListNewSongs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var result = await axios('http://localhost:3001/song/new');
            setListNewSongs(result.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <h2 className="star">
                <span>Bài hát mới</span>
            </h2>
            <div className="clr" />
            <ul className="ex_menu">
                {listNewSongs.map(song =>
                    <li>
                        <Link to={'/detail/' + song.id}>{song.name}</Link>
                        <br />
                        {song.description}
                    </li>
                )}
            </ul>
        </>
    )
}

export default Newsongs;