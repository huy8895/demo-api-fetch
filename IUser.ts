export class GithubApi{
    async findById(name:string){
        let res = await fetch(
            `https://api.github.com/search/users?q=${name}`
        )
        return await res.json();
    } ;
}

