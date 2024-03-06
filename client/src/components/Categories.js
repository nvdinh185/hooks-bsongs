import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Categories = () => {

    const [listCats, setListCats] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var result = await axios('http://localhost:3001/cat');
            setListCats(result.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <h2 className="star">Danh mục bài hát</h2>
            <div className="clr" />
            <ul className="sb_menu">
                {listCats.map(cat =>
                    <li key={cat.id}><Link to={'/cat/' + cat.id}>{cat.name}</Link></li>
                )}
            </ul>
        </>
    )
}

export default Categories;