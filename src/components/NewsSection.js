import React, {useEffect, useState} from "react";
import "./NewsSection.css";
import axios from "axios";


const NewsCard = ({post}) => {
    const text =
        post.text.length > 200 ? post.text.substring(0, 200) + "..." : post.text;
    const imgSrc =
        post.images?.[0];
    const date = new Date(post.date).toLocaleDateString("ru-RU");

    return (
        <div className="news-card">
            <img src={imgSrc} alt={`Новость ${post.id}`}/>
            <h3>Новость от {date}</h3>
            <p>{text}</p>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="btn">Группа ВК</a>
        </div>
    );
};


const NewsSection = () => {
    const [newsPosts, setNewsPosts] = useState([]);

    useEffect(() => {
        axios.get("/api/v1/media/news")
            .then((res) => {
                const posts = Array.isArray(res.data?.posts) ? res.data.posts : [];
                setNewsPosts(posts);
            })
            .catch((err) => {
                console.error("Ошибка загрузки новостей:", err);
                setNewsPosts([]); // ← безопасная очистка на случай ошибки
            });
    }, []);

    return (
        <section className="news-section" id="news">
            <div className="container">
                <h2 className="section-title">Последние новости и события</h2>
                <p className="section-subtitle">
                    Следите за нашими новостями, узнавайте о наших достижениях и предстоящих мероприятиях. Убедитесь
                    сами, какие
                    позитивные изменения мы создаем.
                </p>
                <div className="news-cards">
                    {newsPosts.map((post) => (
                        <NewsCard key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;