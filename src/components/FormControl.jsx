const FormControl = ({ name, type, bill, people, handleBillInput, handlePeopleInput }) => {

const renderInput = () => {
    if (type === 'billInput') {
      return (
        <input 
          className='form-input clr-dark-cyan bill-input' 
          type="numeric" 
          name="bill" 
          id="bill" 
          placeholder='0' 
          maxLength={22}
          value={bill}
          onChange={handleBillInput}
        /> 
      )
    } else {
      return (
        <input 
          className='form-input clr-dark-cyan people-input' 
          type="numeric" 
          name="peopleNumber" 
          id="peopleNumber" 
          placeholder='0' 
          maxLength={22}
          value={people}
          onChange={handlePeopleInput}
        /> 
      )
    }
  }

  return (
    <div className="form-control">

      <label className='label clr-light-blue' htmlFor="bill">{name}</label>
      
      { renderInput() }
      
    </div>
  )
}

export default FormControl
