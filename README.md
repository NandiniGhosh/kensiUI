# Experiences Interview

### Installation
First ensure you have [Node.js](https://nodejs.org/en/) installed on your machine. After cloning the repo you will need to install its dependencies by running `npm i`.

Additional dependencies can be added to the project by running `npm i --save <package-name>` or `npm i --save-dev <package-name>`.

### Running
Running `npm start` will compile the typescript code into javascript, build it into a bundle file, and then serve it at http://localhost:3000.
Saving any changes in `src/` will trigger this compile/build process again and then reload your webpage.

### References
- [React](https://reactjs.org/docs/getting-started.html) – The application is written in React and a strong understanding of React principles will be needed to complete the interview.
- [Typescript](https://www.typescriptlang.org/docs/home.html) – The application is written and configured using Typescript.
- [GraphQL](https://graphql.org/learn/) - Only a basic familiarity of GraphQL is needed to complete this interview. In particular you will need to understand how to **Query** a GraphQL API.
- [Apollo Client Queries](https://www.apollographql.com/docs/react/) - The Apollo ecosystem is large and complicated. The examples on this page illustrate almost everything you will need to do for this interview.
- [Material UI](https://material-ui.com/) - While not technically required, the application uses this library for its base components and should be very useful for building up more complicated pages.
- [Countries API GraphQL Playground](https://countries.trevorblades.com/) - A GraphQL playground is hosted here and can make exploring the API much easier than doing so through your components or something like Postman.

## Troubleshooting
- The webpack configuration file is setup to compile `.ts` and `.tsx` files. Make sure that every React component file has the `.tsx` extension and all other files have the `.ts` extension.
- This app depends on a public GraphQL endpoint https://countries.trevorblades.com/ that is not managed by KenSci. If any outages or bugs are encountered please reach out to nabil@kensci.com.
# kensi_demo
