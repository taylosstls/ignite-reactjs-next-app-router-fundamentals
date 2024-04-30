import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="relative group col-span-6 row-span-6 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 group-hover:opacity-50 transition-all duration-500 object-cover object-center"
          src="/assets/moletom-never-stop-learning.png"
          alt="Moletom - Never Stop Learning"
          width={920}
          height={920}
          quality={100}
        />

        <div className="absolute bottom-20 right-20 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 group-hover:bg-black transition-all duration-500 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative group col-span-3 row-span-3 flex justify-center items-center rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 group-hover:opacity-50 transition-all duration-500 object-cover object-center"
          src="/assets/moletom-java.png"
          alt="Moletom - Java"
          width={460}
          height={460}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 group-hover:bg-black transition-all duration-500 p-1 pl-5">
          <span className="text-sm truncate">
            Moletom Coffee is all you need
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative group col-span-3 row-span-3 flex justify-center items-center rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 group-hover:opacity-50 transition-all duration-500 object-cover object-center"
          src="/assets/moletom-ai-side.png"
          alt="Moletom - Come to the AI Side"
          width={460}
          height={460}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 group-hover:bg-black transition-all duration-500 p-1 pl-5">
          <span className="text-sm truncate">Moletom Come to the AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}
