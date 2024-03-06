import { Link } from "react-router-dom";

const Song = (props) => {
    return (
        <div className="article">
            <h2>
                <Link to={'/detail/' + props.id} className="rm">{props.name}</Link>
            </h2>
            <p className="infopost">
                Ngày đăng: {props.date_create}. Lượt xem: {props.counter}{" "}
                <a href="#" className="com">
                    <span>1</span>
                </a>
            </p>
            <div className="clr" />
            <div className="img">
                <img
                    src={"/images/" + props.image}
                    width={177}
                    height={213}
                    alt={props.image}
                    className="fl"
                />
            </div>
            <div className="post_content">
                <p>{props.description}</p>
                <p className="spec">
                    <Link to={'/detail/' + props.id} className="rm">Chi tiết »</Link>
                </p>
            </div>
            <div className="clr" />
        </div>
    )
}

export default Song;