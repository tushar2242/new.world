import Header from "./Header";


const Navbar: React.FC = () => {
    return (
        <>
            <div className="container-fluid fh5co_header_bg">
                <div className="container">
                    <div className="d-flex top-social-con">
                        <a href="#" className="color_fff ">
                            <i className="bi bi-stopwatch-fill"></i>&nbsp;&nbsp;&nbsp;Follow us on Social Media
                        </a>
                        <div className="d-inline-block fh5co_trading_posotion_relative">
                            <div className="footer_mediya_icon">
                                <div className="text-center d-inline-block">
                                    <a className="fh5co_display_table_footer" href="https://www.linkedin.com/in/newworld-trending-18b129286/">
                                        <div className="fh5co_verticle_middle"><i className="bi bi-linkedin"></i></div>
                                    </a>
                                </div>
                                <div className="text-center d-inline-block">
                                    <a href="https://www.facebook.com/profile.php?id=100095462762746" className="fh5co_display_table_footer">
                                        <div className="fh5co_verticle_middle">
                                            <i className="bi bi-facebook"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="text-center d-inline-block">
                                    <a href="https://www.instagram.com/newworld.trending/" className="fh5co_display_table_footer">
                                        <div className="fh5co_verticle_middle">
                                            <i className="bi bi-instagram"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="text-center d-inline-block">
                                    <a href="https://github.com/newworldtrending" className="fh5co_display_table_footer">
                                        <div className="fh5co_verticle_middle">
                                            <i className="bi bi-github"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Header />

        </>
    );
};

export default Navbar