import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingBag } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          <Image
            src="/devstore.svg"
            alt="Logomarca Devstore"
            width={106}
            height={29}
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
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/taylosstls.png"
            className="h-6 w-6 object-cover object-center rounded-full"
            width={48}
            height={48}
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}
