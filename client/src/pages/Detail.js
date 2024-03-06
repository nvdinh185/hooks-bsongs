import Categories from "../components/Categories";
import Newsongs from "../components/Newsongs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searchform from "../components/Searchform";

const Detail = () => {
    return (
        <div className="main">
            <Header />
            <div className="content">
                <div className="content_resize">
                    <div className="mainbar">
                        <div className="article">
                            <h1>Nhạc trẻ</h1>
                            <div className="clr" />
                            <p>Ngày đăng: 2017-07-02 22:09:13.0. Lượt xem: 0</p>
                            <div className="vnecontent">
                                “Nhớ…tiếng mưa rơi ngày xưu…lúc đôi ta còn nhau, khi tình yêu… bắt
                                đầu…….” Những ca từ quen thuộc của ngày nào bổng vang lên giữa một
                                buổi chiều mưa nhẹ rơi…Đã từ rất lâu rồi tôi mới được nghe lại bài
                                hát này. Bài hát khiến tôi nhớ về kỷ niệm một thời mà tôi cứ nghỡ
                                như chuyện mới vừa xãy ra hôm qua vậy…!!!.
                            </div>
                        </div>
                        <div className="article">
                            <h2>Bài viết liên quan</h2>
                            <div className="clr" />
                            <div className="comment">
                                {" "}
                                <a href="">
                                    <img
                                        src="images/only-love.jpg"
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