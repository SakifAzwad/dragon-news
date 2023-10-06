import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">
          Manchester United is the Biggest Club in the world. We are going to
          win all possible trophies this season.
        </Link>
        <Link className="mr-12" to="/">
          Manchester United is the Biggest Club in the world. We are going to
          win all possible trophies this season.
        </Link>
        <Link className="mr-12" to="/">
          Manchester United is the Biggest Club in the world. We are going to
          win all possible trophies this season.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
