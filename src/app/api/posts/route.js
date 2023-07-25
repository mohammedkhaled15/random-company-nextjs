import Post from "@/models/postModel";
import connectDb from "@/utils/connectDb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    // console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};

// // export const POST = async (request) => {
// //   // console.log(await request.json());
// //   try {
// //     await connectDb();
// //     // const { title, img, desc, content, username } = await request.json();
// //     // const newPost = new Post({ title, img, desc, content, username });
// //     await Post.create(blogs);
// //     // await newPost.save();
// //     return NextResponse.json("ok");
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };
