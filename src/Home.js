
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import {motion as m} from "framer-motion";

const Home = () => {
    
    const {data:blogs, isPending, isError} = useFetch("http://localhost:8000/blogs")

    return ( 
        <div className="homepage">
            { isError && <div>{isError}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;