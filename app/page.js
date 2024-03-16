import Image from "next/image";
import Link from 'next/link'
import qpiLogo from '../public/qpi.jpeg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <h1>QPI</h1>

    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <Image
        className="rounded-lg"
        src={qpiLogo}
        alt="QPI Logo"
        width={200}
        height={200}
        priority
      />
    </div>

    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Link
        href="/nailPolish"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Nail Polish
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
         
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </Link>

      <Link
        href="/repair"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"

        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Nail Repair 
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
      </Link>

      <Link
        href="/treatments"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Treatments 
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Explore starter templates for Next.js.
        </p>
      </Link>

      <Link
        href="/man-ped"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Manicure & Pedicure
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </Link>
      <Link
        href="gels"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Gels
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </Link>
      <Link
        href="/wraps"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Wraps
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </Link>
    </div>
  </main>
  );
}
