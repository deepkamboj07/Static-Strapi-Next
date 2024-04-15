import Image from "next/image";
import axios from 'axios';
import BlogItem from "../components/BlogItem";

const Home = ({ items, error }) => {

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className=" bg-zinc-600 w-full h-[100vh] flex-col overflow-auto flex items-center">
      <h1 className=" text-center text-4xl">Recent Blogs</h1>

      <div className="w-full justify-center items-center">
      
      {
        items?.map(item=>{
          return(
            <BlogItem title={item.attributes.title} description={item.attributes.description}/>
          )
        })
      }
      </div>
    </div>
  );
}


Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/blogs');
    const data = res.data;
    console.log(data);
    return data?.data;
  } catch (error) {
    return { error };
  }
};

export default Home;