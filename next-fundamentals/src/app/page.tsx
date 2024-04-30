import { Suspense } from 'react'

import { GithubProfile } from '@/components/github-profile'
import { LongWaitComponent } from '@/components/long-wait-component'

export default function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        temporibus debitis! Porro praesentium earum, ducimus corporis iste
        laudantium aperiam nam autem? Voluptatum, quam. Quod quam rerum mollitia
        reiciendis ipsam dolores?
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
