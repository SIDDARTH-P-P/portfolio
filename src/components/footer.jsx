export default function Footer(){
    return(
        <>
    <footer className="bg-yellow-300 text-dark py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm ps-6">© 2024 Your Website</div>
        <div className="flex space-x-4">
          <a href="" className="hover:text-gray-500"><span><img className="w-[20px]" src="./email.png" alt="" /></span></a>
          <a href="#" className="hover:text-gray-500"><span><img className="w-[20px]" src="./whatsapp.png" alt="" /></span></a>
          <a href="#" className="hover:text-gray-500"><span><img className="w-[20px]" src="./in.png" alt="" /></span></a>
          <a href="https://www.instagram.com/_.s.i.d.d.a.r.t.h_?igsh=MWpmNTJhNGJ2MDY5dg==" className="hover:text-gray-500"><span><img className="w-[20px] me-5" src="./insta.svg" alt="" /></span></a>
        </div>
      </div>
    </footer>
        </>
    );
}