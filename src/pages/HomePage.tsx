import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { PostItem } from "../components/PostItem.tsx";
import { Post } from "../models/Post.ts";
import { API_URL } from "../utils/constants.ts";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [userID, setUserID] = useState<string | undefined>()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const userIdQuery = userID ? `&userId=${userID}` : "";
            const rawResponse = await fetch(`${API_URL}/posts?_limit=20&_sort=id&_order=desc${userIdQuery}`);
            const response = await rawResponse.json();
            setPosts(response)
        }
        fetchPosts()
    }, [userID])

    const onChange = (event) => {
        setUserID(event.target.value)
    }

    const onClick = () => {
        navigate("/post/create")
    }

    const content = posts.length ? (
        <Row>
            {posts.map((post, index) => {
                return (
                    <Col xl={4} className="gap-2 my-2">
                        <PostItem key={index} post={post}/>
                    </Col>
                )
            })}
        </Row>
    ) : (<span className="mx-auto">No posts found</span>)

    return (
        <Container className="d-flex flex-column mx-auto">
            <div className="d-flex flex-row">
                <Form.Control className="my-3 bg-white" placeholder="Search by UserID" onChange={onChange}/>
                <Button className="ms-4 button-new-post my-auto" style={{width: "10rem"}} variant="primary" onClick={onClick}>Add Post</Button>
            </div>
            {content}
        </Container>
    )
}

export default HomePage

