import Post from "@/models/postModel";
import connectDb from "@/utils/connectDb";
import { NextResponse } from "next/server";
import { blogs } from "@/app/blog/data";

export const GET = async () => {
  try {
    await connectDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request) => {
  // console.log(await request.json());
  try {
    await connectDb();
    // const { title, img, desc, content, username } = await request.json();
    // const newPost = new Post({ title, img, desc, content, username });
    await Post.create(blogs);
    // await newPost.save();
    return NextResponse.json("ok");
  } catch (error) {
    console.log(error);
  }
};
