export const getPosts = async () => {

    const response =  await fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"});
    return await response.json();
}

export const getRandomUser = async () => {
    const user = await fetch("https://randomuser.me/api", {method: "GET"});
    const data = await user.json();
    return data.results[0];
}

