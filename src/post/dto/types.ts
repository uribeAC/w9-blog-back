import { PostStructure } from "../types.js";

export type PostStructureDto = Omit<PostStructure, "publishDate"> & {
  publishDate?: string;
};
