import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import certificate from "../assets/Image/certificate.png";

const MyCertificates = () => {
  return (
    <>
      <Navbar />
      <Aicalender />
      <div>
        <div>
          <div className="flex  place-content-center ">
            <div className="bg-secondary justify-items-center py-2 font-inter text-cer w-1/2 text-center rounded-lg ">
              <h2 className=" py-2 text-2xl font-semibold underline ">
                Advance your subject-matter expertise
              </h2>

              <li className=" list-decimal list-outside text-center py-2 font-normal text-base">
                Learn in-demand skills from industry experts
              </li>
              <li className=" list-decimal list-outside text-center py-2 font-normal text-base">
                Master a subject or tool with hands-on projects
              </li>
              <li className=" list-decimal list-outside text-center py-2 font-normal text-base">
                Develop a deep understanding of key concepts
              </li>
            </div>
          </div>
          <div className="flex mt-28 relative   place-content-center ">
            <div className=" bg-cerbg py-8 font-inter text-cer w-2/3  px-8 rounded-l-lg ">
              <h2 className="py-2 text-2xl font-semibold underline">
                Earn a career certificate
              </h2>
              <p className="py-2 w-2/3 font-normal text-base">
                Add this credential to your LinkedIn profile, resume or CV Share
                it <br /> on social media and in your performance review
              </p>
            </div>
            <div className=" absolute left-1/2 translate-x-24 -top-16">
              <img
                className="max-w-96 max-h-80 "
                src={certificate}
                alt="certificate"
              />
            </div>
          </div>

          <div className="flex   justify-evenly place-content-center font-inter  mt-24 py-10 ">
            <div className="">
              <h2 className="text-3xl font-extrabold">Generative AI Course</h2>
            </div>
            <div className="flex space-x-10 my-auto">
              <p className="font-inter text-base line-through ">₹9,000</p>
              <p className="font-inter text-base ">₹5,000</p>
              <button className=" bg-[#00BF63] p-2 px-7 rounded-md text-white -mt-1 text-base ">
                Enrol Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyCertificates;
