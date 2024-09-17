import Ai from "../assets/Image/ailogo.png";
import cal from "../assets/Image/clalogo.png";

const Aicalender = () => {
  return (
    <div>
      <div className=" ">
        <div className=" absolute bottom-9  p-3 rounded-full drop-shadow-xl right-1">
          <div className="  rounded-full bg-secondary p-2">
            <img className=" size-6" src={Ai} alt="" />
          </div>
          <div className="  rounded-full mt-5 bg-secondary p-2">
            <img className=" size-6" src={cal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aicalender;
