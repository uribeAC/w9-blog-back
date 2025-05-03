import { PostData, PostStructure } from "../types.js";

export type PostStructureDto = Omit<PostStructure, "publishDate"> & {
  publishDate?: string;
};

export type PostDataDto = Omit<PostData, "tags" | "publishDate"> & {
  tags: string;
  publishDate: string;
};
