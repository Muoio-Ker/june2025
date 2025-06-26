import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <footer className="site-footer">
                <div className="container-logo">
                    <div className="logo">
                        <img src="/images/vgo.png" alt="logo"/>
                    </div>
                    <div className="container-info">
                        <div className="connection-info">
                            <div className="info-action">
                                <a href="tel:+5555555555">+5555555555</a>
                                <a href="mailto:vgo@mail.ru">vgo@mail.ru</a>
                            </div>
                            <p><span>Юридический адрес</span> : 111111, Новгородская обл.,
                                Валдайский р-н,
                                Валдай г, Васильева пр., дом 111 <br/><span>Фактический адрес</span> : 111111,
                                Новгородская
                                обл., Валдайский р-н,
                                Валдай г, ул. Гагарина, д. 11/1
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-footer">
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} Все права защищены | VGO "Волонтерское движение"
                    </p>
                    <a href="https://vk.com/" target="_blank" rel="noopener noreferrer"><img src="/images/icons-vk.png" alt="VK"/></a>
                </div>
            </footer>
        </section>
    );
};

export default Footer;