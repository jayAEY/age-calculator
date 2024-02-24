import { useEffect } from "react";
import { useState } from "react";

function App() {
  // let currentDate = new Date().toLocaleDateString();
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();
  let currentDate = new Date(currentYear, currentMonth, currentDay);

  let [year, setYear] = useState(currentYear);
  let [month, setMonth] = useState(currentMonth);
  let [day, setDay] = useState(currentDay);

  let inputDate = new Date(`${year},${month},${day}`);

  let result = currentDate - inputDate;
  // result = result / 1000;
  // let resultYears = result / 31556952;
  // let resultMonths;
  // let resultSeconds;
  let resultDays = Math.floor(result / 1000 / 60 / 60 / 24);

  // let resultDays = Math.floor((result)/1000)

  useEffect(() => {
    inputDate = new Date(`${year},${month},${day}`);
    // console.log(resultYears, resultMonths, resultSeconds);
    console.log(resultDays);
  }, [year, month, day]);
  //   let year =
  //   let month
  // let day
  // let inputDate = new Date(year, month, day);
  // console.log(currentDate, inputDate, year, month, day);

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
                setMonth(e.target.value - 1);
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
          <img
            src="images/icon-arrow.svg"
            className="rounded-[100px] bg-[--purple] -mt-8 p-4 w-14 h-14"
          ></img>
        </div>
        <div className="-mt-10">
          <h1 className="text-[3.2rem] tracking-tight -mb-5 italic font-[800]">
            <span className="text-[--purple]">- - </span>
            years
          </h1>
          <h1 className="text-[3.2rem] tracking-tight -mb-5 italic font-[800]">
            <span className="text-[--purple]">- - </span>
            months
          </h1>
          <h1 className="text-[3.2rem] tracking-tight italic font-[800]">
            <span className="text-[--purple]">- - </span>
            days
          </h1>
        </div>
      </div>
    </main>
  );
}

export default App;
