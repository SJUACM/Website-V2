import { Navbar } from "../components/navbar";
import Image from "next/image";
import Logo from "../../../public/images/SJU_ACM_Logo.png";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-50 w-full max-w-5xl items-center justify-between font-poppins text-sm lg:flex">
        <div className="flex h-24 w-full justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Navbar />
          <a
            className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
            href="/"
          >
            <Image
              src={Logo}
              alt="SJU ACM Logo"
              width={140}
              height={48}
              className="mt-[-65px]"
              priority
            />
          </a>
        </div>
      </div>

      <div className="pt-48">
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[400px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#de2307] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[340px] before:lg:h-[360px text-4xl text-center"></div>

        {children}
      </div>
    </main>
  );
}
