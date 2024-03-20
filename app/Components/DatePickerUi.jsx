import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerUi = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <>
      <div className="md:flex mt-4 sm:flex-col gap-8 ">
        <p className="text-black">From</p>
        <DatePicker
          className=" mt-4 md:p-4 p-2 text-sm md:text-lg rounded-md w-[7rem] md:w-[7.5rem] bg-black cursor-pointer text-white"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <p className="text-black">To</p>
        <DatePicker
          className="mt-2 md:p-4 p-2 text-sm md:text-lg rounded-md w-[7rem] md:w-[7.5rem] bg-black cursor-pointer text-white"
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
