import Header from './Header'
import '@fontsource/montserrat/variable.css'
import '@fontsource/roboto-mono/variable.css'


export default function Layout({ children }) {
  return (
    <>
      <div className='max-w-full overflow-x-hidden'>
        <Header/>
        <main className='bg-custom-black min-h-screen text-white pt-16 lg:pt-24'>{children}</main>
      </div>
    </>
  )
}