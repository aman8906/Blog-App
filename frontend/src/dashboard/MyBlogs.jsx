import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function MyBlogs() {
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/blogs/my-blog`, // ✅ FIXED here: "my-blog" not "my-blogs"
          {
            withCredentials: true,
          }
        );

        // Backend should return { blogs: [...] }
        setMyBlogs(data.blogs || []);
      } catch (error) {
        console.error("Fetch My Blogs Error:", error);
        toast.error(
          error?.response?.data?.message || "Failed to fetch blogs"
        );
      }
    };

    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/blogs/delete/${id}`,
        { withCredentials: true }
      );
      toast.success(res.data.message || "Blog deleted successfully");
      setMyBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to delete blog"
      );
    }
  };

  return (
    <div className="container mx-auto my-12 p-4">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:ml-20">
        {myBlogs.length > 0 ? (
          myBlogs.map((blog) => (
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              key={blog._id}
            >
              {blog?.blogImage?.url && (
                <img
                  src={blog.blogImage.url}
                  alt="blog"
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <span className="text-sm text-gray-600">{blog.category}</span>
                <h4 className="text-xl font-semibold my-2">{blog.title}</h4>
                <div className="flex justify-between mt-4">
                  <Link
                    to={`/blog/update/${blog._id}`}
                    className="text-blue-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:underline"
                  >
                    UPDATE
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:underline"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            You have not posted any blog yet!
          </p>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;
