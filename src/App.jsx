import { useState } from "react";

function App() {
  // current date
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();
  let currentDate = new Date(currentYear, currentMonth, currentDay);
  //input date
  let [year, setYear] = useState();
  let [month, setMonth] = useState();
  let [day, setDay] = useState();
  let inputDate = new Date(`${year},${month},${day}`);
  //return date
  let returnDate = new Date(currentDate - inputDate);
  let [returnYear, setReturnYear] = useState("- - ");
  let [returnMonth, setReturnMonth] = useState("- - ");
  let [returnDay, setReturnDay] = useState("- - ");
  //error messges
  let [dayError, setDayError] = useState("");
  let [monthError, setMonthError] = useState("");
  let [yearError, setYearError] = useState("");

  function calculate(e) {
    e.preventDefault();
    if (
      !dayError &&
      !monthError &&
      !yearError &&
      // checks if converted date is equal to input
      inputDate.getDate() == day &&
      // checks if in the past
      currentDate - inputDate > 0
    ) {
      // setReturnYear(returnDate.getFullYear() - 1970);
      animateCount(returnDate.getFullYear() - 1970, setReturnYear);
      animateCount(returnDate.getMonth(), setReturnMonth);
      animateCount(returnDate.getDay(), setReturnDay);

      setReturnMonth(returnDate.getMonth());
      setReturnDay(returnDate.getDate());
      setDayError("");
      setMonthError("");
      setYearError("");
    } else if (
      // handles dates not in past
      currentDate - inputDate <= 0 &&
      inputDate.getDate() == day
    ) {
      setDayError("Must be in the past");
      setMonthError(" ");
      setYearError(" ");
    } else {
      //handles invalid dates like april 31
      setDayError("Must be a valid date");
    }
  }

  function handleDayError(value) {
    value == value.trim();
    if (value.length < 1) {
      setDayError("This field is required");
    } else if (
      //checks for strings
      value.toLowerCase() != value.toUpperCase() ||
      value < 1 ||
      value > 31
    ) {
      setDayError("Must be a valid day");
    } else {
      setDayError("");
      setMonthError("");
      setYearError("");
      setDay(value);
    }
  }

  function handleMonthError(value) {
    value == value.trim();
    if (value.length < 1) {
      setMonthError("This field is required");
    } else if (
      value.toLowerCase() != value.toUpperCase() ||
      value < 1 ||
      value > 12
    ) {
      setMonthError("Must be a valid month");
    } else {
      setDayError("");
      setMonthError("");
      setYearError("");
      setMonth(value);
    }
  }

  function handleYearError(value) {
    value == value.trim();
    if (value.length < 1) {
      setYearError("This field is required");
    } else if (value.toLowerCase() != value.toUpperCase()) {
      setYearError("Must be a valid year");
    } else if (value > currentYear) {
      setYearError("Must be in the past");
    } else if (value < 100) {
      setYearError("Please don't lie, you are not this old");
    } else {
      setDayError("");
      setMonthError("");
      setYearError("");
      setYear(value);
    }
  }

  function animateCount(end, setState) {
    let count = 0;
    let interval = setInterval(() => {
      if (count >= end) clearInterval(interval);
      count++;
      setState(count);
    }, 15);
  }

  return (
    <main className="min-w-svw min-h-svh flex justify-center items-center font-poppins bg-[--off-white]">
      <div className="flex flex-col w-[320px] h-[460px] p-5 rounded-2xl rounded-br-[115px] bg-[white] lg:h-[490px] lg:w-[600px] lg:p-10 lg:rounded-br-[150px] transition-all duration-200">
        <form
          id="date-input"
          className="flex w-full justify-between mt-4 lg:justify-start lg:gap-5 lg:mt-0"
          onSubmit={(e) => {
            calculate(e);
          }}
        >
          <div className="flex flex-col gap-2">
            <label
              className={`${
                dayError ? "text-[--light-red]" : "text-[--smokey-grey]"
              } uppercase font-bold text-xs tracking-[0.2rem]`}
              htmlFor="day"
            >
              Day
            </label>
            <input
              id="day"
              form="date-input"
              placeholder="DD"
              maxLength="2"
              className={`${
                dayError ? "border-[--light-red]" : "border-[--light-grey]"
              } w-[85px] h-11 p-2 text-black font-extrabold border-2 rounded-md outline-none lg:w-[125px] lg:h-[55px] lg:text-[1.4rem] lg:font-bold lg:p-3`}
              onChange={(e) => {
                handleDayError(e.target.value);
              }}
            />
            <span
              id="day-error"
              className={`${
                dayError ? "visible" : "invisible"
              } w-[70px] text-[0.7rem] h-4 mt-0 italic text-[--light-red] leading-3 lg:w-[125px] lg:text-[0.69rem]`}
            >
              {dayError}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`${
                monthError ? "text-[--light-red]" : "text-[--smokey-grey]"
              } uppercase font-bold text-xs tracking-[0.2rem]`}
              htmlFor="month"
            >
              Month
            </label>

            <input
              id="month"
              form="date-input"
              placeholder="MM"
              maxLength="2"
              className={`${
                monthError ? "border-[--light-red]" : "border-[--light-grey]"
              } w-[85px] h-11 p-2 text-black font-extrabold border-2 rounded-md outline-none lg:w-[125px] lg:h-[55px] lg:text-[1.4rem] lg:font-bold lg:p-3`}
              onChange={(e) => {
                handleMonthError(e.target.value);
              }}
            />
            <span
              id="month-error"
              className={`${
                monthError ? "visible" : "invisible"
              } w-[70px] text-[0.7rem] h-4 mt-0 italic text-[--light-red] leading-3 lg:w-[125px] lg:text-[0.69rem]`}
            >
              {monthError}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={`${
                yearError ? "text-[--light-red]" : "text-[--smokey-grey]"
              } uppercase font-bold text-xs tracking-[0.2rem]`}
              htmlFor="year"
            >
              Year
            </label>

            <input
              id="year"
              form="date-input"
              placeholder="YYYY"
              maxLength="4"
              className={`${
                yearError ? "border-[--light-red]" : "border-[--light-grey]"
              } w-[85px] h-11 p-2 text-black font-extrabold border-2 rounded-md outline-none lg:w-[125px] lg:h-[55px] lg:text-[1.4rem] lg:font-bold lg:p-3`}
              onChange={(e) => {
                handleYearError(e.target.value);
              }}
            />
            <span
              id="year-error"
              className={`${
                yearError ? "visible" : "invisible"
              } w-[70px] text-[0.7rem] h-4 mt-0 italic text-[--light-red] leading-3 lg:w-[125px] lg:text-[0.69rem]`}
            >
              {yearError}
            </span>
          </div>
        </form>

        <div className="flex flex-col items-center w-full my-12 lg:my-8 lg:items-end">
          <span className="w-full h-0.5 bg-[--light-grey]" />
          <button
            type="submit"
            form="date-input"
            className="flex justify-center items-center rounded-[100px] bg-[--purple] -mt-8 w-[60px] h-[60px] transition-all duration-300 hover:bg-black hover:cursor-pointer hover:w-[64px] hover:h-[64px] hover:shadow-[0_0_18px_3px_rgba(133,77,255,0.5)] lg:scale-[115%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="32"
              viewBox="0 0 46 44"
            >
              <g
                fill="none"
                stroke="#FFF"
                strokeWidth="4"
              >
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>

        <div className="mt-[210px] absolute lg:mt-[155px]">
          <h1 className="text-[3.2rem] tracking-tight -mb-5 italic font-[800] lg:text-[4.5rem] lg:-mb-8">
            <span className="text-[--purple]">{returnYear}</span> years
          </h1>
          <h1 className="text-[3.2rem] tracking-tight -mb-5 italic font-[800] lg:text-[4.5rem] lg:-mb-8">
            <span className="text-[--purple]">{returnMonth}</span> months
          </h1>
          <h1 className="text-[3.2rem] tracking-tight -mb-5 italic font-[800] lg:text-[4.5rem] lg:-mb-8">
            <span className="text-[--purple]">{returnDay}</span> days
          </h1>
        </div>
      </div>
    </main>
  );
}

export default App;
