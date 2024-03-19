const Song = () => {

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
                    <a className="navbar-brand" href="index.html">
                        VinaEnter Edu
                    </a>
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
                            <a id="index" href="../index.html">
                                <i className="fa fa-dashboard fa-3x" /> Trang chủ
                            </a>
                        </li>
                        <li>
                            <a id="category" href="">
                                <i className="fa fa-list fa-3x" /> Quản lý danh mục
                            </a>
                        </li>
                        <li>
                            <a id="song" href="index.html">
                                <i className="fa fa-music fa-3x" /> Quản lý bài hát
                            </a>
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
                            <h2>Quản lý bài hát</h2>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <a href="add.html" className="btn btn-success btn-md">
                                                    Thêm
                                                </a>
                                            </div>
                                            <div className="col-sm-6" style={{ textAlign: "right" }}>
                                                <form method="post" action="">
                                                    <input
                                                        type="submit"
                                                        name="search"
                                                        defaultValue="Tìm kiếm"
                                                        className="btn btn-warning btn-sm"
                                                        style={{ float: "right" }}
                                                    />
                                                    <input
                                                        type="search"
                                                        className="form-control input-sm"
                                                        placeholder="Nhập tên bài hát"
                                                        style={{ float: "right", width: 300 }}
                                                    />
                                                    <div style={{ clear: "both" }} />
                                                </form>
                                                <br />
                                            </div>
                                        </div>
                                        <table
                                            className="table table-striped table-bordered table-hover"
                                            id="dataTables-example"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Tên bài hát</th>
                                                    <th>Danh mục</th>
                                                    <th>Lượt đọc</th>
                                                    <th>Hình ảnh</th>
                                                    <th width="160px">Chức năng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td className="center">Đổi thay</td>
                                                    <td className="center">Nhạc Pop</td>
                                                    <td className="center">2</td>
                                                    <td className="center">
                                                        <img
                                                            width="200px"
                                                            height="200px"
                                                            src="/images/doi-thay.jpg"
                                                            alt="Đổi thay"
                                                        />
                                                    </td>
                                                    <td className="center">
                                                        <a href="" title="" className="btn btn-primary">
                                                            <i className="fa fa-edit " /> Sửa
                                                        </a>
                                                        <a href="" title="" className="btn btn-danger">
                                                            <i className="fa fa-pencil" /> Xóa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td className="center">Only Love</td>
                                                    <td className="center">Nhạc Ngoại</td>
                                                    <td className="center">5</td>
                                                    <td className="center">
                                                        <img
                                                            width="200px"
                                                            height="200px"
                                                            src="/images/only-love.jpg"
                                                            alt="Only Love"
                                                        />
                                                    </td>
                                                    <td className="center">
                                                        <a href="" title="" className="btn btn-primary">
                                                            <i className="fa fa-edit " /> Sửa
                                                        </a>
                                                        <a href="" title="" className="btn btn-danger">
                                                            <i className="fa fa-pencil" /> Xóa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td className="center">Nơi ấy con tìm về</td>
                                                    <td className="center">Nhạc Pop</td>
                                                    <td className="center">3</td>
                                                    <td className="center">
                                                        <img
                                                            width="200px"
                                                            height="200px"
                                                            src="/images/noi-ay-con-tim-ve.jpg"
                                                            alt="Nơi ấy con tìm về"
                                                        />
                                                    </td>
                                                    <td className="center">
                                                        <a href="" title="" className="btn btn-primary">
                                                            <i className="fa fa-edit " /> Sửa
                                                        </a>
                                                        <a href="" title="" className="btn btn-danger">
                                                            <i className="fa fa-pencil" /> Xóa
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div
                                                    className="dataTables_info"
                                                    id="dataTables-example_info"
                                                    style={{ marginTop: 27 }}
                                                >
                                                    Hiển thị từ 1 đến 5 của 24 truyện
                                                </div>
                                            </div>
                                            <div className="col-sm-6" style={{ textAlign: "right" }}>
                                                <div
                                                    className="dataTables_paginate paging_simple_numbers"
                                                    id="dataTables-example_paginate"
                                                >
                                                    <ul className="pagination">
                                                        <li
                                                            className="paginate_button previous disabled"
                                                            aria-controls="dataTables-example"
                                                            tabIndex={0}
                                                            id="dataTables-example_previous"
                                                        >
                                                            <a href="#">Trang trước</a>
                                                        </li>
                                                        <li
                                                            className="paginate_button active"
                                                            aria-controls="dataTables-example"
                                                            tabIndex={0}
                                                        >
                                                            <a href="">1</a>
                                                        </li>
                                                        <li
                                                            className="paginate_button"
                                                            aria-controls="dataTables-example"
                                                            tabIndex={0}
                                                        >
                                                            <a href="">2</a>
                                                        </li>
                                                        <li
                                                            className="paginate_button"
                                                            aria-controls="dataTables-example"
                                                            tabIndex={0}
                                                        >
                                                            <a href="">3</a>
                                                        </li>
                                                        <li
                                                            className="paginate_button"
                                                            aria-controls="dataTables-example"
                                                            tabIndex={0}
                                                        >
                                                            <a href="">4</a>
                                                        </li>
                                                        <li
                                                            className="paginate_button"
                                                            aria-controls="dataTables-example"
                                                            tabIndex={0}
                                                        >
                                                            <a href="">5</a>
                                                        </li>
                                                        <li
                                                            className="paginate_button next"
                                                            aria-controls="dataTables-example"
                                                            tabIndex={0}
                                                            id="dataTables-example_next"
                                                        >
                                                            <a href="#">Trang tiếp</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Song;