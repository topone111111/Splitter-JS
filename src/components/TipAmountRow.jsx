const TipAmountRow = ({ tipAmount }) => {
  return (
    
    <div className="tip-amount-row">
      <div className="tip-info">
        <h3 className='label clr-white'>Tip Amount</h3>
        <h4 className='clr-grey label-s'>/ person</h4>
      </div>
      
      <div className="tip-value number-xl clr-cyan">{`$${tipAmount.toFixed(2)}`}</div>
    
    </div>
  )
}

export default TipAmountRow
