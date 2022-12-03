const Button = ({ value, calculateData }) => {
  return (
    <button 
      onClick={() => calculateData(value)} 
      className="cta tip-cta bg-dark-cyan clr-white"
    >
      {`${value}%`}
    </button>
  )
} 

export default Button
