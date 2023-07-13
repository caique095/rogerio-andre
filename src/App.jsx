import React from 'react';
import './App.css';

//Assets
import ImgAdv from "/assets/adv.jpg";

function App() {
  return (
    <div className="App">

        <section className="App-header">
          <h1> Advocacia XXX</h1>
          <p>Fale agora com o Dr. Rogério André, Advogado especialista em XXXX</p>
          <a href="https://api.whatsapp.com/your-whatsapp-link" className="cta-button">Falar agora com o Advogado</a>
        </section>

        <section className="intro-section">
          <div className="intro-text">
            <h1>Advogado Especialista</h1>
            <p>Fale com o Dr. Rogério André, advogado especialista em XXX</p>
            <a href="https://api.whatsapp.com/your-whatsapp-link" className="cta-button">Falar agora com o Advogado</a>
          </div>
          <div className="intro-image"> 
            <img src={ImgAdv} className="image-banner" />
          </div>
        </section>

        <section className="services-section">
          <div className="services-text">
            <h2>Serviços</h2>
            <p>Conheça nosso portfólio de serviços</p>
          </div>
        </section>

        <section className="services-cards-section">
          <div className="services-card">
            <h3>Serviço 1</h3>
            <p>Descrição do Serviço 1</p>
          </div>
          <div className="services-card">
            <h3>Serviço 2</h3>
            <p>Descrição do Serviço 2</p>
          </div>
          <div className="services-card">
            <h3>Serviço 3</h3>
            <p>Descrição do Serviço 3</p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-text">
            <h2>Sobre Mim</h2>
            <p>Rogério André, Formado no ano XXX, registro da OAB número XXXXXX-XX</p>
            <a href="https://api.whatsapp.com/your-whatsapp-link" className="cta-button">Entre em Contato</a>
          </div>
          <div className="about-image"></div>
        </section>

        <section className="testimonials-section">
          <h2>Depoimentos</h2>
          <div className="testimonials-cards">
            <div className="testimonial-card">
              <div className="testimonial-image"></div>
              <p>Depoimento do Cliente 1</p>
              <p>- Nome do Cliente 1</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image"></div>
              <p>Depoimento do Cliente 2</p>
              <p>- Nome do Cliente 2</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image"></div>
              <p>Depoimento do Cliente 3</p>
              <p>- Nome do Cliente 3</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-logo"></div>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-whatsapp"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </footer>
    </div>
  );
}

export default App;
