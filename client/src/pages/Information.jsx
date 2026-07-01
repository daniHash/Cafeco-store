import UpdateInformForm from '../features/auth/UpdateInformForm'

const Information = () => {
  return (
    <div className="flex w-full flex-col">
      <h1 className="text mt-14 text-center font-titr text-xl text-white lg:text-4xl">
        Profile Info
      </h1>
      <UpdateInformForm />
    </div>
  )
}

export default Information
