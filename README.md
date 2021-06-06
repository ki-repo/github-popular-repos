## Project goal

Is to practice reactjs, through building an app to view popular github repos through one week ago [github public search api](https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc)

### Visit App Homepage [Here](https://ki-repo/.github.io//github-popular-repos/)

### Planned items:

- [x] Top 30 Repos from 7 days ago.
- [x] Starred Repos Page.
- [x] Add support for Service worker for offline use (not fully untilized yet).
- [x] To use React Query for data fetching, caching and updating data.
- [x] Use React Hooks, lazy and Suspense APIs.
- [x] Explore [styled components](https://styled-components.com/) as a CSS-in-js library.
- [x] Configure unit, Integration and E2E tests.
- [x] Autodeploy the app on github pages using github Actions.
- [x] Enable running the app through docker image.

## Run the app

1. to install project dependencies

```sh
npm install
```

2. to build the project

```sh
npm run build
```

3. to start the server, then navigate to `localhost:3000`

```sh
npm run start
```

## Run Through Docker

1. to build the image

```sh
docker build . -t react-docker
```

2. to run, then navigate to `localhost:8000`

```sh
docker run -p 8000:80 react-docker
```

# Project structure

```
build/                      web app build
src/                        project source code
|  apiCalls/                Main app API call functions along with interfaces for payload and response
|  containers/              Main app pages the represent core features
|  shared/components        App UI components that doesn't have any bussiness logic
|  shared/features          UI Components that depends on a feature and can be reused based on props
|  hooks/                   Reusable hooks used within the app
|  provides/                Set of provides that can be used within the app (currently there are none)
|  utils/                   a set of helper functions to extend some base functionality
|  styles/                  styles folder containing fonts and theme variables
|  app.tsx                  Main Component for the web app
+- ...                      app configuration files
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                   | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run build`        | build app and export to `build` folder  |
| `npm run start`        | Run server on `http://localhost:3000/`  |
| `npm run test`         | run tests                               |
| `npm run test:cypress` | run e2e tests                           |
| `npm run predeploy`    | build app to publish it to github pages |
| `npm run deploy`       | publish app to github pages             |

# Secondary tasks

Husky is used as a pre-commit hook to lint changes according to prettier rules after every commit.

# Notes:

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
