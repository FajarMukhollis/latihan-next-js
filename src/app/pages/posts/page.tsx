import styles from "../posts/posts.module.css";
import Posts from "../../api/api_post";
import CardList from '../../components/CardList';
import React from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

interface IgetPost {
    userId: number,
    id: number,
    title: String,
    body: String
}

const PagePost = async () => {
    const response = await fetch(BASE_URL);
    const posts: IgetPost[] = await response.json();
    return (
        <main className={styles.flexBox}>
            {posts.map((post) => {
                return (
                    <div key={post.id} className={styles.card}>
                        <CardList>
                            <h1 className={styles.cardTitle}>{post.title}</h1>
                            <p className={styles.cardDescription}>{post.body}</p>
                        </CardList>
                    </div>
                )
            })}

        </main>
    );
};

export default PagePost;
