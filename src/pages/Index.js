const Index = () => {
    return (
        <div className="main">
            <div className="header">
                <div className="header_resize">
                    <div className="logo">
                        <h1>
                            <a href="">
                                BSong <small>Một dự án khóa JAVA tại VinaEnter Edu</small>
                            </a>
                        </h1>
                    </div>
                    <div className="menu_nav">
                        <ul>
                            <li className="active">
                                <a href="index.html">
                                    <span>Trang chủ</span>
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    <span>Liên hệ</span>
                                </a>
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
                            </a>{" "}
                        </div>
                        <div className="clr" />
                    </div>
                    <div className="clr" />
                </div>
            </div>
            <div className="content">
                <div className="content_resize">
                    <div className="mainbar">
                        <div className="article">
                            <h2>
                                <a href="" title="Đổi thay">
                                    Đổi thay
                                </a>
                            </h2>
                            <p className="infopost">
                                Ngày đăng: 2017-07-02 22:09:13.0. Lượt xem: 0{" "}
                                <a href="#" className="com">
                                    <span>1</span>
                                </a>
                            </p>
                            <div className="clr" />
                            <div className="img">
                                <img
                                    src="images/doi-thay.jpg"
                                    width={177}
                                    height={213}
                                    alt="Đổi thay"
                                    className="fl"
                                />
                            </div>
                            <div className="post_content">
                                <p>
                                    “Nhớ…tiếng mưa rơi ngày xưu…lúc đôi ta còn nhau, khi tình yêu… bắt
                                    đầu…….” Những ca từ quen thuộc của ngày nào bổng vang lên giữa một
                                    buổi chiều mưa nhẹ rơi…Đã từ rất lâu rồi tôi mới được nghe lại bài
                                    hát này. Bài hát khiến tôi nhớ về kỷ niệm một thời mà tôi cứ nghỡ
                                    như chuyện mới vừa xãy ra hôm qua vậy…!!!.
                                </p>
                                <p className="spec">
                                    <a href="detail.html" className="rm">
                                        Chi tiết »
                                    </a>
                                </p>
                            </div>
                            <div className="clr" />
                        </div>
                        <div className="article">
                            <h2>
                                <a href="" title="Đổi thay">
                                    Only Love
                                </a>
                            </h2>
                            <p className="infopost">
                                Ngày đăng: 2017-07-01 12:08:11.0. Lượt xem: 0{" "}
                                <a href="#" className="com">
                                    <span>2</span>
                                </a>
                            </p>
                            <div className="clr" />
                            <div className="img">
                                <img
                                    src="images/only-love.jpg"
                                    width={177}
                                    height={213}
                                    alt="Only Love"
                                    className="fl"
                                />
                            </div>
                            <div className="post_content">
                                <p>
                                    có phải một ngày nào đó em cũng mãi xa cuộc đời tôi ! có phải tôi
                                    vẫn luôn là người ngộ nhận về một câu chuyện tình yêu tuyệt đẹp !
                                </p>
                                <p className="spec">
                                    <a href="detail.html" className="rm">
                                        Chi tiết »
                                    </a>
                                </p>
                            </div>
                            <div className="clr" />
                        </div>
                        <div className="article">
                            <h2>
                                <a href="" title="Đổi thay">
                                    Nơi ấy con tìm về
                                </a>
                            </h2>
                            <p className="infopost">
                                Ngày đăng: 2017-07-01 20:09:13.0. Lượt xem: 4{" "}
                                <a href="#" className="com">
                                    <span>3</span>
                                </a>
                            </p>
                            <div className="clr" />
                            <div className="img">
                                <img
                                    src="images/noi-ay-con-tim-ve.jpg"
                                    width={177}
                                    height={213}
                                    alt="Nơi ấy con tìm về"
                                    className="fl"
                                />
                            </div>
                            <div className="post_content">
                                <p>
                                    Cũng đã một tuần trôi qua,...nhanh thật!. Ngày nào còn ở nhà chỉ
                                    ăn học và vui chơi nhưng giờ con đã nhập ngũ...! Thật sự giờ đây
                                    con rất nhớ nhà, nhớ ba, nhớ mẹ, và đặc biệt con rất nhớ
                                    ngoại...không biết giờ này ngoại ra sao? ngoại có ăn uống bình
                                    thường không?....khuya này trời mưa, không biết ngoại có đau nhức
                                    nữa không?...
                                </p>
                                <p className="spec">
                                    <a href="detail.html" className="rm">
                                        Chi tiết »
                                    </a>
                                </p>
                            </div>
                            <div className="clr" />
                        </div>
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
                        <div className="searchform">
                            <form id="formsearch" name="formsearch" method="post" action="#">
                                <span>
                                    <input
                                        name="editbox_search"
                                        className="editbox_search"
                                        id="editbox_search"
                                        maxLength={80}
                                        defaultValue="Tìm kiếm bài hát"
                                        type="text"
                                    />
                                </span>
                                <input
                                    name="button_search"
                                    src="images/search.jpg"
                                    className="button_search"
                                    type="image"
                                />
                            </form>
                        </div>
                        <div className="clr" />
                        <div className="gadget">
                            <h2 className="star">Danh mục bài hát</h2>
                            <div className="clr" />
                            <ul className="sb_menu">
                                <li>
                                    <a href="cat.html">Nhạc trẻ</a>
                                </li>
                                <li>
                                    <a href="cat.html">Nhạc trữ tình</a>
                                </li>
                                <li>
                                    <a href="cat.html">Rock Việt</a>
                                </li>
                                <li>
                                    <a href="cat.html">Nhạc Trịnh</a>
                                </li>
                                <li>
                                    <a href="cat.html">Hip Hop Việt</a>
                                </li>
                            </ul>
                        </div>
                        <div className="gadget">
                            <h2 className="star">
                                <span>Bài hát mới</span>
                            </h2>
                            <div className="clr" />
                            <ul className="ex_menu">
                                <li>
                                    <a href="#">Mùa Đã Xa (Single)</a>
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
                        </div>
                    </div>
                    <div className="clr" />
                </div>
            </div>
            <div className="footer">
                <div className="footer_resize">
                    <p className="lf">
                        Copyright © <a href="#">VinaEnter Edu</a>. All Rights Reserved
                    </p>
                    <p className="rf">Code by Gia Huy - Khóa JAVA17</p>
                    <div style={{ clear: "both" }} />
                </div>
            </div>
        </div>
    )
}

export default Index;