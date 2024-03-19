import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerUi = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <>
      <div className="md:flex sm:flex-col gap-8 ">
        <p>From</p>
        <DatePicker
          className=" mt-1 p-4 rounded-md w-[7.5rem] bg-black cursor-pointer text-white"
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
          className="p-4 mt-1 rounded-md w-[7.5rem] bg-black cursor-pointer text-white"
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
