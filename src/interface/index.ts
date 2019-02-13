import UserInfo from './user';
import Cat from './cat';
import IndexedArray from './indexed';

// 这种定义好的接口，用起来。。。太舒服了
// 代码智能提醒，定义一次就够，以后基本不同看文档了
function logUserInfo(info: UserInfo): void{
  console.log(info.avatar_url)
  console.log(info.gists_url)
  // info.login = 'hhh'
}

let info =  {
  "login": "octocat",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
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
  "site_admin": false
}
logUserInfo(info)
// logInfo({a: 'df'})
// 太爽了，真香

function run(cat: Cat): void{
  cat.run()
}
let cat = {
  name: 'Bob',
  run: function(): void{
    console.log(this.name + ' running.')
  }
}
run(cat)
// run({})

/*
function sum(indexedArr: IndexedArray): string | number{
  let sum :(string | number)
  if ( typeof sum === 'string') {
    sum = ''
  } else {
    sum = 0
  }
  for (let i = 0; i < indexedArr.length; i++) {
    sum += indexedArr(i)
  }
  return sum 
}
// ts 不让我写烂代码
*/