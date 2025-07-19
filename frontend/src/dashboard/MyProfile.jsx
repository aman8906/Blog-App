import React from "react";
import { useAuth } from "../context/AuthProvider";

function MyProfile() {
  const { profile } = useAuth();
  const user = profile?.user;

  const coverImage = user?.photo?.url || "/default-cover.jpg";
  const avatarImage = user?.photo?.url || "/default-avatar.png";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
        <div className="relative">
          <img
            src={coverImage}
            alt="cover"
            className="w-full h-48 object-cover bg-gray-200"
          />
          <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
            <img
              src={avatarImage}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto border-4 border-white"
            />
          </div>
        </div>
        <div className="px-6 py-8 mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user?.name || "No Name"}
          </h2>
          <p className="text-gray-600">{user?.email || "No Email"}</p>
          <p className="text-gray-600">{user?.phone || "No Phone"}</p>
          <p className="text-gray-600">{user?.role?.toUpperCase() || "USER"}</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
