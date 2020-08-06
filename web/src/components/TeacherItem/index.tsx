import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/8579728?s=460&u=7762b8ba21d4c3003c710ed0a76a20cc271ecc95&v=4" alt="Sabrina Queiroz" />
                <div>
                    <strong>Sabrina Queiroz</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonada por explodir coisas em laboratório e por mudar vidas das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.
                    </p>
            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;

