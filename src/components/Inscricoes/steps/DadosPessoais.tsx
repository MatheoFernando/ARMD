import "../../../styles/inscricoes.css"
export  function DadosPessoais({ formData, handleChange, handleNextStep }) {
  return (
    <div >
      <div className="custom-input-group">
        <input type="text" id="custom-input" className="custom-input" required />
        <label htmlFor="custom-input" className="custom-input-label">Your Placeholder</label>
    </div>
    </div>
  )
}


