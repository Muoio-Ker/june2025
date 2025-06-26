import React from "react";
import "./AchievementsSection.css";

const achievements = [
    {
        title: "Поддержка самоопределения и самореализации",
        description: "Помощь в раскрытии потенциала и достижении личных целей.",
        icon: "images/okey.svg",
    },
    {
        title: "Укрепление статуса",
        description: "Создание условий для повышения социальной ответственности и гражданской активности.",
        icon: "images/okey.svg",
    },
    {
        title: "Благотворительность и добровольчество",
        description: "Активное участие в благотворительных инициативах и волонтерской деятельности.",
        icon: "images/okey.svg",
    },
];

const AchievementsSection = () => {
    return (
        <section className="achievements-info">
            <div className="container">
                <h1>Наши достижения</h1>
                <div className="achievements-list">
                    {achievements.map((item, index) => (
                        <div className="achievement-item" key={index}>
                            <img src={item.icon} alt="done" />
                            <div className="achievement-text">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;