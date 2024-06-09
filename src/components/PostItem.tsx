import 'bootstrap/dist/css/bootstrap.min.css';
import { Post } from "../models/Post.ts";
import { Card } from 'react-bootstrap';
import "./PostItem.css"
import { useNavigate } from "react-router-dom";

type Props = { post: Post };

export function PostItem(props: Props) {
    const navigate = useNavigate();

    const onClick = () =>{
        navigate("/posts/" + props.post.id)
    }

    return (
        <Card className="bg-white h-100 border-0" onClick={onClick}>
            <Card.Body>
                <Card.Title>Title: {props.post.title}</Card.Title>
                <Card.Text>Post ID: {props.post.id}</Card.Text>
                <Card.Text>User ID: {props.post.userId}</Card.Text>
            </Card.Body>
        </Card>
    )
}
