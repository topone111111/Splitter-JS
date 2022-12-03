const ResultsButton = ({ resetForm }) => {
  return (
    <button 
      className="cta form-cta clr-dark-cyan bg-cyan"
      onClick={resetForm}
    >
      RESET
    </button>   
  )
}

export default ResultsButton
