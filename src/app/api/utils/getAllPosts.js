export const getAllPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Error Fetching Data");

  return res.json();
};
