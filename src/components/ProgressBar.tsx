import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setValue((val) => (val < 100 ? val + 1 : 100));
    }, 100);
  }, [value]);
  return (
    <div className="text-center my-5 mx-auto w-1/3">
      <h1 className="text-5xl mb-5">Progress bar</h1>
      <div className="w-100% mx-auto p-2 rounded-xl border-2">
        <div className={`w-${value} bg-blue`}>
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
