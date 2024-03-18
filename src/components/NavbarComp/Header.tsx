import React, { useState } from "react";



const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [subMenu, setSubMenu] = useState('');
    const [menuTitle, setMenuTitle] = useState('');

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const toggleSubMenu = (e: any) => {
        const target = e.target.closest('.menu__dropdown');
        if (target) {

            setMenuTitle(target.textContent.trim());
        }
    };

    const handleSubCate = (val: string) => {

        setSubMenu('val')
    }

    const hideSubMenu = () => {

        setMenuTitle('');
    };

    return (
        <header className={
            `header main-header-nav mb-3`}>
            <nav className="navbar container-1">
                <section className="navbar__left">
                    <a href="https://newworldtrending.com/" className="brand main-header-logo">
                        <img src="https://api.newworldtrending.com/blog/uploads/img-86e93359-eeec-435b-afe7-69ebbc3d0174.png" alt="logo" className="logo-div" />
                    </a>
                    <div className="burger" id="burger" onClick={toggleMenu}>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </div>
                </section>
                <section className="">
                    <span className={isMenuActive ? "overlay is-active" : 'overlay '} onClick={toggleMenu}></span>
                    <div className={isMenuActive ? " menu is-active" : 'menu'} id="menu">
                        <div className="menu__header">
                            <span className="menu__arrow" onClick={hideSubMenu}><i className="bx bx-chevron-left"></i></span>
                            <span className="menu__title">{menuTitle}</span>
                        </div>
                        <ul className="menu__inner" onClick={toggleSubMenu}>
                            <li className="menu__item"><a href="/" className="menu__link">Home</a></li>
                            <li className="menu__item menu__dropdown" >
                                <a href="#" className="menu__link" onClick={() => handleSubCate('blog')}>
                                    Blogs
                                    <i className="bi bi-chevron-right" style={{ fontSize: '15px' }}></i>
                                </a>
                                {subMenu === 'blog' && <div className=" megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sports</h4>
                                        <ul className="submenu__list">
                                            <li><a href="https://newworldtrending.com/blog/56/free-fire-50000-diamonds-hack-for-free-without-human-verification">Free Fire</a></li>
                                            <li><a href="#">Cricket</a></li>
                                            <li><a href="https://newworldtrending.com/blog/58/philadelphia-76ers-hub-breaking-news-exciting-videos-full-schedule-updated-roster-and-key-stats">Basketball</a></li>
                                            <li><a href="#">Pubg</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Teachers</h4>
                                        <ul className="submenu__list">
                                            <li><a href="https://newworldtrending.com/IIT_Teachers/Mohit_Dadheech.html">IIT Teachers</a></li>
                                            <li><a href="https://newworldtrending.com/Vivek/CA_Rishabh_Rohra.html">CA Teachers</a></li>
                                            <li><a href="#">UPSE Teachers</a></li>
                                            <li><a href="https://newworldtrending.com/Coding/Telusko.html">Tech Teachers</a></li>
                                            <li><a href="#">STATE PCS Teachers</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">YouTubers</h4>
                                        <ul className="submenu__list">
                                            <li><a href="https://newworldtrending.com/blog/54/ajju-bhai-unveiling-the-gaming-maestros-journey-total-gaming-face-reveal-achievements-and-more">Gamer</a></li>
                                            <li><a href="#">Influencers</a></li>
                                            {/* <li><a href="#"></a></li> */}
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Spiritual</h4>
                                        <ul className="submenu__list">
                                            <li><a href="https://newworldtrending.com/blog/36/harshvardhan-verma-ayodhyawale-unveiling-the-story-of-a-young-creator">Ram Mandir</a></li>
                                            <li><a href="#">Kashi</a></li>
                                            <li><a href="#">Khatu Shyam </a></li>
                                            <li><a href="#">Ujjain Dham</a></li>
                                            <li><a href="#">Ayodhya Dham</a></li>
                                        </ul>
                                    </div>

                                </div>}
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link" onClick={() => handleSubCate('more')}>
                                    More
                                    <i className="bi bi-chevron-right" style={{ fontSize: '15px' }}></i>
                                </a>
                                {subMenu === 'more' && <div className="megamenu__image">
                                    <div className="submenu__inner">
                                        <a href="#">
                                            <img
                                                src="https://plus.unsplash.com/premium_photo-1677013011737-ba61149ba70c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                className="submenu-image"
                                                alt=""
                                            />
                                            <span className="submenu__title">Home</span>
                                        </a>
                                    </div>
                                    <div className="submenu__inner">
                                        <a href="#">
                                            <img
                                                src="https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                className="submenu-image"
                                                alt=""
                                            />
                                            <span className="submenu__title">Beauty</span>
                                        </a>
                                    </div>
                                    <div className="submenu__inner">
                                        <a href="#">
                                            <img
                                                src="https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                className="submenu-image"
                                                alt=""
                                            />
                                            <span className="submenu__title">Holiday</span>
                                        </a>
                                    </div>
                                    <div className="submenu__inner">
                                        <a href="#">
                                            <img
                                                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                className="submenu-image"
                                                alt=""
                                            />
                                            <span className="submenu__title">Sale</span>
                                        </a>
                                    </div>
                                </div>}
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Account
                                </a>
                            </li>

                        </ul>
                    </div>
                </section>
                <section className="navbar__right">
                    <h6 className="switch" id="switch">
                        {/* Dark mode switch */}
                    </h6>
                </section>
            </nav>
        </header>
    );
};


export default Header