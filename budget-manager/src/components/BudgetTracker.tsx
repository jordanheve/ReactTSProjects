import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="grafica de datos" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
            <button
            type="button"
            className="bg-pink-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => console.log("hellor there")}
            >
              Reset
            </button>

            <AmountDisplay 
              label='Budget'
              amount={1000}
            />
             <AmountDisplay 
              label='Available'
              amount={500}
            />
             <AmountDisplay 
              label='Expenses'
              amount={500}
            />
      </div>
    </div>
  )
}
