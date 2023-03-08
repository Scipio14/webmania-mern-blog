import classes from "./home.module.css";
import { Navbar,FeaturedBlogs } from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedBlogs/>
    </div>
  );
};
export default Home;
