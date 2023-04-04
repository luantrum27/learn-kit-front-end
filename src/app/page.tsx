import { plains } from "@/store/plans";
import Banner from "./components/Banner";
import CardCourse from "./components/CardCourse";
import Navbar from "./components/Navbar";
import PlainCard from "./components/PlainCard";
import OurCourses from "./components/OurCourses";
import JoinWithUs from "./components/JoinWithUs";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import OurBlog from "./components/OurBlog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
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
