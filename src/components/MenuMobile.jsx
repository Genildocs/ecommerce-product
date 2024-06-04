export default function MenuMobile({ isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="absolute top-0  left-0 bg-black min-h-screen w-[50vw] transition-all duration-500  md:hidden">
          <ul className="absolute top-[10%] left-5 flex flex-col items-center gap-8 text-white">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
