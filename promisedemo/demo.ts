function getUserGitInfo(username: string): Promise<any> {
    const url = `https://api.github.com/search/users?q=${username}`
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status === 200) {
// Success
                    resolve(this.response);
                } else {
// Something went wrong (404 etc.)
                    reject(new Error(this.statusText));
                }
            };
            request.onerror = function () {
                reject(new Error('XMLHttpRequest Error: ' + this.statusText));
            };
            request.open('GET', url);
            request.send();
        });
}

getUserGitInfo('huy8895')
    .then(
        function (value) {
            console.log('Contents: ' + value.toString());
        },
        function (reason) {
            console.error('Something went wrong', reason);
        });