import React, { useState } from 'react';
import './Perfil.css';

export default function Perfil() {
  const [usuario, setUsuario] = useState({
    nome: 'Usuário123',
    genero: '',
    telefone: '+00 00000-0000',
    email: 'usuário@riskalert.com'
  });
  
  const [modoEdicao, setModoEdicao] = useState(false);
  const [dadosOriginais, setDadosOriginais] = useState({});

  const iniciarEdicao = () => {
    setDadosOriginais({ ...usuario });
    setModoEdicao(true);
  };

  const salvarAlteracoes = () => {
    if (usuario.email && !validarEmail(usuario.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }
    setModoEdicao(false);
  };

  const cancelarEdicao = () => {
    setUsuario({ ...dadosOriginais });
    setModoEdicao(false);
  };

  const handleInputChange = (campo, valor) => {
    let valorValido = valor;

    switch (campo) {
      case 'nome':
        if (valor.length > 50) return;
        break;
      case 'genero':
        if (valor.length > 20) return;
        break;
      case 'telefone':
        const telefoneRegex = /^[0-9\s\-\\+]*$/;
        if (!telefoneRegex.test(valor) || valor.length > 20) return;
        break;
      case 'email':
        if (valor.length > 100) return;
        break;
      default:
        break;
    }

    setUsuario(prev => ({
      ...prev,
      [campo]: valorValido
    }));
  };

  const validarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <div className="perfil-left">
          <div className="perfil-avatar-outer">
            <div className="perfil-avatar-inner">
              <div className="perfil-avatar-small-circle"></div>
              <div className="perfil-avatar-semicircle"></div>
            </div>
          </div>

          <h1 className="perfil-nome">{usuario.nome || 'Usuário123'}</h1>
          <p className="perfil-email">{usuario.email || 'usuário@riskalert.com'}</p>
          <p className="perfil-telefone">{usuario.telefone || '+00 00000-0000'}</p>

          {!modoEdicao ? (
            <button
              onClick={iniciarEdicao}
              className="perfil-botao perfil-botao-editar"
            >
              Editar perfil
            </button>
          ) : (
            <div className="perfil-botoes-edicao">
              <button
                onClick={salvarAlteracoes}
                className="perfil-botao perfil-botao-salvar"
              >
                Salvar
              </button>
              <button
                onClick={cancelarEdicao}
                className="perfil-botao perfil-botao-cancelar"
              >
                Cancelar
              </button>
            </div>
          )}
        </div>

        <div className="perfil-right">
          <div>
            <label className="perfil-label">
              Nome <span style={{ fontSize: '12px', color: '#888' }}>(máx. 50 caracteres)</span>
            </label>
            <input
              type="text"
              value={usuario.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
              disabled={!modoEdicao}
              placeholder="Digite seu nome"
              className={`perfil-input ${modoEdicao ? 'editavel' : ''}`}
            />
            <div className="perfil-caracteres">{usuario.nome.length}/50</div>
          </div>

          <div>
            <label className="perfil-label">
              Gênero <span style={{ fontSize: '12px', color: '#888' }}>(máx. 20 caracteres)</span>
            </label>
            <input
              type="text"
              value={usuario.genero}
              onChange={(e) => handleInputChange('genero', e.target.value)}
              disabled={!modoEdicao}
              placeholder="Digite seu gênero"
              className={`perfil-input ${modoEdicao ? 'editavel' : ''}`}
            />
            <div className="perfil-caracteres">{usuario.genero.length}/20</div>
          </div>

          <div>
            <label className="perfil-label">
              Telefone <span style={{ fontSize: '12px', color: '#888' }}>(máx. 20 caracteres)</span>
            </label>
            <input
              type="text"
              value={usuario.telefone}
              onChange={(e) => handleInputChange('telefone', e.target.value)}
              disabled={!modoEdicao}
              placeholder="Digite seu telefone"
              className={`perfil-input ${modoEdicao ? 'editavel' : ''}`}
            />
            <div className="perfil-caracteres">{usuario.telefone.length}/20</div>
          </div>

          <div>
            <label className="perfil-label">
              Email <span style={{ fontSize: '12px', color: '#888' }}>(máx. 100 caracteres)</span>
            </label>
            <input
              type="email"
              value={usuario.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={!modoEdicao}
              placeholder="Digite seu email"
              className={`perfil-input ${modoEdicao ? 'editavel' : ''} ${usuario.email && !validarEmail(usuario.email) ? 'email-invalido' : ''}`}
            />
            <div className="perfil-email-footer" style={{color: usuario.email && !validarEmail(usuario.email) ? '#E74C3C' : '#666'}}>
              <span>{usuario.email.length}/100</span>
              {usuario.email && !validarEmail(usuario.email) && <span>Formato de email inválido</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
