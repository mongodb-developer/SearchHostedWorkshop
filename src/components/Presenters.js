import Presenter from "./Presenter";
import Karen from "../images/KWH14.png";
import Chai from "../images/Chai.jpeg";
import Rick from "../images/Rick.png";

const Presenters = () => {
  return (
    <div className="flex w-full justify-evenly items-center text-black px-20">
      <Presenter
        bio_pic={Chai}
        name="Chaitanya Varanasi"
        title="Senior Solutions Architect"
        twitter_handle="@tryChai"
      />
      <Presenter
        bio_pic={Karen}
        name="Karen Huaulmé"
        title="Principal Developer Advocate"
        twitter_handle="@YouOldMaid"
      />
      <Presenter
        bio_pic={Rick}
        name="Rick Houlihan"
        title="Director, Developer Relations"
        twitter_handle="@houlihan_rick"
      />
    </div>
  );
};

export default Presenters;
