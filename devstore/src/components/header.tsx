import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingBag } from 'lucide-react'

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-0">
      <div className="flex flex-wrap justify-center items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          <Image
            className="lg:w-[106px] lg:h-[29]"
            src="/devstore.svg"
            alt="Logomarca Devstore"
            width={141}
            height={39}
          />
        </Link>

        <form className="flex w-[320px] group gap-3 items-center rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 transition-colors text-zinc-500 duration-300 group-focus-within:text-violet-500" />
          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 relative">
          <ShoppingBag className="h-6 w-6 mr-2" />
          <span className="absolute -bottom-3.5 -right-2 text-sm text-center rounded-full flex justify-center align-middle items-center h-6 w-6 p-3 bg-violet-500">
            0
          </span>
        </div>

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-3 hover:underline">
          <span className="text-sm">Conta</span>
          <Image
            src="https://github.com/taylosstls.png"
            className="h-8 w-8 object-cover object-center rounded-full"
            width={48}
            height={48}
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}
