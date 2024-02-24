function App() {
  return (
    <main className="min-w-svw min-h-svh flex justify-center items-center font-poppins bg-[--light-grey]">
      <div className="flex flex-col w-[320px] h-[440px] p-5 rounded-2xl rounded-br-[125px] bg-[white]">
        <div className="flex w-full justify-between mt-4">
          {/* Day DD Month MM Year YYYY */}
          <div className="flex flex-col">
            <label
              className="uppercase font-bold text-xs text-[--smokey-grey] tracking-widest"
              htmlFor="day"
            >
              Day
            </label>
            <input
              id="day"
              placeholder="DD"
              className="w-[85px] h-11 p-2 text-black font-extrabold border-[--light-grey] border-2 rounded-md"
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
              placeholder="MM"
              className="w-[85px] h-11 p-2 text-black font-extrabold border-[--light-grey] border-2 rounded-md"
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
              placeholder="YYYY"
              className="w-[85px] h-11 p-1 text-black font-extrabold border-[--light-grey] border-2 rounded-md"
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
          <h1 className="text-[3.3rem] tracking-tight -mb-5 italic font-[800]">
            <span className="text-[--purple]">38 </span>
            years
          </h1>
          <h1 className="text-[3.3rem] tracking-tight -mb-5 italic font-[800]">
            <span className="text-[--purple]">3 </span>
            months
          </h1>
          <h1 className="text-[3.3rem] tracking-tight italic font-[800]">
            <span className="text-[--purple]">26 </span>
            days
          </h1>
        </div>
      </div>
    </main>
  );
}

export default App;
