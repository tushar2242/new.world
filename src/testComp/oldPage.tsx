import Navbar from '@/components/NavbarComp/Navbar'
import BlogDetail from '@/components/blogDetails/Body'

import Head from 'next/head'
import React from 'react'

export const index = () => {
    return (
        <>
            <Head>


                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{"title"} - newworldtrending</title>
                <meta name="description" content="<?= $blogDa" />
                <link rel="canonical" href="<?= 'https://world.blog.newworldtrending.com/blog/' . $blogData['id'] . '/' . titleToSlug($blogData['title']) ?>" />



                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-N3E0SGCJXP"></script>
                <script>
                    {/* window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-N3E0SGCJXP'); */}
                </script>



                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:title" content="<?=" />
                <meta property="og:description" content="<?= $blogDa" />
                <meta property="og:image" content="<?= $imgUrl" />
                <meta property="og:url" content="<?= $blog" />
                <meta property="og:type" content="article" />
                <meta property="og:article:author" content="<?= $" />

                {/* <!-- Instagram --> */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="<?= $blogData[" />
                <meta property="og:description" content="<?= $blogData" />
                <meta property="og:image" content="<?= $blogData" />
                <meta property="og:url" content="<?= $blogData[" />
                <meta property="og:site_name" content="https://newworldtrending.com/" />

                {/* <!-- Other meta tags --> */}
                <title>{'title'} - newworldtrending</title>
                <meta name="keywords" content="<?= " />
                <meta name="author" content="<?= $blogData[" />
                <meta name="robots" content="index, follow" />
                <link rel="shortcut icon" href="https://api.newworldtrending.com/blog/uploads/img-86e93359-eeec-435b-afe7-69ebbc3d0174.png" type="image/x-icon" />


                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                    crossOrigin="anonymous"
                ></link>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                    crossOrigin="anonymous"
                ></script>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
                    integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd"
                    crossOrigin="anonymous"
                ></link>
                {/* <!-- Add more meta tags as needed for SEO --> */}


                {/* <!--adding the css for     --> */}





            </Head>

            {/* <BlogDetail /> */}


            <div>


                <Navbar />


                <div className="blog-dtl-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">


                                <h1 className="h1-heading-fntsz">{'title'} - newworldtrending</h1>
                                <p className="date-fntvw">{"author"}</p>

                                <img src={''} className="img-fluid rounded b/lg-dtl-img banner-img" alt="example" />;


                                {/* <?php
                                    // Include your SocialIcons component logic here
                                    $facebookLink = $blogData["facebookLink"];
                                    $instagramLink = $blogData["instagramLink"];
                                    $youtubeLink = $blogData["youtubeLink"]; */}

                                <div className="d-flex mt-3 mb-3 social-icon-outer">';
                                    {/* if ($facebookLink) { */}
                                    <div className="social-icon-box">';
                                        <a href="' .
                                $facebookLink .
                                '" target="_blank" rel="noopener noreferrer">';
                                            <i className="bi bi-facebook fs-4"></i>';
                                        </a>
                                    </div>



                                    <div className="social-icon-box ms-2">';
                                        <a href="' .
                                $instagramLink .
                                '" target="_blank" rel="noopener noreferrer">';
                                            <i className="bi bi-instagram fs-4"></i>';
                                        </a>
                                    </div>


                                    {/* if ($youtubeLink) { */}
                                    <div className="social-icon-box ms-2">
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-youtube fs-4"></i>;
                                        </a>
                                    </div>

                                </div>


                                {/* <div>{'blogdata'}</div> ?> */}

                                <div className="container-fluid gallery-container">
                                    <div className="row">
                                        {/* <?php foreach ($blogData["featuredImages"] as $index => $url): ?> */}
                                        <div className="col-sm-12 col-md-6 col-xl-4">
                                            <div className="gallery-card">
                                                <img className="gallery-thumbnail" src="<?= $imgUrl. $url ?>" alt="" />

                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="blg-dtl-boxvw mt-3">
                                    <h5 className="h5-tag-fntsz">Leave a Comment</h5>
                                    <form action="" method="POST">
                                        <textarea
                                            name="comment"
                                            id=""
                                            cols={30}
                                            rows={10}
                                            className="search-blg-input mt-2"
                                            placeholder="Say something ..."
                                        ></textarea>
                                        <input
                                            name="name"
                                            type="text"
                                            className="search-blg-input mt-2"
                                            placeholder="Name*"
                                        />
                                        <input
                                            type="email"
                                            className="search-blg-input mt-2"
                                            placeholder="Email*"
                                        />
                                        <input
                                            name="webiste"
                                            type="text"
                                            className="search-blg-input mt-2"
                                            placeholder="Website*"
                                        />
                                        <div className="mb-3 d-flex mt-3">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="exampleCheck1"
                                            />
                                            <label className="ms-2 check-label" htmlFor="exampleCheck1">
                                                Save my name, email, and website in this browser for the next time
                                                I comment.
                                            </label>
                                        </div>
                                        <div>
                                            <button className="post-comment-btn" type="button">Post Comment</button>
                                        </div>
                                    </form>
                                </div>


                            </div>







                            <div className="col-md-4">
                                <div className="blg-dtl-boxvw mt-3">
                                    <form action="" className="d-flex">
                                        <input
                                            type="text"
                                            placeholder="Search here..."
                                            className="search-blg-input"
                                        />
                                        <div className="search-iconbox">
                                            <i className="bi bi-search fs-5"></i>
                                        </div>
                                    </form>
                                </div>


                                <div className="blg-dtl-boxvw mt-3">
                                    <h5 className="h5-tag-fntsz">Tags</h5>
                                    {/* <?php if (!empty($blogData["tags"])): ?>
                                    <?php foreach ($blogData["tags"] as $index => $item): ?> */}
                                    <a href="#">
                                        <h6 className="linking-fnt-sz">{"category"}</h6>
                                    </a>
                                    {/* <?php endforeach; ?>
                                    <?php endif; ?> */}
                                </div>

                                <div className="blg-dtl-boxvw mt-3">
                                    <h5 className="h5-tag-fntsz">Categories</h5>
                                    {/* <?php if (!empty($blogData["categories"])): ?>
                                    <?php foreach ($blogData["categories"] as $index => $item): ?> */}
                                    <a href="#">
                                        <h6 className="linking-fnt-sz">{"tags"}</h6>
                                    </a>
                                    {/* <?php endforeach; ?>
                                    <?php endif; ?> */}
                                </div>

                            </div>




                        </div>
                    </div>
                </div>




                <footer className="fh5co_footer_right_reserved py-4">
                    <div className="container">
                        {/* <!-- <div className="container">

                    </div> --> */}


                        <div className="row">
                            <div className="col-md-4 mt-3">
                                <h4 className="footer-hdg mb-3">EDITOR PICKS</h4>
                                <div className="d-flex mt-3">
                                    <div className="footer-blog-img"><img src="../images/tempBlog/tempMain.png" alt="Editor-image" /></div>
                                    <div className="edit-blg-para">
                                        <p className="edit-para-fnt">This is Best Website For Blogging.</p>
                                        <p className="edit-date-fnt">Dec 29, 2023</p>
                                    </div>

                                </div>

                                <div className="d-flex mt-3">
                                    <div className="footer-blog-img"><img src="../images/tempBlog/tempMain.png" alt="Editor-image" /></div>
                                    <div className="edit-blg-para">
                                        <p className="edit-para-fnt">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                        <p className="edit-date-fnt">Dec 29, 2023</p>
                                    </div>

                                </div>

                                <div className="d-flex mt-3">
                                    <div className="footer-blog-img"><img src="../images/tempBlog/tempMain.png" alt="Editor-image" /></div>
                                    <div className="edit-blg-para">
                                        <p className="edit-para-fnt">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                        <p className="edit-date-fnt">Dec 29, 2023</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 mt-3">
                                <h4 className="footer-hdg mb-3">ABOUT US</h4>
                                <p className="edit-para-fnt" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic saepe pariatur atque impedit possimus repellat similique voluptatem totam necessitatibus.</p>
                                <h4 className="footer-hdg">FOLLOW US :</h4>
                                <div className="mt-4">
                                    <i className="bi bi-facebook footer-icons"></i>
                                    <i className="bi bi-instagram footer-icons share-icon-vws"></i>
                                    <i className="bi bi-twitter-x footer-icons share-icon-vws"></i>
                                    <i className="bi bi-whatsapp footer-icons share-icon-vws"></i>
                                    <i className="bi bi-linkedin footer-icons share-icon-vws"></i>
                                    <i className="bi bi-youtube footer-icons share-icon-vws"></i>
                                </div>

                                <p className="mt-5">Contact us : <a href="#" className="text-decoration-none">tusharsahu2427@gmail.com</a></p>
                            </div>

                            <div className="col-md-4 mt-3">
                                <h4 className="footer-hdg mb-3">POPULAR CATEGORY</h4>
                                <div className="d-flex justify-content-between">
                                    <p className="edit-para-fnt">Lorem</p>
                                    <p className="edit-para-fnt">125</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="edit-para-fnt">Lorem</p>
                                    <p className="edit-para-fnt">125</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="edit-para-fnt">Lorem</p>
                                    <p className="edit-para-fnt">125</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-md-6 py-4 Reserved"> © Copyright 2023, All rights reserved. Design by <a href=""
                                title="newworldtrending">Newworldtrending</a>.Com</div>
                            <div className="col-12 col-md-6 spdp_right py-4">
                                <a href="#" className="footer_last_part_menu">Home</a>
                                <a href="/contact-us" className="footer_last_part_menu">About</a>
                                <a href="/contact-us" className="footer_last_part_menu">Contact</a>
                                <a href="blog.html" className="footer_last_part_menu">Latest News</a>
                            </div>
                        </div>

                    </div>
                </footer>
            </div >
        </>
    )
}


export default index







export const getServerSideProps = async () => {

    const blogData = await fetch('https://api.newworldtrending.com/blog').then(res => res.json());

    return {
        props: {
            blogData
        }
    };
};