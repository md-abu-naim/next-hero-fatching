
const getDetailsPost = async id =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const PostDetails = async ({params}) => {
    const getData = await getDetailsPost(params.id)
    const {title, body} = getData
    return (
        <div>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
    );
};

export default PostDetails;