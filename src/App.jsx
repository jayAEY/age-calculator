import { useEffect } from "react";
import { useState } from "react";
// import arrow as arrow from "../public/images/icon-arrow.svg";

function App() {
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let [year, setYear] = useState(currentYear);
  let [month, setMonth] = useState(currentMonth + 1);
  let [day, setDay] = useState(currentDay);

  let currentDate = new Date(currentYear, currentMonth, currentDay);
  let inputDate = new Date(`${year},${month},${day}`);

  let result = new Date(currentDate - inputDate);
  // console.log(currentDate, inputDate);

  let [returnYear, setReturnYear] = useState("- - ");
  let [returnMonth, setReturnMonth] = useState("- - ");
  let [returnDay, setReturnDay] = useState("- - ");

  // useEffect(() => {
  function calculate() {
    inputDate = new Date(`${year},${month},${day}`);
    setReturnYear(result.getFullYear() - 1970);
    setReturnMonth(result.getMonth());
    setReturnDay(result.getDate());

    // console.log(inputDate);
    // setReturnYear(Math.floor(resultDays / 365.25));
    // console.log(Math.floor(resultDays / 365.25));

    // console.log(Math.floor(resultDays - returnYear * 365.25));

    // setReturnYear(resultDays / 365.25);

    // console.log(returnYear);
    //  }, [year, month, day]);
    console.log(returnDay, returnMonth, returnYear);
  }
  // }, [returnDay, returnMonth, returnYear]);

  return (
    <main className="min-w-svw min-h-svh flex justify-center items-center font-poppins bg-[--light-grey]">
      <div className="flex flex-col w-[320px] h-[440px] p-5 rounded-2xl rounded-br-[125px] bg-[white]">
        <div className="flex w-full justify-between mt-4">
          <div className="flex flex-col">
            <label
              className="uppercase font-bold text-xs text-[--smokey-grey] tracking-widest"
              htmlFor="day"
            >
              Day
            </label>
            <input
              id="day"
              type="number"
              placeholder="DD"
              className="w-[85px] h-11 p-2 text-black font-extrabold border-[--light-grey] border-2 rounded-md "
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label
              className="uppercase font-bold text-xs text-[--smokey-grey] tracking-widest"
              htmlFor="month"
            >
              Month
            </label>
            <input
              id="month"
              type="number"
              placeholder="MM"
              className="w-[85px] h-11 p-2 text-black font-extrabold border-[--light-grey] border-2 rounded-md"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label
              className="uppercase font-bold text-xs text-[--smokey-grey] tracking-widest"
              htmlFor="year"
            >
              Year
            </label>
            <input
              id="year"
              type="number"
              placeholder="YYYY"
              className="w-[85px] h-11 p-1 text-black font-extrabold border-[--light-grey] border-2 rounded-md"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full my-16">
          <span className="w-full h-0.5 bg-[--light-grey]" />
          {arrow}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g
              fill="none"
              stroke="#FFF"
              strokeWidth="4"
            >
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg> */}
          {/* <img
            id="arrow"
            src="images/icon-arrow.svg"
            // className="drop-shadow-2xl w-20 h-20"
            className="rounded-[100px] bg-[--purple] -mt-8 p-4 w-14 h-14 transition-all hover:cursor-pointer hover:w-16 hover:h-16 filter"
            // 0 1px 1px rgb(133,77,255,1)]
            onClick={() => calculate()}
          ></img> */}
          {/* <div className="bg-[--purple] bg-[url('/icon-arrow.svg')]  w-[34px] h-[34px]"></div> */}
        </div>
        <div className="mt-[180px] absolute">
          <h1 className="text-[3.2rem] tracking-tight -mb-5 italic font-[800]">
            <span className="text-[--purple]">{returnYear}</span> years
          </h1>
          <h1 className="text-[3.2rem] tracking-tight -mb-5 italic font-[800]">
            <span className="text-[--purple]">{returnMonth}</span> months
          </h1>
          <h1 className="text-[3.2rem] tracking-tight italic font-[800]">
            <span className="text-[--purple]">{returnDay}</span> days
          </h1>
        </div>
      </div>
    </main>
  );
}

export default App;
