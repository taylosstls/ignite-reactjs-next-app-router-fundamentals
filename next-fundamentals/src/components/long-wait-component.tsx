export async function LongWaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return (
    <div>
      <p>Carregado!</p>
    </div>
  )
}
