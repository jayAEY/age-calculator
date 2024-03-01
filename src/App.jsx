import { useState } from "react";

function App() {
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  // let [year, setYear] = useState(currentYear);
  // let [month, setMonth] = useState(currentMonth + 1);
  // let [day, setDay] = useState(currentDay);

  let [year, setYear] = useState();
  let [month, setMonth] = useState();
  let [day, setDay] = useState();

  let currentDate = new Date(currentYear, currentMonth, currentDay);
  let inputDate = new Date(`${year},${month},${day}`);

  let result = new Date(currentDate - inputDate);

  let [returnYear, setReturnYear] = useState("- - ");
  let [returnMonth, setReturnMonth] = useState("- - ");
  let [returnDay, setReturnDay] = useState("- - ");

  function calculate(e) {
    e.preventDefault();

    if (
      inputDate.getFullYear() == year &&
      inputDate.getMonth() + 1 == month &&
      inputDate.getDate() == day &&
      currentDate - inputDate > 0
    ) {
      console.log("valid");
      setReturnYear(result.getFullYear() - 1970);
      setReturnMonth(result.getMonth());
      setReturnDay(result.getDate());
    } else {
      console.log("invalid");
    }
    // console.log(returnDay, returnMonth, returnYear);
  }

  return (
    <main className="min-w-svw min-h-svh flex justify-center items-center font-poppins bg-[--light-grey]">
      <div className="flex flex-col w-[320px] h-[440px] p-5 rounded-2xl rounded-br-[125px] bg-[white] lg:h-[490px] lg:w-[600px] lg:p-10 lg:rounded-br-[150px] transition-all duration-200">
        <form
          id="date-input"
          className="flex w-full justify-between mt-4 lg:justify-start lg:gap-5 lg:mt-0"
          onSubmit={(e) => calculate(e)}
          onInvalid={(e) => console.log("invalid")}
        >
          <div className="flex flex-col lg:gap-2">
            <label
              className="uppercase font-bold text-xs text-[--smokey-grey] tracking-[0.2rem]"
              htmlFor="day"
            >
              Day
            </label>
            <input
              id="day"
              form="date-input"
              type="number"
              placeholder="DD"
              className="w-[85px] h-11 p-2 text-black font-extrabold border-[--light-grey] border-2 rounded-md lg:w-[125px] lg:h-[55px] lg:text-[1.4rem] lg:font-bold lg:p-3"
              onChange={(e) => {
                setDay(e.target.value);
              }}
              min={1}
              max={31}
              required
            />
            <span className="w-[70px] text-[0.8rem] mt-1 italic text-[--light-red] leading-3 lg:w-[115px] lg:text-[0.69rem]">
              Must be a valid date
            </span>
          </div>

          <div className="flex flex-col lg:gap-2">
            <label
              className="uppercase font-bold text-xs text-[--smokey-grey] tracking-[0.2rem]"
              htmlFor="month"
            >
              Month
            </label>
            <input
              id="month"
              form="date-input"
              type="number"
              placeholder="MM"
              className="w-[85px] h-11 p-2 text-black font-extrabold border-[--light-grey] border-2 rounded-md lg:w-[125px] lg:h-[55px] lg:text-[1.4rem] lg:font-bold lg:p-3"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              min={1}
              max={12}
              required
            />
            <span className="w-[70px] text-[0.8rem] mt-1 italic text-[--light-red] leading-3 lg:w-[115px] lg:text-[0.69rem]">
              This field is required
            </span>
          </div>

          <div className="flex flex-col lg:gap-2">
            <label
              className="uppercase font-bold text-xs text-[--smokey-grey] tracking-[0.2rem]"
              htmlFor="year"
            >
              Year
            </label>
            <input
              id="year"
              form="date-input"
              type="number"
              placeholder="YYYY"
              className="w-[85px] h-11 p-2 text-black font-extrabold border-[--light-grey] border-2 rounded-md lg:w-[125px] lg:h-[55px] lg:text-[1.4rem] lg:font-bold lg:p-3"
              onChange={(e) => {
                setYear(e.target.value);
              }}
              max={currentYear}
              required
            />
            <span className="w-[70px] text-[0.8rem] mt-1 italic text-[--light-red] leading-3 lg:w-[115px] lg:text-[0.69rem]">
              This field is required
            </span>
          </div>
        </form>

        <div className="flex flex-col items-center w-full  my-11 lg:my-8 lg:items-end">
          <span className="w-full h-0.5 bg-[--light-grey]" />
          <button
            type="submit"
            form="date-input"
            className=" flex justify-center items-center rounded-[100px] bg-[--purple] -mt-8 w-[60px] h-[60px] transition-all duration-300 hover:bg-black hover:cursor-pointer hover:w-[64px] hover:h-[64px] hover:shadow-[0_0_18px_3px_rgba(133,77,255,0.5)] lg:scale-[115%]"
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

        <div className="mt-[180px] absolute lg:mt-[155px]">
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
