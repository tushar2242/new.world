import React from 'react'

import Footer from '@/components/footerComp/Footer'
import Navbar from '@/components/NavbarComp/Navbar'

const Index = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <main>
                    <section id="about-us">
                        <h1>About Us</h1>
                        <p>Welcome to <b>newworldtrending.com</b> , your number one source for all things trending in the world. We're dedicated to providing you with the latest news, the most interesting stories, and the most insightful commentary.</p>
                        <p>Founded in 2023, <b>newworldtrending.com</b>  has come a long way from its beginnings. When we first started out, our passion for sharing knowledge and creating a community drove us to start this blog.</p>
                        <p>We now serve readers all over the world, and we're thrilled that we're able to turn our passion into our own website. We hope you enjoy our content as much as we enjoy offering it to you.</p>
                        <p>At <b>newworldtrending.com</b> , we understand that the world is constantly changing, and staying informed can be challenging. That's why we're here - to sift through the noise and bring you the information you need, when you need it.</p>
                        <p>Our team of dedicated writers and editors work around the clock to bring you accurate, relevant, and engaging content. Whether you're interested in technology, fashion, politics, health, or entertainment, we've got you covered.</p>
                        <p>Thank you for being a part of our journey. We appreciate your support and look forward to growing, learning, and exploring the world with you.</p>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Index