import React from "react";
import { useAuth } from "../context/AuthProvider";

function MyProfile() {
  const { profile } = useAuth();
  const user = profile?.user;

  console.log("User Data:", user);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
        <div className="relative">
          {/* Top Banner Image */}
          {user?.photo?.url ? (
            <>
              <img
                src={user.photo.url}
                alt="cover"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
                <img
                  src={user.photo.url}
                  alt="avatar"
                  className="w-24 h-24 rounded-full mx-auto border-4 border-gray-700 bg-white object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">No cover image</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
                <div className="w-24 h-24 rounded-full mx-auto border-4 border-gray-700 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No Avatar</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="px-6 py-8 mt-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user?.name || "Name not available"}
          </h2>
          <p className="text-gray-600 mt-2">{user?.email || "No Email"}</p>
          <p className="text-gray-600 mt-2">{user?.phone || "No Phone"}</p>
          <p className="text-gray-600 mt-2 uppercase">
            {user?.role || "User"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;

