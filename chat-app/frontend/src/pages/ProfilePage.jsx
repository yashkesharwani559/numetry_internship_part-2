import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-8 shadow-xl space-y-8 border border-purple-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Profile</h1>
            <p className="mt-2 text-gray-600">Manage your personal information</p>
          </div>

          {/* avatar upload section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="relative size-32 rounded-full object-cover border-4 border-white group-hover:scale-105 transition duration-300"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-110
                  p-2.5 rounded-full cursor-pointer 
                  transition-all duration-300 shadow-lg
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none opacity-70" : ""}
                `}
              >
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-gray-600">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5 group">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <User className="w-4 h-4 text-indigo-500" />
                Full Name
              </div>
              <p className="px-4 py-3 bg-white rounded-xl border border-purple-100 group-hover:border-purple-200 group-hover:shadow-md transition duration-300">
                {authUser?.fullName}
              </p>
            </div>

            <div className="space-y-1.5 group">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-500" />
                Email Address
              </div>
              <p className="px-4 py-3 bg-white rounded-xl border border-purple-100 group-hover:border-purple-200 group-hover:shadow-md transition duration-300">
                {authUser?.email}
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-purple-100">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Account Information
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-600">Account Status</span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-medium border border-emerald-200">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
