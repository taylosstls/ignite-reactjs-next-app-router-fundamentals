import Image from 'next/image'

export default function ProductPage() {
  return (
    <div className="relative grid w-full max-h-[860px] grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
      <div className="col-span-3 lg:col-span-2 overflow-hidden">
        <Image
          src="/assets/moletom-never-stop-learning.png"
          alt="Moletom Never Stop Learning"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="col-span-3 lg:col-span-1 flex flex-col justify-center sm-px-0 lg:px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odio
          nobis placeat. Natus eveniet voluptatibus nemo, eligendi deserunt
          exercitationem eaque mollitia quod deleniti aperiam repellat beatae
          magni debitis dignissimos iste?
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            R$129
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/juros de R$10,75
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold transition-all hover:bg-zinc-700"
            >
              P
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white transition-all hover:bg-emerald-500"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
