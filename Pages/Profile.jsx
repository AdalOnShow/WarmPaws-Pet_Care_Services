import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";
import HydrateFallbackElement from "../Components/hydrateFallbackElement";

const Profile = () => {
  const { user, setUser, updateProfileFunc, loading } = useContext(AuthContext);
  const [showUpdate, setShowUpdate] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setName(user?.displayName || "");
    setPhoto(user?.photoURL || "");
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!showUpdate) {
      setShowUpdate(true);
      return;
    }

    if (!name.trim() || !photo.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      await updateProfileFunc(name.trim(), photo.trim());
      toast.success("Profile updated");
      setUser({ ...user, displayName: name, photoURL: photo });
      setShowUpdate(false);
    } catch (error) {
      toast.error(error?.message || "Update failed");
    }
  };

  if (loading) {
    return <HydrateFallbackElement />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-linear-to-b from-info to-success">
      <div className="w-full max-w-md p-8 text-center bg-white shadow-xl rounded-2xl">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-4xl font-bold text-center">Profile</h2>

          <img
            src={
              photo ||
              user?.photoURL ||
              `https://img.daisyui.com/images/profile/demo/spiderperson@192.webp`
            }
            alt={name || user?.displayName || "User"}
            className="object-cover border-4 rounded-full shadow-md w-28 h-28 border-success"
          />

          <div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
              {user?.displayName || name}
            </h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          <form onSubmit={handleUpdate} className="w-full">
            {showUpdate && (
              <div className="my-4 space-y-2 text-left">
                <label className="label">Name</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name Here"
                  className="w-full input input-info"
                />
                <label className="label">Photo URL</label>
                <input
                  required
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Photo URL"
                  className="w-full input input-info"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full transition duration-300 btn btn-info btn-dash hover:text-white"
            >
              {showUpdate ? "Save Changes" : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
