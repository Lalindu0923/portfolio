const Footer = () => {
  return (
    <footer className='bg-[#0F89B5] text-white text-center p-2 mt-4'>
      <div className='inline-block p-1' >
      <h4>Contact Me:</h4>
      <div className='gap-12 flex justify-center items-center mt-4 mb-5'>
        <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" className='inline-block mx-2' />
        <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className='inline-block mx-2' />
        <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="whatsapp" className='inline-block mx-2' />
        <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png" alt="instagram" className='inline-block mx-2' />
        <img src="https://img.icons8.com/ios-filled/50/ffffff/gmail.png" alt="gmail" className='inline-block mx-2' />
      </div>
      </div>
      <p className=''>© 2023 My App</p>
    </footer>
  )
}

export default Footer