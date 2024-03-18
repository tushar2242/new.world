import Navbar from '@/components/NavbarComp/Navbar'
import Footer from '@/components/footerComp/Footer'
import React from 'react'

const Index = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid fh5co_fh5co_bg_contcat">
                <div className="container">
                    <div className="row py-4">
                        <div className="col-md-4 py-3">
                            <div className="row fh5co_contact_us_no_icon_difh5co_hover">
                                <div className="col-3 fh5co_contact_us_no_icon_difh5co_hover_1">
                                    <div className="fh5co_contact_us_no_icon_div"> <span><i className="bi bi-telephone-outbound"></i></span> </div>
                                </div>
                                <div className="col-9 align-self-center fh5co_contact_us_no_icon_difh5co_hover_2">
                                    <span className="c_g d-block">Call Us</span>
                                    <span className="d-block c_g fh5co_contact_us_no_text">+91 9584872001</span>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="col-md-4 py-3">
                            <div className="row fh5co_contact_us_no_icon_difh5co_hover">
                                <div className="col-3 fh5co_contact_us_no_icon_difh5co_hover_1">
                                    <div className="fh5co_contact_us_no_icon_div">
                                        <span><i className="bi bi-envelope-at-fill"></i></span> </div>
                                </div>
                                <div className="col-9 align-self-center fh5co_contact_us_no_icon_difh5co_hover_2">
                                    <span className="c_g d-block">Have any questions?</span>
                                    <span className="d-block c_g fh5co_contact_us_no_text">tusharsahu2427@gmail.com</span>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="col-md-4 py-3">
                            <div className="row fh5co_contact_us_no_icon_difh5co_hover">
                                <div className="col-3 fh5co_contact_us_no_icon_difh5co_hover_1">
                                    <div className="fh5co_contact_us_no_icon_div"> <span><i className="bi bi-pin-map"></i></span> </div>
                                </div>
                                <div className="col-9 align-self-center fh5co_contact_us_no_icon_difh5co_hover_2">
                                    <span className="c_g d-block">Address</span>
                                    <span className="d-block c_g fh5co_contact_us_no_text"> Ayodhya , U.P. 224001 India</span>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-4">
                <div className="container">
                    <div className="col-12 text-center contact_margin_svnit ">
                        <div className="text-center fh5co_heading py-2">Contact Us</div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <form className="row" id="fh5co_contact_form">
                                <div className="col-12 py-3">
                                    <input type="text" className="form-control fh5co_contact_text_box" placeholder="Enter Your Name" />
                                </div>
                                <div className="col-6 py-3">
                                    <input type="text" className="form-control fh5co_contact_text_box" placeholder="E-mail" />
                                </div>
                                <div className="col-6 py-3">
                                    <input type="text" className="form-control fh5co_contact_text_box" placeholder="Subject" />
                                </div>
                                <div className="col-12 py-3">
                                    <textarea className="form-control fh5co_contacts_message" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12 py-3 text-center"> <a href="#" className="btn contact_btn">Send Message</a> </div>
                            </form>
                        </div>
                        <div className="col-12 col-md-6 align-self-center">
                            <iframe src="#" className="map_sss" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index