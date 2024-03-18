import React from 'react';
import { NextPage } from 'next';
import { useState } from 'react';
import Footer from '@/components/footerComp/Footer';
import Navbar from '@/components/NavbarComp/Navbar';


const url = 'https://api.newworldtrending.com/blog/upload'

function Index() {
  return (
    <>
      <Navbar />

      <TrendingSection />

      <NewsComponent />

      <Footer />
    </>
  )
}

export default Index;










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






