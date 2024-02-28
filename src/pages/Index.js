const Index = () => {
    return (
        <>
            <div className="hero_area">
                {/* header section strats */}
                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container">
                            <a className="navbar-brand" href="index.html">
                                <img src="images/logo.png" alt="" />
                                <span>Spering</span>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">
                                            Home <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">
                                            {" "}
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="work.html">
                                            Work{" "}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="category.html">
                                            {" "}
                                            Category{" "}
                                        </a>
                                    </li>
                                </ul>
                                <div className="user_option">
                                    <a href="">
                                        <span>Login</span>
                                    </a>
                                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                        <button
                                            className="btn  my-2 my-sm-0 nav_search-btn"
                                            type="submit"
                                        />
                                    </form>
                                </div>
                            </div>
                            <div>
                                <div className="custom_menu-btn ">
                                    <button>
                                        <span className=" s-1"></span>
                                        <span className="s-2"></span>
                                        <span className="s-3"></span>
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* end header section */}
                {/* slider section */}
                <section className="slider_section ">
                    <div className="carousel_btn-container">
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to={0}
                                className="active"
                            >
                                01
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                                02
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                                03
                            </li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-5 offset-md-1">
                                            <div className="detail-box">
                                                <h1>
                                                    You Can <br />
                                                    Hire Freelancer <br />
                                                    Here
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content of a page
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn-1">
                                                        About Us
                                                    </a>
                                                    <a href="" className="btn-2">
                                                        Get A Quote
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offset-md-1 col-md-4 img-container">
                                            <div className="img-box">
                                                <img src="images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-5 offset-md-1">
                                            <div className="detail-box">
                                                <h1>
                                                    You Can <br />
                                                    Hire Freelancer <br />
                                                    Here
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content of a page
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn-1">
                                                        About Us
                                                    </a>
                                                    <a href="" className="btn-2">
                                                        Get A Quote
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offset-md-1 col-md-4 img-container">
                                            <div className="img-box">
                                                <img src="images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-5 offset-md-1">
                                            <div className="detail-box">
                                                <h1>
                                                    You Can <br />
                                                    Hire Freelancer <br />
                                                    Here
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content of a page
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn-1">
                                                        About Us
                                                    </a>
                                                    <a href="" className="btn-2">
                                                        Get A Quote
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offset-md-1 col-md-4 img-container">
                                            <div className="img-box">
                                                <img src="images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end slider section */}
            </div>
            {/* experience section */}
            <section className="experience_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="img-box">
                                <img src="images/experience-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>Best Experinced Freelancer Here</h2>
                                </div>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as
                                </p>
                                <div className="btn-box">
                                    <a href="" className="btn-1">
                                        Read More
                                    </a>
                                    <a href="" className="btn-2">
                                        Hire
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end experience section */}
            {/* category section */}
            <section className="category_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>Category</h2>
                    </div>
                    <div className="category_container">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c1.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>Design &amp; Arts</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c2.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>Web Development</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c3.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>SEO Markting</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c4.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>Video Edting</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c5.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>Logo Design</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c6.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>Game Design</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end category section */}
            {/* about section */}
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-9 mx-auto">
                            <div className="img-box">
                                <img src="images/about-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="detail-box">
                        <h2>About Spering Company</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.
                            If youThere are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.
                            If you
                        </p>
                        <a href="">Read More</a>
                    </div>
                </div>
            </section>
            {/* end about section */}
            {/* freelance section */}
            <section className="freelance_section ">
                <div id="accordion">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 offset-md-1">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>Work Freelaner Has Done</h2>
                                    </div>
                                    <div className="tab_container">
                                        <div
                                            className="t-link-box"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            <div className="img-box">
                                                <img src="images/f1.png" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>$250 Million</h5>
                                                <h3>Paid to Freelancers</h3>
                                            </div>
                                        </div>
                                        <div
                                            className="t-link-box collapsed"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <div className="img-box">
                                                <img src="images/f2.png" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>2 Million</h5>
                                                <h3>Paid Invoices</h3>
                                            </div>
                                        </div>
                                        <div
                                            className="t-link-box collapsed"
                                            data-toggle="collapse"
                                            data-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            <div className="img-box">
                                                <img src="images/f3.png" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>700,000</h5>
                                                <h3>Worldwide Freelancer</h3>
                                            </div>
                                        </div>
                                        <div
                                            className="t-link-box collapsed"
                                            data-toggle="collapse"
                                            data-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            <div className="img-box">
                                                <img src="images/f4.png" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>98%</h5>
                                                <h3>
                                                    Customer <br />
                                                    Satisfaction Rate
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="collapse show"
                                    id="collapseOne"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordion"
                                >
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt="" />
                                    </div>
                                </div>
                                <div
                                    className="collapse"
                                    id="collapseTwo"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordion"
                                >
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt="" />
                                    </div>
                                </div>
                                <div
                                    className="collapse"
                                    id="collapseThree"
                                    aria-labelledby="headingThree"
                                    data-parent="#accordion"
                                >
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt="" />
                                    </div>
                                </div>
                                <div
                                    className="collapse"
                                    id="collapseFour"
                                    aria-labelledby="headingfour"
                                    data-parent="#accordion"
                                >
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end freelance section */}
            {/* client section */}
            <section className="client_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-10 mx-auto">
                            <div className="heading_container">
                                <h2>Testimonial</h2>
                            </div>
                            <div
                                id="carouselExampleControls"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="detail-box">
                                            <h4>John Hissona</h4>
                                            <p>
                                                passages of Lorem Ipsum available, but the majority have
                                                suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable.
                                                If youThere are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration in s
                                            </p>
                                            <img src="images/quote.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="detail-box">
                                            <h4>John Hissona</h4>
                                            <p>
                                                passages of Lorem Ipsum available, but the majority have
                                                suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable.
                                                If youThere are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration in s
                                            </p>
                                            <img src="images/quote.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="detail-box">
                                            <h4>John Hissona</h4>
                                            <p>
                                                passages of Lorem Ipsum available, but the majority have
                                                suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable.
                                                If youThere are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration in s
                                            </p>
                                            <img src="images/quote.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carouselExampleControls"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carouselExampleControls"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end client section */}
            {/* info section */}
            <section className="info_section ">
                <div className="info_container layout_padding-top">
                    <div className="container">
                        <div className="info_top">
                            <div className="info_logo">
                                <img src="images/logo.png" alt="" />
                                <span>Spering</span>
                            </div>
                            <div className="social_box">
                                <a href="#">
                                    <img src="images/fb.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/twitter.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/linkedin.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/instagram.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="images/youtube.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="info_main">
                            <div className="row">
                                <div className="col-md-3 col-lg-2">
                                    <div className="info_link-box">
                                        <h5>Useful Link</h5>
                                        <ul>
                                            <li className=" active">
                                                <a className="" href="index.html">
                                                    Home <span className="sr-only">(current)</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a className="" href="about.html">
                                                    About{" "}
                                                </a>
                                            </li>
                                            <li className="">
                                                <a className="" href="work.html">
                                                    Work{" "}
                                                </a>
                                            </li>
                                            <li className="">
                                                <a className="" href="category.html">
                                                    Category{" "}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <h5>Offices</h5>
                                    <p>
                                        Readable content of a page when looking at its layoutreadable
                                        content of a page when looking at its layout
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-2 offset-lg-1">
                                    <h5>Information</h5>
                                    <p>
                                        Readable content of a page when looking at its layoutreadable
                                        content of a page when looking at its layout
                                    </p>
                                </div>
                                <div className="col-md-3  offset-lg-1">
                                    <div className="info_form ">
                                        <h5>Newsletter</h5>
                                        <form action="">
                                            <input type="email" placeholder="Email" />
                                            <button>Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-md-10 mx-auto">
                                <div className="info_contact layout_padding2">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <a href="#" className="link-box">
                                                <div className="img-box">
                                                    <img src="images/location.png" alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>Location</h6>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="link-box">
                                                <div className="img-box">
                                                    <img src="images/mail.png" alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>demo@gmail.com</h6>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-5">
                                            <a href="#" className="link-box">
                                                <div className="img-box">
                                                    <img src="images/call.png" alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h6>Call +01 1234567890</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end info section */}
            {/* footer section */}
            <footer className="container-fluid footer_section ">
                <div className="container">
                    <p>
                        © <span id="displayDate" /> All Rights Reserved By
                        <a href="https://html.design/">Free Html Templates</a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Index;