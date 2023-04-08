import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import OurCourses from "./components/OurCourses";
import JoinWithUs from "./components/JoinWithUs";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import OurBlog from "./components/OurBlog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar currentPage={"Home"} />
      <Banner />
      <OurCourses />
      <JoinWithUs />
      <Plans />
      <Testimonials />
      <OurBlog />
      <Footer />
    </>
  )
}
