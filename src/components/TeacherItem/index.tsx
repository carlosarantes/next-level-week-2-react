import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://veja.abril.com.br/wp-content/uploads/2017/12/tiririca-despedida.jpg?quality=70&strip=info&w=680&h=453&crop=1" alt="Abestado" />
            <div>
                <strong>Tiririca</strong>
                <span>Ciências Filosóficas</span>
            </div>
        </header>

        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, omnis, <br/><br/>
        porro quod quo praesentium, est accusantium culpa tenetur reprehenderit repudiandae fugiat sed 
        natus voluptatem. Autem nesciunt expedita cumque dolores doloremque.
        </p>

        <footer>
            <p>
                Preço/Hora 
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato" />
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;