import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">Свяжитесь с нами</h2>
                <p className="section-subtitle">
                    Вы можете связаться с нашими сотрудниками. Здесь вы найдете контактную информацию и ссылки на их
                    страницы в профессиональных сетях.</p>
                <div className="connection-cards">
                    <div className="connection-card">
                        <img src="/images/ivan.jpeg" alt="Иванов Иван Иванович"/>
                        <h3>Иванов Иван Иванович</h3>
                        <p>Руководитель проектов</p>
                        <div className="line"></div>
                        <p>Председатель VGO "Волонтерское движение"<br />
                            +5555555555</p>
                    </div>
                    <div className="connection-card">
                        <img src="/images/irina.jpeg" alt="Иритова Ирина Александровна"/>
                        <h3>Иритова Ирина Александровна</h3>
                        <p>Руководитель инклюзивных проектов</p>
                        <div className="line"></div>
                        <p>Руководитель проектов по Фонду президентских грантов, направленных на улучшение качества
                            жизни семей, воспитывающих детей с ОВЗ и детей-инвалидов. +5555555555</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
