import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div
      className={`flex h-[742px] items-center justify-center gap-6 rounded-b-md bg-[url('/images/profilebg.jpg')] bg-cover bg-center py-10 pt-20 sm:px-10 md:px-20 lg:px-[140px]`}
    >
      <div className="mt-16 h-[550px] w-40 rounded-[10px] border-2 border-white/10 bg-white/2 px-2.5 py-2.5 shadow-2xl shadow-black backdrop-blur-lg"></div>
      <div className="mt-16 h-[550px] w-5xl rounded-[10px] border-2 border-white/10 bg-white/2 px-2.5 py-2.5 shadow-2xl shadow-black backdrop-blur-lg">
        <Outlet />
      </div>
    </div>
  )
}

export default Profile
