import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import { galada } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />

          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Antorbon.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <div className={styles.shape} />
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong className="pr-3">
              <i>ANTORBON.COM</i>
            </strong>
            <span className={`${galada.className}`}>
              বাংলাদেশের সবচেয়ে বড় ও নির্ভরযোগ্য গার্ডেনিং ষ্টোর, এখানে সকল
              ধরনের ইনডোর, আউটডোর, সেমি ইনডোর গাছ পাওয়া যায়। সারা বাংলাদেশ হোম
              ডেলিভারি দেওয়া হয়।
            </span>
          </p>
          {/* Dashboard and Log in Links */}
          <div className="flex gap-4">
            <Link
              href="/dashboard"
              className="flex items-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-500 md:text-base"
            >
              <span>Dashboard</span>
            </Link>

            <Link
              href="/login"
              className="flex items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span>
              <ArrowRightIcon className="ml-2 w-5 md:w-6" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard poject showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard poject showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
