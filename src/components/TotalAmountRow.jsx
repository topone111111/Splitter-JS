const TotalAmountRow = ({ total }) => {
  return (
    
    <div className="total-amount-row">
      <div className="total-info">
        <h3 className='label clr-white'>Total</h3>
        <h4 className='clr-grey label-s'>/ person</h4>
      </div>
      
      <div className="total-value number-xl clr-cyan">{`$${total.toFixed(2)}`}</div>
    
    </div>
  )
}

export default TotalAmountRow
