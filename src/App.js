import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.css";

import Header from "./Header";
import Footer from "./Footer";

import ErrorPage from "./routes/error-page";
import AboutPage from "./routes/about";
import HomePage from "./routes/home";
import PostPage from "./routes/post";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}
