import { useState, useMemo } from "react";
import { ChangeEvent } from "react";
import { useBudget } from "../hooks/useBudget";
export default function BudgetForm() {
    const [budget, setBudget] = useState<number | null>(0);
    const { dispatch } = useBudget();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      let string = e.target.value;
      string = string.replace(/^0+/, "").replace(/\D/g, "");
      const number = parseInt(string);
      if (isNaN(number)) {
        setBudget(null);
      } else {
        setBudget(number);
      }
    };
  
    const isValid = useMemo(() => {
      return budget === null || budget <= 0;
    }, [budget]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({ type: "add-budget", payload: { budget } });
      
    }

  return (
    <form action="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Budget
        </label>
        <input
          type="text"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Enter your budget"
          name="budget"
          id="budget"
          onChange={handleChange}
          value={budget !== null ? budget : ""}
        />
      </div>
      <input
        type="button"
        value="Submit"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white uppercase font-bold text-center  disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isValid}
      />
    </form>
  );
}
