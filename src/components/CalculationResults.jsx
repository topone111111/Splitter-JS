import TipAmountRow from './TipAmountRow'
import TotalAmountRow from './TotalAmountRow'
import ResultsButton from './ResultsButton'

const CalculationResults = ({ total, tipAmount, resetForm }) => {
  return (
    
    <div className="calculation-results bg-dark-cyan">

      <div className="calculation-info">

        <TipAmountRow tipAmount={tipAmount} />

        <TotalAmountRow total={total} />

      </div>

      <ResultsButton resetForm={resetForm} />

    </div>
  )
}

export default CalculationResults
