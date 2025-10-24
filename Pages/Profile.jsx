import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import toast from 'react-hot-toast'
import HydrateFallbackElement from '../Components/hydrateFallbackElement'

const Profile = () => {
  const { user, setUser, updateProfileFunc, loading } = useContext(AuthContext)
  const [showUpdate, setShowUpdate] = useState(false)
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')

  useEffect(() => {
    setName(user?.displayName || '')
    setPhoto(user?.photoURL || '')
  }, [user])

  const handleUpdate = async (e) => {
    e.preventDefault()

    if (!showUpdate) {
      setShowUpdate(true)
      return
    }

    if (!name.trim() || !photo.trim()) {
      toast.error('All fields are required')
      return
    }

    try {
      await updateProfileFunc(name.trim(), photo.trim())
      toast.success('Profile updated')
      setUser({ ...user, displayName: name, photoURL: photo })
      setShowUpdate(false)
    } catch (error) {
      toast.error(error?.message || 'Update failed')
    }
  }

  if (loading) {
    return (
      <HydrateFallbackElement />
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-info to-success py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="flex flex-col items-center gap-5">
          <h2 className='text-4xl text-center font-bold'>Profile</h2>

          <img
            src={photo || user?.photoURL || `https://img.daisyui.com/images/profile/demo/spiderperson@192.webp`}
            alt={name || user?.displayName || 'User'}
            className="w-28 h-28 rounded-full object-cover border-4 border-success shadow-md"
          />

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {user?.displayName || name}
            </h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          <form onSubmit={handleUpdate} className="w-full">
            {showUpdate &&
              <div className='my-4 text-left space-y-2'>
                <label className="label">Name</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name Here"
                  className="input input-info w-full"
                />
                <label className="label">Photo URL</label>
                <input
                  required
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Photo URL"
                  className="input input-info w-full"
                />
              </div>
            }

            <button
              type='submit'
              className="btn btn-info btn-dash hover:text-white transition duration-300 w-full"
            >
              {showUpdate ? 'Save Changes' : 'Update Profile'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile