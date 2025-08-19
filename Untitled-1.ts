import { Layout } from '@/components/layout'
import { VentureCard } from '@/components/ventures/VentureCard'
import { ventures } from '@/data/ventures'

export default function VenturesPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture) => (
            <VentureCard key={venture.slug} venture={venture} />
          ))}
        </div>
      </div>
    </Layout>
  )
}