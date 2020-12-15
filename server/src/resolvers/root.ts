import MeResolver from "./User/Me";
import FilesResolver from "./Files/Files";
import LoginResolver from "./User/Login";
import UploadFileResolver from "./Files/uploadFile";
import RegisterResolver from "./User/Register";

export const resolvers = {
 Query: {
    ...FilesResolver,
    ...MeResolver
  },
  Mutation: {
    ...UploadFileResolver,
    ...LoginResolver,
    ...RegisterResolver
  }
}