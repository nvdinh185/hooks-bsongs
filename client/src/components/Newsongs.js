import { Link } from "react-router-dom";

const Newsongs = () => {
    return (
        <>
            <h2 className="star">
                <span>Bài hát mới</span>
            </h2>
            <div className="clr" />
            <ul className="ex_menu">
                <li>
                    <Link to='/detail'>Mùa Đã Xa (Single)</Link>
                    <br />
                    Donec libero. Suspendisse bibendum
                </li>
                <li>
                    <a href="#">Chúng Ta Là Bạn Bè</a>
                    <br />
                    Phasellus suscipit, leo a pharetra
                </li>
                <li>
                    <a href="#">Có Một Người Để Yêu</a>
                    <br />
                    Tellus eleifend magna eget
                </li>
                <li>
                    <a href="#">Chuyện tình Lan và Điệp</a>
                    <br />
                    Curabitur vel urna in tristique
                </li>
                <li>
                    <a href="#">Xanh tươi Việt Nam</a>
                    <br />
                    Cras id urna orbi tincidunt orci ac
                </li>
                <li>
                    <a href="#">Tuổi hồng</a>
                    <br />
                    purus nec placerat bibendum
                </li>
            </ul>
        </>
    )
}

export default Newsongs;