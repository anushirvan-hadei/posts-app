import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { API_URL } from "../utils/constants.ts";
import "./HomePage.css";
import { useParams } from "react-router-dom";
import { Post } from "../models/Post.ts";
import Container from "react-bootstrap/Container";

function PostDetailsPage() {
    const [post, setPost] = useState<Post | undefined>()
    const params = useParams();

    useEffect( () => {
        const fetchPost = async () => {
            const rawResponse = await fetch(`${API_URL}/posts/${params.postId}`);
            const response = await rawResponse.json();
            setPost(response)
        }
        fetchPost()
    }, []);

    const getTitle = ()=> {
        if (!post?.title) return "";
        return post.title.charAt(0).toUpperCase() + post.title.substring(1);
    }

    return (
       <Container className="d-flex flex-column mx-auto bg-white m-3 rounded-2">
           <span className="fw-bold fs-5 m-3">{getTitle()}</span>
           <p className="fs-5 m-3 h-100">{post?.body}</p>
       </Container>
    )
}

export default PostDetailsPage