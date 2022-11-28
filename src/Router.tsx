import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { BlogPage } from "./Pages/Blog";
import { PostPage } from "./Pages/Post";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<BlogPage />} />
                <Route path="/post/:id" element={<PostPage />} />
            </Route>
        </Routes>
    )
}