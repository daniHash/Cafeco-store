import AddressItem from './AddressItem'

const AddressList = () => {
  return (
    <ul className="mt-8 flex list-none flex-col items-center justify-center gap-3.5 divide-y-2 divide-black overflow-auto">
      <AddressItem />
      <AddressItem />
      <AddressItem />
      <AddressItem />
    </ul>
  )
}

export default AddressList
