import Twitter from "../images/Twitterblue.png";

const Presenter = ({ bio_pic, name, title, twitter_handle }) => {
  return (
    <div className="flex flex-col mt-10 text-black text-lg pb-2 mx-auto justify-center">
      <img
        src={bio_pic}
        alt="search hero"
        className="mx-6 w-48 h-48 rounded-full"
      />

      <div className=" flex mt-6 justify-center text-center">
        {name}
        <br></br>
        {title}
      </div>
      <div className="flex justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/youoldmaid"
        >
          {" "}
          <img src={Twitter} alt="twitter" className="w-12 object-contain" />
        </a>
        <div className="my-auto ml-2">{twitter_handle}</div>
      </div>
    </div>
  );
};

export default Presenter;
