export default async function Catalog() {
  const response = await fetch('https://api.github.com/users/taylosstls')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
