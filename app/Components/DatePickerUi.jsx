import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const DatePickerUi = () => {
  const [startDate, setStartDate] = useState(new Date("2024/01/09"));
  const [endDate, setEndDate] = useState(new Date("2024/01/09"));

  const start = format(startDate, "MM/dd/yyyy");
  const end = format(endDate, "MM/dd/yyyy");

  // const cost = TotalCost(start, end);
  return (
    <>
      <div className="flex gap-8">
        <p>From</p>
        <DatePicker
          className="p-2 rounded-md bg-black cursor-pointer text-white"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <p>To</p>
        <DatePicker
          className="p-2 rounded-md bg-black cursor-pointer text-white"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </>
  );
};

export default DatePickerUi;
