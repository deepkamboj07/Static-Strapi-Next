const BlogItem=({title, description, createBy, date})=>{
    return (
        <div className="w-[70%] p-5 text-black h-40 overflow-hidden shadow-sm bg-slate-300 rounded-md my-2">
            <div>
                <h1 className=" text-lg font-medium">{title}</h1>
            </div>
            <div className="mt-2">
                <p>{String(description).substring(0,200)}...</p>
            </div>
        </div>
    )
}
export default BlogItem;