import { useEffect, useState } from "react";
import { GrFormView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import {auth} from "../../firebase";




const Purchase = () => {
  const [purchases , setPurchases] = useState([  {
    purchaseId: "Loading..",
    courseTitle: "Loading..",
    purchaseAmount: "Loading..",
    purchaseInvoice: "Loading..", // URL or identifier for the invoice
    purchaseDate: "Loading..", // Timestamp (you can convert this to a date)
  }]);

  useEffect(()=>{
    const fetchPurchases = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch("https://course-compass-backend-zh7c.onrender.com/api/student/purchase-history", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();



        if (response.ok) {
          console.log(data)
          setPurchases(data); // Assuming the response has courses in data.courses
        } else {
          console.error("Failed to fetch purchases:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch purchases:", error);
      }
    };
    fetchPurchases();
  },[])

  return (
    <>
      <div className="py-4">
        <h3 className="font-inter text-lg">Invoice and Purchase History</h3>
        <p className="font-inter text-sm text-secondary">
          Review your purchase history and manage your invoices.
        </p>

        {/* Purchase Table */}
        <div className="overflow-x-auto mt-1 py-8">
          <table className="min-w-full text-sm border text-secondary font-inter border-gray-200">
            <thead>
              <tr>
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
              {purchases.map((purchase, index) => (
                <tr key={index} className="text-sm">
                  <td className="py-2 px-4 border-b border-gray-200">
                    {/* Convert timestamp to a readable date */}
                    {new Date(purchase.purchaseDate).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">Invoice</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {purchase.purchaseId}
                  </td>
                  <td className="py-2 px-4 w-40 border-b border-gray-200">
                    {/* Replace this with a function to fetch course name by courseId */}
                    {purchase.courseTitle} {/* Example placeholder */}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    ₹{purchase.purchaseAmount}
                  </td>
                  <td className="py-2 px-2 flex border-b border-gray-200">
                    <button className="px-1 py-1 mr-2">
                      <GrFormView size={20} />
                    </button>
                    <button className="px-1 py-1">
                      <MdOutlineFileDownload size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Purchase;
