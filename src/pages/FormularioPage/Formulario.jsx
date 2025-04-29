import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import { useFormulario } from "../../contexts/FormularioContext";
import "./Formulario.css";

const Formulario = () => {
  const navigate = useNavigate();
  const { formData: savedFormData, updateFormData } = useFormulario();
  
  const [formData, setFormData] = useState(savedFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Formulário:", formData);
    
    // Salva os dados no context
    updateFormData(formData);
    
    // Exibe mensagem de sucesso
    alert("Formulário enviado com sucesso!");
    
    // Redireciona para a tela de monitoramento
    navigate("/monitoramento");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">FORMULÁRIO</h1>
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

        <button type="submit" className="submit-btn">
          Enviar
        </button>

        <footer className="form-footer">
          <p>
            Este formulário é destinado exclusivamente aos pacientes que serão
            monitorados. As informações coletadas serão utilizadas para
            acompanhar sua rotina e garantir um atendimento personalizado.
          </p>
        </footer>
      </form>
    </div>
  );
};

export default Formulario;