import Logo from './Logo'

const Footer = () => {
  return (
    <div className='flex flex-row items-center  justify-between h-[100px]'>
        <Logo />
        <div className='flex flex-row gap-8'>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
        </div>
        <p>© 2024 Andrii Vlasiuk</p>
    </div>
  )
}

export default Footer