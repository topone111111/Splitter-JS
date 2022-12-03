import Buttons from './Buttons'
import FormControl from './FormControl'


const InputData = ({ bill, people, handleBillInput, handlePeopleInput, calculateData }) => {
  return (
    <div className='input-data'>
      
      <FormControl 
        name="Bill" 
        type="billInput" 
        bill={bill} 
        handleBillInput={handleBillInput}
      />
    
      <Buttons calculateData={calculateData}/>

      <FormControl 
        name="Number of People" 
        type="peopleNumberInput" 
        people={people} 
        handlePeopleInput={handlePeopleInput}
      />
    
    </div>
  )
}

export default InputData
