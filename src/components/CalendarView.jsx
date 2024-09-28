import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const availableClasses = {
    "2024-10-01": "Math Class",
    "2024-10-02": "Science Class",
    // Add more dates with available classes
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Select a Date to View Available Classes
      </h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        className="border p-2 rounded"
      />
      {selectedDate && (
        <div className="mt-4">
          <h4 className="font-semibold">Available Classes:</h4>
          <p>
            {availableClasses[format(selectedDate, "yyyy-MM-dd")] ||
              "No classes available"}
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
