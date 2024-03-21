import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerUi = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <>
      <div className="md:flex mt-3 mb-1 sm:flex-col gap-8 ">
        <p className="text-black sm:mb-[-23px] mb-1">Rent From</p>
        <DatePicker
          className="  mt-[0.3rem] sm:mt-0 md:p-2 px-2 !text-[12px] py-1 rounded-md w-[5rem] md:w-[4.8rem] bg-black cursor-pointer text-white"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <p className="sm:mt-0 mt-2 sm:mb-[-23px] text-black">To</p>
        <DatePicker
          className=" mt-[0.3rem] sm:mt-0 md:p-2  px-2 !text-[12px] py-1 rounded-md w-[5rem] md:w-[4.8rem] bg-black cursor-pointer text-white"
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
