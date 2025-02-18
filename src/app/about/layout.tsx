import { Navbar } from "../components/navbar";
import PageTransition from "@/components/page-transition";
import styles from '../styles/customFont.module.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-24">
      <div className="z-50 w-full max-w-5xl items-center justify-between font-poppins text-sm lg:flex">
        <div className="flex h-12 w-full justify-center lg:static lg:size-auto">
          <Navbar />
        </div>
      </div>

      <PageTransition>
        <div className="pt-20 md:pt-20">
          <div className="text-center mb-8 md:mb-4">
            <h1 className={`text-4xl font-semibold ${styles.customFont}`}>About Us</h1>
          </div>

          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[200px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#de2307] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[340px] before:lg:h-[260px]"></div>

          {children}
        </div>
      </PageTransition>
    </main>
  );
}
