export default function Page({ params }: { params: { slug: string } }) {
  return (
    <h1>slug Page {params.slug}</h1>
  )
}