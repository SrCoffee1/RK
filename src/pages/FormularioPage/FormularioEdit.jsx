import React, { useState } from "react";
import { useFormulario } from "../../contexts/FormularioContext";
import "./FormularioEdit.css"; // Reuso do CSS do formulário ou crie um específico

const FormularioEdit = ({ onClose }) => {
  const { formData: savedFormData, updateFormData } = useFormulario();
  const [formData, setFormData] = useState(savedFormData);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados atualizados:", formData);
    
    // Salva os dados no context
    updateFormData(formData);
    
    // Exibe mensagem de sucesso temporária
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">EDITAR FORMULÁRIO</h1>
      {showSuccess && (
        <div className="success-message">
          Formulário atualizado com sucesso!
        </div>
      )}
      <form onSubmit={handleSubmit} className="form">
        <div className="section-title">INFORMAÇÕES DO PACIENTE</div>

        <div className="form-group">
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dataNascimento">Data de nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gênero</label>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="masculino"
                name="genero"
                value="masculino"
                checked={formData.genero === "masculino"}
                onChange={handleChange}
              />
              <label htmlFor="masculino">Masculino</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="feminino"
                name="genero"
                value="feminino"
                checked={formData.genero === "feminino"}
                onChange={handleChange}
              />
              <label htmlFor="feminino">Feminino</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
        </div>

        <div className="section-title">OBSERVAÇÕES</div>

        <div className="form-group full-width">
          <label htmlFor="observacoes">Descreva suas observações</label>
          <textarea
            id="observacoes"
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <div className="section-title">ROTINA DIÁRIA</div>

        <div className="form-group">
          <label htmlFor="horarioAcorda">Horário em que acorda</label>
          <input
            type="time"
            id="horarioAcorda"
            name="horarioAcorda"
            value={formData.horarioAcorda}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="horarioDorme">Horário em que dorme</label>
          <input
            type="time"
            id="horarioDorme"
            name="horarioDorme"
            value={formData.horarioDorme}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="submit-btn">
            Salvar Alterações
          </button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioEdit;