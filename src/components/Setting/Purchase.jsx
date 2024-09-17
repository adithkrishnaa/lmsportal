import { GrFormView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";

const Purchase = () => {
  return (
    <>
      <div className="py-4">
        {/* Invoice and purchase history */}
        <h3 className="font-inter text-lg">Invoice and Purchase History</h3>
        <p className="font-inter text-sm text-secondary">
          Review your purchase history and manage your invoices.
        </p>

        {/* Purchase Table */}
        <div className="overflow-x-auto mt-1 py-8">
          <table className="min-w-full text-sm border text-secondary font-inter border-gray-200">
            <thead>
              <tr className="">
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left font-inter">
                  Date
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left font-inter">
                  Type
                </th>
                <th className="py-2 px-4 border-b-2 w-32 border-gray-200 text-left font-inter">
                  Order No.
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left font-inter">
                  Course
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left font-inter">
                  Amount
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left font-inter">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr className="text-sm">
                <td className="py-2 px-4 border-b border-gray-200">
                  Aug,7,2024
                </td>
                <td className="py-2 px-4 border-b border-gray-200">Invoice</td>
                <td className="py-2 px-4 border-b border-gray-200">123456</td>
                <td className="py-2 px-4 w-40 border-b border-gray-200">
                  Generative AI
                </td>
                <td className="py-2 px-4 border-b border-gray-200">₹5000</td>
                <td className="py-2 px-2 flex border-b border-gray-200">
                  <button className="  px-1 py-1 mr-2">
                    <GrFormView size={20} />
                  </button>
                  <button className="  px-1 py-1 ">
                    <MdOutlineFileDownload size={20} />
                  </button>
                </td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Purchase;
