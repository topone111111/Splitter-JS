import { useState } from 'react'

import CalculationResults from './components/CalculationResults'
import InputData from './components/InputData'



const App = () => {

const [total, setTotal] = useState(0)
const [tipAmount, setTipAmount] = useState(0)
const [billValue, setBillValue] = useState('')
const [numberOfPeople, setNumberOfPeople] = useState('')

const onBillInputChange = (e) => {
  setBillValue(e.target.value)
}

const onPeopleNumberInputChange = (e) => {
  setNumberOfPeople(e.target.value)
}

const calculateData = (val) => {
  if (!billValue || !numberOfPeople) return

  const totalValue = billValue / numberOfPeople
  const tipValue = totalValue * (val / 100)
  
  setTotal(totalValue + tipValue)
  setTipAmount(tipValue)
}

const resetForm = () => {
  setBillValue('')
  setNumberOfPeople('')
  setTotal(0)
  setTipAmount(0)
}

return (
  <div className='container'>

    <InputData 
      bill={billValue} 
      people={numberOfPeople}
      handleBillInput={onBillInputChange}
      handlePeopleInput={onPeopleNumberInputChange}
      calculateData={calculateData}
    />

    <CalculationResults 
      total={total} 
      tipAmount={tipAmount}
      resetForm={resetForm}
    />
    
    </div>
  )
}

export default App
