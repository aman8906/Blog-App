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
          `${import.meta.env.VITE_API_BASE_URL}/api/blogs/my-blog`,
          { withCredentials: true }
        );
        console.log("Fetched Blogs: ", data);
        setMyBlogs(data.blogs || []); // ✅ Ensure you're accessing the right key
      } catch (error) {
        console.log(error);
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
    <div className="w-full overflow-y-auto px-4 py-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {myBlogs && myBlogs.length > 0 ? (
          myBlogs.map((blog) => (
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              key={blog._id}
            >
              <img
                src={blog?.blogImage?.url || "https://via.placeholder.com/300x200"}
                alt="blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-gray-600">{blog.category}</span>
                <h4 className="text-xl font-semibold my-2">{blog.title}</h4>
                <div className="flex justify-between mt-4">
                  <Link
                    to={`/blog/update/${blog._id}`}
                    className="text-blue-500 bg-white rounded-md shadow px-3 py-1 border border-gray-300 hover:underline"
                  >
                    UPDATE
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-500 bg-white rounded-md shadow px-3 py-1 border border-gray-300 hover:underline"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            You have not posted any blog to see!
          </p>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;
