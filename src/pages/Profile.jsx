import { Outlet } from 'react-router-dom'
import ProfileAsideSection from '../ui/ProfileAsideSection'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector((state) => state.user)
  console.log(user)

  return (
    <div
      className={`flex h-screen items-center justify-center gap-2 bg-[url('/images/profilebg.jpg')] bg-cover bg-center py-10 pt-20 sm:gap-2.5 sm:px-10 md:gap-6 md:px-20 lg:gap-6 lg:px-[140px]`}
    >
      <ProfileAsideSection />
      <div className="mt-16 h-[550px] w-5xl rounded-[10px] border-2 border-white/10 bg-white/2 px-2.5 py-2.5 shadow-2xl shadow-black backdrop-blur-lg">
        <Outlet context={{ user }} />
      </div>
    </div>
  )
}

export default Profile
