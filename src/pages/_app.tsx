import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@/styles/_newcopyfile.css';
import '@/styles/animate.css'
import '@/styles/blogdetails.css'
import '@/styles/bootstrap.css'
import '@/styles/editHome.css'
// import '@/styles/bootstrap.css.map'
import '@/styles/blogdetails.css'
import '@/styles/owl.carousel.css'
import '@/styles/owl.theme.default.css'
// import '@/styles/style_1.css.map'
import '@/styles/style_1.css'
import '@/styles/media_query.css';

import '@/styles/_blog.scss';
import '@/styles/footer.scss';



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
