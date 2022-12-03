import Button from './Button'

const Buttons = ({ calculateData }) => {
  const valuesArr = [5, 10, 15, 25, 50, 75]

  return (
    <div className='tips-selection'>
      <div className='label clr-light-blue'>Select Tip %</div>

      <div className='buttons-row'>

        { valuesArr.map(el => <Button key={el + 1} value={el} calculateData={calculateData} />) }
      
      </div>

    </div>
  )
}

export default Buttons
