import { createWithApollo } from "@/utils/createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { createUploadLink } from 'apollo-upload-client';
import { createHttpLink } from "apollo-link-http";
import { createWriteStream } from "fs";

const createClient = (ctx: NextPageContext) =>
new ApolloClient({
   credentials:"include",  
  cache: new InMemoryCache(),
      headers: {
      cookie:
          (typeof window === "undefined"
            ? ctx?.req?.headers.cookie
            : undefined) || "",
      },
  link: createUploadLink({
    credentials:"include",  
    uri:'http://localhost:4000/graphql', 
  })
});

// const createClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//   cache: new InMemoryCache({}),
//   uri: 'http://localhost:4000/graphql'
// });


export const withApollo = createWithApollo(createClient);
