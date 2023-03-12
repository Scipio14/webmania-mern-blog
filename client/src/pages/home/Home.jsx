import classes from "./home.module.css";
import {
  Navbar,
  FeaturedBlogs,
  Categories,
  Newsletter,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedBlogs />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
