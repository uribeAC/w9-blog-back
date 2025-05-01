import { PostStructureDto } from "./dto/types.js";

export interface PostStructure {
  _id: string;
  publishDate: Date;
  author: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  content: string;
  smallImageUrl: string;
  detailImageUrl: string;
}

export type PostData = Omit<PostStructure, "_id" | "publishDate" | "tags"> & {
  publishDate?: string;
  tags?: string | string[];
};

export interface responseBodyError {
  error: string;
}

export interface responseBodyPost {
  post: PostStructureDto;
}

export interface responseBodyPostsData {
  posts: PostStructureDto[];
  postsTotal: number;
}
