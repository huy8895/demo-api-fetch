class User {
    username: string;

    constructor(username: string) {
        this.username = username;
    }

    async getUser() {
        const response = await fetch(
            `https://api.github.com/search/users?q=${this.username}`
        );
        return await response.json();
    }
}

function search() {
    // @ts-ignore
    let key: string = document.getElementById('search_box').value;
    const u = new User(key);
    u.getUser()
        .then((res) => {
            console.log(res)
            createTd(res.items)
        })
        .catch(err => console.warn(err));
}



function createTd(list: any) {
    let demo = document.getElementById('info');
    let template = '<tr>\n' +
        '        <td>id</td>\n' +
        '        <td>login_name</td>\n' +
        '        <td>avatar</td>\n' +
        '        <td>link_github</td>\n' +
        '    </tr>';
    for (let i = 0; i < list.length; i++) {
        template += `<tr><td>${list[i].id}</td>
        <td>${list[i].login}</td>
        <td><img src="${list[i].avatar_url}" height="60px" width="auto"/></td>
        <td><a href="${list[i].html_url}" >link_github</a></td>
        </tr>`
    }
    // @ts-ignore
    demo.innerHTML = template;
}
