let data = {
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://avatars3.githubusercontent.com/u/583231?v=4&s=460",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}










let TheBasics = document.querySelector('.TheBasics');

function displayBasics () {

  let dat = JSON.parse(this.responseText);

console.log(dat);

let template = '';

  template += `
  <div>
  <h3> The Basics <h3>
  <p>Name: ${data.name}</p>
  <p>Website: ${data.url}</p>
  <p>Email: ${data.email}</p>
  <p>Company: ${data.company}</p>
  <p>Blog: ${data.blog}</p>
 </div>
   <div>
 <h3> The Story<h3>

 <p>${data.bio}</p>
 </div>
 <div><img src= "${data.avatar_url}"></div>
  `;
  TheBasics.innerHTML = template;
}


let request = new XMLHttpRequest();
request.addEventListener("load", displayBasics);
request.open('GET', 'https://api.github.com/users/cwonokay');
request.send();
