---

- !! this.setState => compiles after all sync code is finished

---

INSTALLATIONS:

- git clone repo
- cd cloned repo
- npx create-react-app .
- ( optional ) npm install react-scripts@latest
- npm install --save-dev axios
- npm install --save-dev react-router-dom
- npm install --save-dev react-loader-spinner
- in folder src create file routes.js =>
<!--
export default {
  HOME_PAGE: '/',
  MOVIES_PAGE: '/movies',
  MOVIE_DETAILS_PAGE: '/movies/:movieId',
  CASTS: '/movies/:movieId/cast',
  REVIEWS: '/movies/:movieId/reviews',
};
-->
- npm install --save-dev prop-types
- npm install --save-dev prettier
- npm install --save-dev husky@4.3.7
- npm install --save-dev lint-staged@9.4.2
- npm install --save-dev modern-normalize (in index.js => import
  'modern-normalize/modern-normalize.css')
- create file in project root .huskyrc: : { "hooks": { "pre-commit":
  "lint-staged" } }
- create file in project root .lintstagedrc: { "src/**/\*.{json,css,scss,md}":
  ["prettier --write"], "src/**/\*.{js,jsx,ts,tsx}": ["prettier --write",
  "eslint --fix"] }
- create file in project root .prettierrc.json => { "printWidth": 80,
  "tabWidth": 2, "useTabs": false, "semi": true, "singleQuote": true,
  "trailingComma": "all", "bracketSpacing": true, "jsxBracketSameLine": false,
  "arrowParens": "avoid", "proseWrap": "always" }
- folder public delete all except index.html => comment =>
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
- folder src => delete all except index.js and App.js and - clear extra imports
  and unused files in index.js and App.js
- import React from 'react' in App.js and each component file

---

JSON Server:

- npm install json-server => into project;
  https://github.com/typicode/json-server
- in package.json => in scripts add => "api-server": "json-server --watch
  db.json";
- for delaying => api-server": "json-server --delay 200 --watch db.json"
- npm start api-server

---

START NPM ( for development ):

- npm start => will serve at another port

---

DEPLOY AT NETLIFY

- npm install netlify-cli -g
- in porject route create file ntelify.toml =>
<!-- 
[build]
publish= "build" >>> for production build

[[redirects]] from="/\*" to="/index.html" status = 200 >>> for single web app
hosting -->

- netlify login => will open browser with authorization link ( in terminal must
  be => You are now logged into your Netlify account!)
- in package.json => in scripts => predeploy": "npm run build", "deploy":
  "netlify deploy -p" ( value homepage if it is, should be deleted )
- npm run deploy => Create & configure a new site => myname's team ENTER => Site
  name => uniq => ENTER => in Website URL / Live URL => our link
- netlify open --site
- delete folder .netlify
- git add . / commit / push

DEPLOY AT GITHUB

- npm install --save-dev gh-pages
- in package.json => - scripts => "homepage":
  "https://myusername.github.io/my-app"add to package.json => change to
  =>"homepage": "https://erpua.github.io/goit-react-hw-04-movies";
- in package.json => add scripts: "predeploy": "npm run build", "deploy":
  "gh-pages -d build" => "scripts": { "start": "react-scripts start", "build":
  "react-scripts build", "test": "react-scripts test", "eject": "react-scripts
  eject", "predeploy": "npm run build", "deploy": "gh-pages -d build" },
- git add . / commit / push
- npm run deploy
- add repository root to GitHub Website link

---

EXTRAS:

- Component Suspense together with lazy wrap code to download what it needs by
  that time
- In PureComponent => method shouldComponentUpdate is automatic underground
- NavLink has more styles then Link
- export default withRouter(Component) => it wrappes our component in the other
  component and passes props: history, location, match
- emoji: <span role="img" aria-label="face emoji"> 🤓 </span>
- Optional chaining (?.) =>
<!-- {
   const adventurer = { 
  name: 'Alice', 
  cat: { name:
  'Dinah', }, 
  }; console.log('object adventurer=> ', adventurer);

const dogName = adventurer.dog?.name; console.log('const dogName =
adventurer.dog?.name =>', dogName); // expected output: undefined

console.log( 'adventurer.dog?.name || does not exist =>', adventurer.dog?.name
|| 'this value " name " of property dog - does not exist', ); // expected
output: undefined

console.log( 'adventurer.someNonExistentMethod?.() =>',
adventurer.someNonExistentMethod?.(), ); // expected output: undefined } -->

Back-end:

Inner property => embed:

<!-- - => localhost:4040/authors => will receive authors -->
<!-- - => localhost:4040/authors?_embed=books => will receive each author with his books -->
<!-- - => localhost:4040/authors/2?_embed=books => will receive author with id=2 and all his books -->

Inner property => expand:

<!-- - => localhost:4040/books/2?_expand=author => will receive all books and each has its' author -->
