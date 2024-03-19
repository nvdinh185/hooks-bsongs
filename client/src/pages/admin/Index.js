import { Link } from "react-router-dom";

const Index = () => {

    return (
        <div id="wrapper">
            <nav
                className="navbar navbar-default navbar-cls-top "
                role="navigation"
                style={{ marginBottom: 0 }}
            >
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".sidebar-collapse"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <Link className="navbar-brand" to='/'>
                        VinaEnter Edu
                    </Link>
                </div>
                <div
                    style={{
                        color: "white",
                        padding: "15px 50px 5px 50px",
                        float: "right",
                        fontSize: 16
                    }}
                >
                    {" "}
                    Xin chào, <b>Admin</b>
                    &nbsp;{" "}
                    <a href="" className="btn btn-danger square-btn-adjust">
                        Đăng xuất
                    </a>{" "}
                </div>
            </nav>
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li className="text-center">
                            <img
                                src="/images/find_user.png"
                                className="user-image img-responsive"
                            />
                        </li>
                        <li>
                            <Link id="index" to='/admin'>
                                <i className="fa fa-dashboard fa-3x" /> Trang chủ
                            </Link>
                        </li>
                        <li>
                            <a id="category" href="">
                                <i className="fa fa-list fa-3x" /> Quản lý danh mục
                            </a>
                        </li>
                        <li>
                            <Link to='/admin/song'>
                                <i className="fa fa-music fa-3x" />Quản lý bài hát
                            </Link>
                        </li>
                        <li>
                            <a id="user" href="">
                                <i className="fa fa-user fa-3x" /> Quản lý người dùng
                            </a>
                        </li>
                        <li>
                            <a id="contact" href="">
                                <i className="fa fa-envelope fa-3x" /> Quản lý liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>TRANG QUẢN TRỊ VIÊN</h2>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-green set-icon">
                                    <i className="fa fa-bars" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">
                                        <a href="" title="">
                                            Quản lý danh mục
                                        </a>
                                    </p>
                                    <p className="text-muted">Có 5 danh mục</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-blue set-icon">
                                    <i className="fa fa-bell-o" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">
                                        <a href="" title="">
                                            Quản lý bài hát
                                        </a>
                                    </p>
                                    <p className="text-muted">Có 10 bài hát</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="panel panel-back noti-box">
                                <span className="icon-box bg-color-brown set-icon">
                                    <i className="fa fa-rocket" />
                                </span>
                                <div className="text-box">
                                    <p className="main-text">
                                        <a href="" title="">
                                            Quản lý người dùng
                                        </a>
                                    </p>
                                    <p className="text-muted">Có 15 người dùng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;