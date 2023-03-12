import classes from "./footer.module.css";
import Mex from "../../assets/mex.svg";
const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            voluptatibus asperiores hic nam voluptas natus?
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>Youtube: Scipio</span>
          <span>Github: Scipio14</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent:America</span>
          <span>
            Country: Mexico{" "}
            <span>
              <img src={Mex} alt="Mexican Flag" />
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
