import Categories from "../components/Categories";
import Newsongs from "../components/Newsongs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Song from "../components/Song";
import Searchform from "../components/Searchform";

const Cat = () => {


    return (
        <div className="main">
            <Header />
            <div className="content">
                <div className="content_resize">
                    <div className="mainbar">
                        <div className="article">
                            <h1>Nhạc trẻ</h1>
                        </div>
                        <Song />

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