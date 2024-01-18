import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerUi = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <>
      <div className="flex gap-8">
        <p>From</p>
        <DatePicker
          className="p-2 rounded-md bg-black cursor-pointer text-white"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
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
