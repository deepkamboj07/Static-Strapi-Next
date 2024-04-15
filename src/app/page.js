import Image from "next/image";
import axios from 'axios';
import api from "../../config";
import BlogItem from "./components/BlogItem";


const getBlogs = async () => {
  try {
    const res = await api().get('api/blogs')
    const data = res.data;
    return data;
  } catch (error) {
    return { error };
  }
};

const Home = async() => {

  const {data} = await getBlogs();
  //console.log(data);

  return (
    <div className=" bg-zinc-600 w-full h-[100vh] flex-col overflow-auto flex items-center">
      <h1 className=" text-center text-4xl my-10">Recent Blogs</h1>

      <div className="w-full justify-center items-center flex flex-col">
      
        {      
          data?.map(item=>{
                  return(
                    <BlogItem key={item.id} title={item.attributes.title} description={item.attributes.Description}/>
                  )
                })
        }
      </div>
    </div>
  );
}

export default Home;