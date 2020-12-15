# Memo The Quantum Terminals
___
Fullstack game application.

**Technologies overview**

  - React + Next.js 
  - TypeScript
  - Storybook
  - GraphQL
  - URQL + Apollo
  - Jest + React Testing Library
  - Styled Components
  - Node.js + Express
  - PostgreSQL
  - Redis




## How to

**Development mode with Docker**

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

**Development mode without Docker**

**Requirements**

 - Node.js 
 - Redis
 - PostgreSQL

*Run Server and Client in one go*

From server folder run the next command:

```sh
$ npm run runall
```

or

```sh
$ npm run runall2
```

runall - runs server from dist folder
runall2 - runs from src folder

*Server*

**1.) From DIST folder**
*Run concurrently watch and dev server*

```sh
$ npm run dev
```

*Run separately in two consoles*

```sh
$ npm run watch
$ npm run nodemon
```

**2.) From SRC folder**
*Run concurrently watch and dev server*

```sh
$ npm run dev2
```

*Run separately in two consoles*

```sh
$ npm run watch
$ npm run nodemon2
```

The application will build and start on:

```sh
http://localhost:4000
```

To access graphql playground:

```sh
http://localhost:4000/graphql
```

*Client*

```sh
$ npm run dev
```

The application will build and start on: 

```sh
http://localhost:3000
```

**Development mode with Docker**

From the root folder: 

```sh
$ docker-compose up
```


**Production Build**

.....

**Environments**


...


## Client side
## React components with props
___

### 1. Box

**Usage**

```jsx
import {Box} from "@/components/UI/Body";

function Example() {
  return 
  <Box mt={10} mb={10}>Element</Box>
}
```

**Props**

| PROPS | MEANING | TYPE |
| ------ | ------ |------ |
| mt | margin-top | number, string |
| mb | margin-bottom |  number, string |
| ml | margin-left |  number, string |
| mr | margin-right |  number, string |
| pt | padding-top |  number, string |
| pb | padding-bottom |  number, string |
| pl | padding-left |  number, string |
| pr | padding-right |  number, string |
