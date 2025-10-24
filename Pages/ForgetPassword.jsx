import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router'
import Swal from 'sweetalert2'


const getWebmailUrl = (email) => {
  const domain = email.split('@')[1]?.toLowerCase() || ''
  if (domain.includes('gmail.com')) return 'https://mail.google.com'
  if (domain.includes('yahoo.com')) return 'https://mail.yahoo.com'
  if (domain.includes('outlook.com') || domain.includes('hotmail.com') || domain.includes('live.com')) return 'https://outlook.live.com/mail'
  if (domain.includes('icloud.com')) return 'https://www.icloud.com/mail'
  return 'https://mail.google.com'
}

const ForgetPassword = () => {
  const { forgetPassFunc } = useContext(AuthContext)
  const location = useLocation()
  const prefilledEmail = location.state?.email || ''

  const handleForgetPass = (e) => {
    e.preventDefault()
    const email = e.target.email.value

    forgetPassFunc(email)
      .then(() => {
        Swal.fire({
          title: "Reset link sent to your email",
          text: "Do you want to open your mail provider?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, open mail"
        }).then((result) => {
          if (result.isConfirmed) {
            const mailUrl = getWebmailUrl(email || prefilledEmail)
            window.open(mailUrl, '_blank')
          }
        });
      })
      .catch(err => toast.error(err.message))
  }

  return (
    <div className='w-full min-h-[70vh] py-10 flex-center bg-linear-to-b from-info to-success'>
      <div className="card bg-base-100  max-w-11/12 w-lg shrink-0 shadow-2xl p-5">
        <h2 className='text-4xl text-center font-bold mb-8'>Forget Password</h2>

        <form onSubmit={handleForgetPass} className="card-body">
          <label className="label">Email</label>
          <input required name='email' defaultValue={prefilledEmail} type="email" placeholder="Email" className="input input-info w-full" />
          <button type='submit' className="btn btn-info text-white w-full py-2 rounded mt-5">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
