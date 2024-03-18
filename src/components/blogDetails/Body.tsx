import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
// import Image from "next/image";
import { getSingleImageUrl } from "@/helper/getImageUrl";
import Head from "next/head";
import { MDBRipple } from "mdb-react-ui-kit";
import Gallery from "./Gallery";
// import { Navbar } from "@/pages";
import Footer from "../footerComp/Footer";

const publicUrl = "https://api.newworldtrending.com/blog";

interface BlogDetailProps {
    blogData: {
        title: string;
        description: string;
        author: string;
        banner: string[];
        publishedDate: string; // Adjust the type as needed
        content: string;
        facebookLink: string;
        instagramLink: string;
        youtubeLink: string;
        tags: string[]; // Adjust the type as needed
        categories: string[]; // Adjust the type as needed
        featuredImages: string[];
    };
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogData }) => {
    const {
        title,
        description,
        author,
        banner,
        facebookLink,
        instagramLink,
        categories,
        featuredImages
    } = blogData;

    return (
        <>
            <Head>
                <meta property="og:title" content={`${title} -newworldtrending`} />
                <meta name="description" content={description} />
                <link rel="canonical" href={`https://newworldtrending.com/`} />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={`${title} -newworldtrending`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={banner[0]} />
                <meta property="og:url" content={facebookLink} />
                <meta property="og:type" content="article" />
                <meta property="og:article:author" content={author} />

                {/* Instagram */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${title} -newworldtrending`} />
                <meta property="og:description" content={description} />
                <meta
                    property="og:image"
                    content={banner.length > 0 ? banner[0] : undefined}
                />
                <meta property="og:url" content={instagramLink} />
                <meta
                    property="og:site_name"
                    content={"https://newworldtrending.com/"}
                />

                {/* Other meta tags */}
                <title>{title} - newworldtrending</title>
                <meta
                    name="keywords"
                    content={categories.map((category: any) => category).join(",")}
                />

                <meta name="author" content={author} />
                <meta name="robots" content="index, follow" />

            </Head>


            {/* <Navbar /> */}

            <div className="blog-dtl-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">

                            <DetailsofContent
                                author={blogData.author}
                                title={blogData.title}
                                date={blogData.publishedDate}
                                content={blogData.content}
                                facebookLink={blogData.facebookLink}
                                instagramLink={blogData.instagramLink}
                                youtubeLink={blogData.youtubeLink}
                                bannerImg={blogData.banner}
                            />

                            <Gallery imgUrls={featuredImages} />

                            <CommentBoxForm />
                        </div>
                        <div className="col-md-4">
                            <RecentSearch />
                            <RecentArticle title="Recent Posts" data={[]} />
                            <RecentPost title="Tags" data={blogData.tags} />
                            <RecentPost title="Categories" data={blogData.categories} />
                        </div>
                    </div>
                </div>
            </div>


            <Footer />


        </>
    );
};

export default BlogDetail;

interface DetailsofContentProps {
    author: string;
    date: string;
    content: string;
    facebookLink: string;
    instagramLink: string;
    title: string;
    youtubeLink: string;
    bannerImg: string[];
}

const DetailsofContent: React.FC<DetailsofContentProps> = ({
    author,
    date,
    content,
    facebookLink,
    instagramLink,
    bannerImg,
    youtubeLink,
    title,
}) => {
    return (
        <>
            <div className="blg-dtl-boxvw mt-3">
                <h1 className="h1-heading-fntsz">{title} - newworldtrending</h1>
                <p className="date-fntvw">
                    {date} By {author}
                </p>

                <ImageSlider bannerImage={bannerImg[0]} />

                <SocialIcons
                    facebookLink={facebookLink}
                    instagramLink={instagramLink}
                    youtubeLink={youtubeLink}
                />

                <div dangerouslySetInnerHTML={{ __html: content }} />

                {/* <ul>
          <li className="para-fnt-szvw">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus
            porro dicta aut dignissimos distinctio voluptatem tenetur sit omnis
            quas.
          </li>
        </ul>

        <ol>
          <li className="para-fnt-szvw">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            odio sunt facilis sed repudiandae repellendus nam dolorum magnam
            harum sapiente.
          </li>
        </ol>

        <h3 className="h3-fntsz-heading">
          Lorem ipsum dolor sit amet consectetur.
        </h3> */}
            </div>
        </>
    );
};

// const BlogDetailTable = () => {
//   return (
//     <>
//       <table className="mt-3">
//         <thead>
//           <tr className="table-hd-fntsz">
//             <th>Heading 1</th>
//             <th>Heading 2</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr className="para-fnt-szvw">
//             <td>Table Data 1</td>
//             <td>Table Data 2</td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// };

const RecentSearch = () => {
    return (
        <>
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
        </>
    );
};

const RecentArticle = (data: any) => {
    return (
        <>
            <div className="blg-dtl-boxvw mt-3">
                <h5 className="h5-tag-fntsz">{data.title}</h5>
                <a>
                    <h6 className="linking-fnt-sz">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
                        cumque!
                    </h6>
                </a>
                <a>
                    <h6 className="linking-fnt-sz">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
                        cumque!
                    </h6>
                </a>
            </div>
        </>
    );
};

const CommentBoxForm = () => {
    return (
        <>
            <div className="blg-dtl-boxvw mt-3">
                <h5 className="h5-tag-fntsz">Leave a Comment</h5>
                <form>
                    <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        className="search-blg-input mt-2"
                        placeholder="Say something ..."
                    ></textarea>
                    <input
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
        </>
    );
};

interface SocialIconsProps {
    facebookLink: string;
    instagramLink: string;
    youtubeLink: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
    facebookLink,
    instagramLink,
    youtubeLink,
}) => {
    return (
        <>
            <div className="d-flex mt-3 mb-3 social-icon-outer">
                {facebookLink && (
                    <div className="social-icon-box">
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook fs-4"></i>
                        </a>
                    </div>
                )}

                {instagramLink && (
                    <div className="social-icon-box ms-2">
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram fs-4"></i>
                        </a>
                    </div>
                )}

                {youtubeLink && (
                    <div className="social-icon-box ms-2">
                        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-youtube fs-4"></i>
                        </a>
                    </div>
                )}
            </div>
        </>
    );
};

interface ImageSliderProps {
    bannerImage: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ bannerImage }) => {
    return (
        <>
            <MDBRipple rippleTag="a">
                <img
                    src={getSingleImageUrl(bannerImage)}
                    className="img-fluid rounded blg-dtl-img banner-img"
                    alt="example"
                />
            </MDBRipple>
        </>
    );
};

const CarouselImage: React.FC<{ src: string; alt: string }> = ({
    src,
    alt,
}) => {
    return (
        <div className="blg-dtl-imgbx mt-3 mb-2">
            <img
                src={src}
                alt={alt}
                className="blg-dtl-img rounded shadow-sm"
                width={100}
                height={350}
            />
        </div>
    );
};

const CarouselVideo: React.FC<{ youtubeLink: string }> = ({ youtubeLink }) => {
    return (
        <div className="mt-3 mb-2">
            <iframe
                title="Embedded Content"
                width="100%"
                height="350"
                src={youtubeLink}
                allowFullScreen
                className="rounded blg-dtl-imgbx"
            ></iframe>
        </div>
    );
};


interface RecentPostProps {
    title: string;
    data: string[];
}

const RecentPost: React.FC<RecentPostProps> = ({ title, data }) => {
    return (
        <>
            <div className="blg-dtl-boxvw mt-3">
                <h5 className="h5-tag-fntsz">{title}</h5>
                {data?.map((item, index) => (
                    <a key={index}>
                        <h6 className="linking-fnt-sz">{item}</h6>
                    </a>
                ))}
            </div>
        </>
    );
};

export async function getServerSideProps(context: any) {
    const { params } = context;
    const blogId = params.id;

    const apiUrl = `${publicUrl}/get_blog_by_id/${blogId}`;

    try {
        const response = await axios.get(apiUrl);
        const blogData = response.data.data;

        // Now 'blogData' contains the data fetched from the API
        // console.log(blogData);

        // Pass the fetched data as props
        return {
            props: {
                blogData,
            },
        };
    } catch (error) {
        console.error("Error fetching blog data:", error);

        // If an error occurs, you can still return an empty props object or handle it accordingly
        return {
            props: {},
        };
    }
}

// {
//   bannerImage.map((image, index) => (
//     <Carousel.Item key={index} interval={1000}>
//       <CarouselImage
//         src={getSingleImageUrl(image)}
//         alt={`Slide ${index + 1}`}
//       />
//     </Carousel.Item>
//   ));
// }
