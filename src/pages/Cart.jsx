import Aicalender from "../components/Aicalender";
import Navbar from "../components/Navbar";
import logo from "../assets/Image/cartlogo.png";
import { FcLock } from "react-icons/fc";


const Cart = () => {
  return (
    <>
      <Navbar />
      <Aicalender />
      <div className=" relative container border-2 p-5 rounded-xl h-svh flex mt-24 mx-auto ">
        <div className="w-4/6  container">
          <h2 className=" font-inter text-xl font-semibold"> Course Cart</h2>
          <div className="mt-6">
            <div className="flex justify-between border-y-2 p-5 my-auto">
              <div className="flex ">
                <img className=" size-12" src={logo} alt="logo" />
                <div className="px-2 space-y-2 ">
                  <h2 className=" text-lg font-inter font-semibold">
                    Generative AI Course
                  </h2>
                  <p className="text-sm">by Author name</p>
                  <div className="flex space-x-5 font-inter text-xs underline">
                    <p>14.5 total hours</p>
                    <p>6 modules</p>
                    <p>Intermediate level</p>
                  </div>
                </div>
              </div>
              <div className="my-auto font-inter">
                <button className=" underline">Remove from cart</button>
              </div>
              <div className="my-auto font-inter text-secondary">
                <p>₹5,000</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-right font-inter p-2"> 1 Courses in Cart</p>
        </div>
        <div className="w-2/6 px-10 mt-8">
          <div className="flex justify-between">
            <h2 className="font-inter text-2xl font-semibold">Total:</h2>
            <p className="font-inter text-2xl font-semibold">5,000</p>
          </div>
          <button className=" font-inter text-xl font-semibold p-2 w-full mt-7 rounded-md text-white bg-green-900">
            Checkout
          </button>
        </div>

        <div className=" absolute bottom-2 flex ">
          <FcLock size={20} />
          <p className="font-inter text-sm my-auto px-1 text-secondary ">
            {" "}
            Secure transaction
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart