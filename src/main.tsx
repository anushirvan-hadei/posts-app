import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.tsx'
import './index.css'
import HomePage from "./pages/HomePage.tsx";
import CreatePostPage from "./pages/CreatePostPage.tsx";
import { PostItem } from "./components/PostItem.tsx";
import PostDetailsPage from "./pages/PostDetailsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/post/create",
    element: <CreatePostPage />,
  },
  {
    path: "/posts/:postId",
    element: <PostDetailsPage/>,
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
