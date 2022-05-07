import AWS from "../images/AWS.png";
import Accenture from "../images/accenture.png";

const Sponsors = () => {
  return (
    <div className="mx-10 mt-8 text-center w-full text-lg p-2 ">
      <img src={AWS} alt="AWS" className="mx-auto mt-4 items-center w-2/3 " />

      <img
        src={Accenture}
        alt="Accenture"
        className="mx-auto mt-8 items-center w-full "
      />
    </div>
  );
};

export default Sponsors;
