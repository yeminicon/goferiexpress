import React from "react";
import { FiCalendar } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FilterByDateInput(): JSX.Element {
  const [startDate, setStartDate] = React.useState<Date | null>(null);

  return (
    <div className="relative z-10 w-full md:w-52 lg:w-80 border dark:border-dark rounded-lg cursor-pointer">
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        className="w-full md:w-52 lg:w-80 px-3 py-[0.625rem] bg-transparent shadow-sm text-sm text-dark dark:text-white cursor-pointer outline-none"
        placeholderText="Filter by Date"
      />
      <FiCalendar
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary"
        size={18}
      />
    </div>
  );
}

export default FilterByDateInput;
