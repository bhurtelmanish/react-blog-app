import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { AllPostsPageRoute, HomePageRoute, SinglePostPageRoute } from "./assets/Routes";
import SingleBlog from "./pages/SingleBlog";
import NotFoundPage from "./pages/NotFoundPage";
import { lazy , Suspense } from "react";

const App = () => {
  const Blogs = lazy(() => import("./pages/Blogs"));
  return (
    <>
    <div className="h-auto w-screen bg-[var(--darkBackground)] text-[var(--lightColor)]">
      <div className="max-w-[var(--maxWidth)] m-auto ">
        <Navbar />
        <Suspense fallback={() => <h1>Loading....</h1>}>
          <Routes>
            <Route exact path={HomePageRoute} element={<Home />} />
            <Route  path={AllPostsPageRoute} element={<Blogs />} />
            <Route  path={SinglePostPageRoute} element={<SingleBlog/>} />
            <Route  path="*" element={<NotFoundPage/>} />
          </Routes>
        </Suspense>
      </div>
    </div>
    </>
  )
}

export default App;