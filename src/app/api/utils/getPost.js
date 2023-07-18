export const getPost = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) return notFound();

  return res.json();
};
