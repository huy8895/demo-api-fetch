const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.github.com/search/users?q=huy88";

xhr.open(method, url, true);
xhr.onload = function () {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
            console.log(JSON.parse(xhr.responseText));
            console.log(xhr.readyState);
            console.log(xhr.status);
            console.log('xhr.response' + xhr.response.parseJSON);
            console.log(xhr.responseURL);
        } else {
            // Oh no! There has been an error with the request!
        }
    }
};
xhr.send();