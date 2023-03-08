import classes from "./featuredBlogs.module.css";
import mountainImg1 from "../../assets/mountain1.jpg";
import mountainImg2 from "../../assets/mountain2.jpg";
import mountainImg3 from "../../assets/mountain3.jpg";
import { MdOutlinePreview } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Featured Blogs</h3>
        <div className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={mountainImg1} />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>Nature</span>
                  <div className={classes.metadata}>
                    <MdOutlinePreview /> 123 views
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike /> 100 likes
                  </div>
                </div>
                <h4>Blog 1 Title</h4>
                <p className={classes.blogDesc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  sint aliquam rem cupiditate ullam saepe.
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span>
                    <span>Author:</span> Scipio
                  </span>
                  <span>
                    <span>Created:</span> October 31st 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg2} />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 2 title</h4>
                <p className={classes.desc}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                  magni in dignissimos!
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span>
                    <span>Author:</span> Scipio
                  </span>
                  <br />
                  <span>
                    <span>Created:</span> October 30th 2022
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg3} />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 3 title</h4>
                <p className={classes.desc}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                  magni in dignissimos!
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span>
                    <span>Author:</span> Scipio
                  </span>
                  <span>
                    <span>Created:</span> October 30th 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedBlogs;
