import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormulario } from "../../contexts/FormularioContext";
import { useTheme } from "../../contexts/ThemeContext"; // Importando o contexto de tema
import "./Formulario.css";

const Formulario = () => {
  const navigate = useNavigate();
  const { formData: savedFormData, updateFormData } = useFormulario();
  const { isDarkTheme } = useTheme(); // Obtendo o estado do tema
  
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
    <div className={`form-container ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1 className={`form-title ${isDarkTheme ? 'dark' : 'light'}`}>FORMULÁRIO</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className={`section-title ${isDarkTheme ? 'dark' : 'light'}`}>INFORMAÇÕES DO PACIENTE</div>

        <div className="form-group">
          <label htmlFor="nome" className={isDarkTheme ? 'dark' : 'light'}>Nome Completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className={isDarkTheme ? 'dark' : 'light'}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dataNascimento" className={isDarkTheme ? 'dark' : 'light'}>Data de nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            className={isDarkTheme ? 'dark' : 'light'}
            required
          />
        </div>

        <div className="form-group">
          <label className={isDarkTheme ? 'dark' : 'light'}>Gênero</label>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="masculino"
                name="genero"
                value="masculino"
                checked={formData.genero === "masculino"}
                onChange={handleChange}
                className={isDarkTheme ? 'dark' : 'light'}
              />
              <label htmlFor="masculino" className={isDarkTheme ? 'dark' : 'light'}>Masculino</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="feminino"
                name="genero"
                value="feminino"
                checked={formData.genero === "feminino"}
                onChange={handleChange}
                className={isDarkTheme ? 'dark' : 'light'}
              />
              <label htmlFor="feminino" className={isDarkTheme ? 'dark' : 'light'}>Feminino</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="endereco" className={isDarkTheme ? 'dark' : 'light'}>Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            className={isDarkTheme ? 'dark' : 'light'}
          />
        </div>

        <div className={`section-title ${isDarkTheme ? 'dark' : 'light'}`}>OBSERVAÇÕES</div>

        <div className="form-group full-width">
          <label htmlFor="observacoes" className={isDarkTheme ? 'dark' : 'light'}>Descreva suas observações</label>
          <textarea
            id="observacoes"
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            rows="4"
            className={isDarkTheme ? 'dark' : 'light'}
          ></textarea>
        </div>

        <div className={`section-title ${isDarkTheme ? 'dark' : 'light'}`}>ROTINA DIÁRIA</div>

        <div className="form-group">
          <label htmlFor="horarioAcorda" className={isDarkTheme ? 'dark' : 'light'}>Horário em que acorda</label>
          <input
            type="time"
            id="horarioAcorda"
            name="horarioAcorda"
            value={formData.horarioAcorda}
            onChange={handleChange}
            className={isDarkTheme ? 'dark' : 'light'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="horarioDorme" className={isDarkTheme ? 'dark' : 'light'}>Horário em que dorme</label>
          <input
            type="time"
            id="horarioDorme"
            name="horarioDorme"
            value={formData.horarioDorme}
            onChange={handleChange}
            className={isDarkTheme ? 'dark' : 'light'}
          />
        </div>

        <button type="submit" className={`submit-btn ${isDarkTheme ? 'dark' : 'light'}`}>
          Enviar
        </button>

        <footer className={`form-footer ${isDarkTheme ? 'dark' : 'light'}`}>
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