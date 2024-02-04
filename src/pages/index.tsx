import React from 'react';
import { NextPage } from 'next';

function Index(){
  return(
    <>
    <Navbar/>

    <TrendingSection />

    <NewsComponent /> 
    </>
  )
}

export default Index;







const Navbar: React.FC = () => {
  return (
    <>
      <div className="container-fluid fh5co_header_bg">
        <div className="container">
          <div className="d-flex top-social-con">
            <a href="#" className="color_fff ">
              <i className="fa fa-clock-o"></i>&nbsp;&nbsp;&nbsp;Follow us on Social Media
            </a>
            <div className="d-inline-block fh5co_trading_posotion_relative">
              <div className="footer_mediya_icon">
                <div className="text-center d-inline-block">
                  <a className="fh5co_display_table_footer" href="https://www.linkedin.com/in/newworld-trending-18b129286/">
                    <div className="fh5co_verticle_middle"><i className="fa fa-linkedin"></i></div>
                  </a>
                </div>
                <div className="text-center d-inline-block">
                  <a href="https://www.facebook.com/profile.php?id=100095462762746" className="fh5co_display_table_footer">
                    <div className="fh5co_verticle_middle">
                      <i className="fa fa-brands fa-facebook"></i>
                    </div>
                  </a>
                </div>
                <div className="text-center d-inline-block">
                  <a href="https://www.instagram.com/newworld.trending/" className="fh5co_display_table_footer">
                    <div className="fh5co_verticle_middle">
                      <i className=" fa fa-brands fa-instagram"></i>
                    </div>
                  </a>
                </div>
                <div className="text-center d-inline-block">
                  <a href="https://github.com/newworldtrending" className="fh5co_display_table_footer">
                    <div className="fh5co_verticle_middle">
                      <i className="fa fa-brands fa-github"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-faded fh5co_padd_mediya padding_786">
        <div className="container padding_786">
          <nav className="navbar navbar-toggleable-md navbar-light ">
            <button className="navbar-toggler navbar-toggler-right mt-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span>
            </button>
            <a className="navbar-brand" href="#"><img src="images/logo.jpeg" alt="img" className="mobile_logo_width" /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="blog.html">Blog <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">Single <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">World <span className="sr-only">(current)</span></a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink_1">
                    <a className="dropdown-item" href="#">Action in</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Community<span className="sr-only">(current)</span></a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink_1">
                    <a className="dropdown-item" href="#">Action in</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="Contact_us.html">Contact <span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};




const TrendingSection: React.FC = () => {
  return (
    <>
      <div className="container-fluid paddding mb-5">
        <div className="row mx-0">
          <div className="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
            <div className="fh5co_suceefh5co_height">
              <img src="images/main/all-phone.png" alt="img" />
              <div className="fh5co_suceefh5co_height_position_absolute"></div>
              <div className="fh5co_suceefh5co_height_position_absolute_font_2 top-text-outer">
                <div className="home-text">
                  <a href="/all%20phone/all%20mobile.html" className="fh5co_good_font_3">
                    You Can Find All Phone Details and Compare all of there with specification
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              {/* Repeat similar structure for other items */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-3">
        <div className="container animate-box" data-animate-effect="fadeIn">
          <div>
            <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Trending</div>
          </div>
          <div className="owl-carousel owl-theme js" id="slider1">
            {/* Repeat similar structure for other trending items */}
          </div>
        </div>
      </div>
    </>
  );
};



const NewsComponent: NextPage = () => {
  return (
    <div>
      <div className="container-fluid pb-4 pt-5">
        <div className="container animate-box">
          <div>
            <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">News</div>
          </div>
          <div className="owl-carousel owl-theme" id="slider2">
            <div className="item px-2">
              <div className="fh5co_hover_news_img">
                <div className="fh5co_news_img"><img src="images/39-324x235.jpg" alt="" /></div>
                <div>
                  <a href="#" className="d-block fh5co_small_post_heading"><span className="">The top 10 best computer speakers in the market</span></a>
                  <div className="c_g"><i className="fa fa-clock-o"></i> Oct 16, 2017</div>
                </div>
              </div>
            </div>
            {/* ... Rest of the carousel items ... */}
          </div>
        </div>
      </div>

      <div className="container-fluid fh5co_video_news_bg pb-4">
        <div className="container animate-box" data-animate-effect="fadeIn">
          <div>
            <div className="fh5co_heading fh5co_heading_border_bottom pt-5 pb-2 mb-4 text-white">Video News</div>
          </div>
          <div>
            <div className="owl-carousel owl-theme" id="slider3">
              <div className="item px-2">
                <div className="fh5co_hover_news_img">
                  <div className="fh5co_hover_news_img_video_tag_position_relative">
                    {/* ... Rest of the video news item ... */}
                  </div>
                  <div className="pt-2">
                    <a href="#" className="d-block fh5co_small_post_heading fh5co_small_post_heading_1">
                      <span className="">The top 10 funniest videos on YouTube </span>
                    </a>
                    <div className="c_g"><i className="fa fa-clock-o"></i> Oct 16, 2017</div>
                  </div>
                </div>
              </div>
              {/* ... Rest of the video carousel items ... */}
            </div>
          </div>
        </div>
      </div>

      {/* ... Rest of the HTML code ... */}

      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="fa fa-arrow-up"></i></a>
      </div>
    </div>
  );
};

