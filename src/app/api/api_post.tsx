
const Posts = () => {
    const BASE_URL = "https://jsonplaceholder.typicode.com/"
    interface IgetPost {
        userId : number,
        id: number,
        title : String,
        body : String
    }

    const getPosts = async () => {
        try{
            const response = await fetch(`${BASE_URL}/posts`);
            const data = await response.json();
            return data
        }catch(err){
            console.error(err);
        }
       
    }
}

export default Posts;