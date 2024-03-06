import Sidebar from "../components/Categories";
import Newsongs from "../components/Newsongs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searchform from "../components/Searchform";

const Contact = () => {


    return (
        <div className="main">
            <Header />
            <div className="content">
                <div className="content_resize">
                    <div className="mainbar">
                        <div className="article">
                            <h2>
                                <span>Liên hệ</span>
                            </h2>
                            <div className="clr" />
                            <p>
                                Khi bạn có thắc mắc, vui lòng gửi liên hệ, chúng tôi sẽ phản hồi
                                trong thời gian sớm nhất.
                            </p>
                        </div>
                        <div className="article">
                            <h2>Gửi liên hệ đến chúng tôi</h2>
                            <div className="clr" />
                            <form action="" method="post" id="sendemail">
                                <ol>
                                    <li>
                                        <label htmlFor="name">Họ tên (required)</label>
                                        <input id="name" defaultValue="" name="name" className="text" />
                                    </li>
                                    <li>
                                        <label htmlFor="email">Email (required)</label>
                                        <input
                                            id="email"
                                            defaultValue=""
                                            name="email"
                                            className="text"
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="website">Website</label>
                                        <input
                                            id="website"
                                            defaultValue=""
                                            name="website"
                                            className="text"
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="message">Nội dung</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={8}
                                            cols={50}
                                            defaultValue={""}
                                        />
                                    </li>
                                    <li>
                                        <input
                                            type="image"
                                            name="imageField"
                                            id="imageField"
                                            src="images/submit.gif"
                                            className="send"
                                        />
                                        <div className="clr" />
                                    </li>
                                </ol>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar">
                        <Searchform />
                        <div className="clr" />
                        <div className="gadget">
                            <Sidebar />
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

export default Contact;