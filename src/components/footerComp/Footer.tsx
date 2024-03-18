import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="fh5co_footer_right_reserved py-4">
                <div className="container">
                    {/* <!-- <div className="container">

                    </div> --> */}


                    <div className="row">
                        <div className="col-md-4 mt-3">
                            <h4 className="footer-hdg mb-3">TOP PICKS</h4>
                            <Link href='https://newworldtrending.com/blog/70/ca-sakchi-jains-net-worth-age-salary-born-place' className="d-flex mt-3">
                                <div className="footer-blog-img"><img src="https://api.newworldtrending.com/blog/uploads/img-7fbd295e-3f30-42ff-8520-149498eac7c5.jpg" alt="CA Sakshi" /></div>
                                <div className="edit-blg-para">
                                    <p className="edit-para-fnt">CA Sakchi Jain's Net Worth - newworldtrending</p>
                                    <p className="edit-date-fnt">23 Jan 2024</p>
                                </div>

                            </Link>

                            <Link href='https://newworldtrending.com/blog/75/prabhu-prem-bhushan-ji-maharaj-biography-bhajan-wikipedia-religion-career-family-wife-children-achievements-and-more' className="d-flex mt-3">
                                <div className="footer-blog-img"><img src="https://api.newworldtrending.com/blog/uploads/img-a4ebc87b-ccde-4673-9aad-dead1e346d61.jpeg" alt="Prabhu Prem Bhushan" /></div>
                                <div className="edit-blg-para">
                                    <p className="edit-para-fnt">Prabhu Prem Bhushan Ji Maharaj Biography</p>
                                    <p className="edit-date-fnt">24 Jan 2024</p>
                                </div>

                            </Link>

                            <Link href='https://newworldtrending.com/blog/265/national-vaccination-day-in-india-2024-date-theme-history-and-significance' className="d-flex mt-3">
                                <div className="footer-blog-img"><img src="https://api.newworldtrending.com/blog/uploads/img-3b5b37f2-0318-4edd-af78-dec125d614d6.jpg" alt="National Vaccination Day" /></div>
                                <div className="edit-blg-para">
                                    <p className="edit-para-fnt">National Vaccination Day in India 2024</p>
                                    <p className="edit-date-fnt">16 Mar 2024</p>
                                </div>

                            </Link>
                        </div>

                        <div className="col-md-4 mt-3">
                            <h4 className="footer-hdg mb-3">ABOUT US</h4>
                            <p className="edit-para-fnt">
                                Welcome to <b>newworldtrending</b>, your go-to source for global trends. We bring you the latest news and insightful commentary across various domains
                            </p>
                            <h4 className="footer-hdg">FOLLOW US :</h4>
                            <div className="mt-4">
                                <i className="bi bi-facebook footer-icons"></i>
                                <i className="bi bi-instagram footer-icons share-icon-vws"></i>
                                <i className="bi bi-twitter-x footer-icons share-icon-vws"></i>
                                <i className="bi bi-whatsapp footer-icons share-icon-vws"></i>
                                <i className="bi bi-linkedin footer-icons share-icon-vws"></i>
                                <i className="bi bi-youtube footer-icons share-icon-vws"></i>
                            </div>
                            <h6 className="mt-4">
                                Contact us :  {"  "}
                                <Link href="mailto:tusharsahu2427@gmail.com" passHref>
                                    tusharsahu2427@gmail.com

                                </Link>
                            </h6>
                            {/* <p className="mt-5" style={{ color: 'white' }}>Contact us : <a href="#" className="text-decoration-none">tusharsahu2427@gmail.com</a></p> */}
                        </div>

                        <div className="col-md-4 mt-3">
                            <h4 className="footer-hdg mb-3">POPULAR CATEGORY</h4>
                            <div className="d-flex justify-content-between">
                                <p className="edit-para-fnt">CA Blogs</p>
                                <p className="edit-para-fnt">56</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="edit-para-fnt">Top Youtubers</p>
                                <p className="edit-para-fnt">20</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="edit-para-fnt">Top Famous People</p>
                                <p className="edit-para-fnt">34</p>
                            </div>
                            <h4 className="footer-hdg mb-3">Disclaimer</h4>
                            <p className="edit-para-fnt">
                                Sure, here's a very short disclaimer for a personal blog:

                                Opinions are the author's own. Content is for informational purposes. No accuracy or completeness is guaranteed. The author is not liable for any losses, injuries, or damages from the display or use of this information.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 col-md-6 py-2 Reserved"> © Copyright 2023 - {moment().format("YYYY")}, All rights reserved. Develop by
                            <Link
                                href=""
                                title="newworldtrending"> newworldtrending</Link>.Com</div>
                        <div className="col-12 col-md-6 spdp_right py-2">
                            <a href="/" className="footer_last_part_menu">Home</a>
                            <a href="/about-us" className="footer_last_part_menu">About</a>
                            <a href="/contact-us" className="footer_last_part_menu">Contact</a>
                            <a href="/" className="footer_last_part_menu">Latest News</a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer