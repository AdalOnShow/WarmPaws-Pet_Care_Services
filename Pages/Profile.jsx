import React, { use, useRef, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import toast from 'react-hot-toast'


const Profile = () => {
  const { user, updateProfileFunc } = use(AuthContext)
  const [showUpdate, setShowUpdate] = useState(false)
  const nameRef = useRef()
  const photoRef = useRef()


  const handleUpdate = (e) => {
    e.preventDefault()
    const name = nameRef.current?.value
    const photo = photoRef.current?.value

    if (!showUpdate) {
      setShowUpdate(true)
      return
    } else {
      updateProfileFunc(name, photo)
        .then(() => {
          toast.success("User Register success")
          setShowUpdate(false)
        })
        .catch(error => {
          toast.error(error.massage)
        })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-info to-success py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="flex flex-col items-center gap-5">
          <h2 className='text-4xl text-center font-bold'>Login Now!</h2>

          <img
            src={user.photoURL ? user.photoURL : `https://img.daisyui.com/images/profile/demo/spiderperson@192.webp`}
            alt={user.displayName}
            className="w-28 h-28 rounded-full object-cover border-4 border-success shadow-md"
          />

          <div className="">
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {user.displayName}
            </h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
          <form>
            {showUpdate &&
              <div className='my-4 text-left space-y-2'>
                <label className="label">Name</label>
                <input required type="text" ref={nameRef} placeholder="Enter Your Name Here" className="input input-info w-full" />
                <label className="label">Photo URL</label>
                <input required type="text" ref={photoRef} placeholder="Photo URL" className="input input-info w-full" />
              </div>
            }
            <button
              type='submit'
              onClick={(e) => handleUpdate(e)}
              className="btn btn-info btn-dash hover:text-white transition duration-300"
            >
              Update Profile
            </button>
          </form>


        </div>
      </div>
    </div>
  );
}

export default Profile