import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer" id="containerfooter">
                <h4 className="informacoes-titulo"> Informações</h4>
                <p>
                Software, capaz de auxiliar o diagnóstico da DP (Doença de Parkinson) avaliando tremores patológicos de repouso, utilizando AM (aprendizado de máquinas) para identificar se o indivíduo é um possível portador ou não da doença, utilizando dados coletados através da sEMG (sigla do inglês: surface electromyography, eletromiografia de superfície).
              </p>
            </div>
        )
    }
}

export default Footer


