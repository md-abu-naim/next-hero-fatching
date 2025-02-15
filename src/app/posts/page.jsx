import { getPosts } from "@/services/postApi";
import Link from "next/link";


const PostPage = async() => {
    const postData = await getPosts()

    return (
        <div>
            <h6>Post page</h6>
            <div className="grid grid-cols-4 gap-6">
{
    postData.map(({title, body, id}) => <div key={id} className="border-2 p-2">
        <h1>Title: {title}</h1>
        <p>Description:  {body}</p>
        <Link href={`/posts/${id}`} className="btn">Details</Link>
    </div>) 
}
            </div>
        </div>
    );
};

export default PostPage;