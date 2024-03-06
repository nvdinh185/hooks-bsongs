import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header_resize">
                <div className="logo">
                    <h1>
                        <Link to='/'>
                            BSong <small>Một dự án khóa JAVA tại VinaEnter Edu</small>
                        </Link>
                    </h1>
                </div>
                <div className="menu_nav">
                    <ul>
                        <li>
                            <Link to='/'>
                                <span>Trang chủ</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <span>Liên hệ</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="clr" />
                <div className="slider">
                    <div id="coin-slider">
                        <a href="#">
                            <img
                                src="images/slide1.jpg"
                                width={935}
                                height={307}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="clr" />
                </div>
                <div className="clr" />
            </div>
        </div>
    )
}

export default Header;