import Link from 'next/link';
import Cta from './Cta';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';  

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const headerLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Work',
      link: '/work',
    },
    {
      name: 'Contact',
      link: '/contact',
    }
  ]; 
  const variants = {
    open: { x: 0 },
    closed: { x: '100%' },
  };
  const { pathname } = useRouter();
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]); 
  
  const textCyan = (link) => { link.link === pathname ? 'text-cyan-300' : 'text-white' };

  return (
    <>
      <div className="w-full fixed backdrop-blur-xl bg-opacity-30 h-16 z-10 md:h-24 flex items-center bg-custom-black">
        <div className="container flex items-center justify-between">
          <Link
            href="/"
            className="font-mono flex items-center text-cyan-300 font-light text-xl lg:text-2xl"
          >
            <svg
              className="flex text-white w-6 h-auto mr-1"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8L3 12L7 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 8L21 12L17 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 4L9.8589 19.4548"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            pCreative
          </Link>
          <nav className="pc-header__nav hidden md:flex text-white">
              {headerLinks && headerLinks.map((link) => (
                <Link className={`${textCyan(link)} relative mx-4 font-mono text-lg`} href={link.link} key={link.name} >
                  { link.link === pathname && 
                   (<motion.span layoutId='underline' className='absolute left:0 top-full bg-white block w-full h-[1px]'></motion.span> )}
                   {link.name} 
                </Link>
              ))}   
          </nav>
          <div className="hidden md:flex">
            <Cta>Contacto</Cta>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="p-2 inline-flex items-center justify-center text-cyan-300 hover:text-cyan-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        animate={openMenu ? 'open' : 'closed'}
        variants={variants}
        initial="closed"
        transition={{ duration: 0.5 }}
        className={`pc-menu__wrapper md:hidden z-50 fixed inset-0 p-2`}
      >
        <div className="rounded-lg shadow-lg ring-1 h-full ring-black ring-opacity-5 bg-slate-700">
          <div className="px-2">
            <div className="flex items-center justify-between">
              <div className="mt-2">
              </div>

              <div className="-mr-2">
                <button
                  type="button"
                  onClick={() => setOpenMenu(false)}
                  className="p-2 inline-flex items-center justify-center text-cyan-300 hover:text-cyan-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-4">
              <nav className="grid gap-y-8 text-center text-white text-2xl font-mono font-bold place-items-center p-8">
                <Link href="/">Home</Link>
                <Link href="/about/">About</Link>
                <Link href="/work/">Work</Link>
                <Cta>Contacto</Cta>
              </nav>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
