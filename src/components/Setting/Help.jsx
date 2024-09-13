// Help.jsx
import { BiSupport } from "react-icons/bi";


const Help = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 p-8 overflow-y-auto">
      <h2 className="text-2xl font-bold">
        <BiSupport />
        Help{" "}
      </h2>
      <p className="mt-4 text-lg">
        Here you can add all the relevant help and support information for your
        users.
      </p>
      {/* Close button */}
      <button
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => window.location.reload()}>
        Close
      </button>
    </div>
  );
};

export default Help;
