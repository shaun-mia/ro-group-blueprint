import { Venture } from '@/data/ventures'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface VentureCardProps {
  venture: Venture;
}

export function VentureCard({ venture }: VentureCardProps) {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300">
      <div className={`p-6 ${venture.color} bg-opacity-10 rounded-t-lg`}>
        <div className="text-6xl mb-4 text-center">{venture.icon}</div>
        <Badge variant="outline" className="mb-2">{venture.category}</Badge>
        <h3 className="text-xl font-bold text-corporate-navy mb-2">{venture.name}</h3>
        <p className="text-sm text-corporate-gold font-medium">Est. {venture.keyFacts.established}</p>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground text-sm mb-4">{venture.headline}</p>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Team Size:</span>
            <span className="font-medium">{venture.keyFacts.teamSize}</span>
          </div>
          {venture.keyFacts.annualSales && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Revenue:</span>
              <span className="font-medium">{venture.keyFacts.annualSales}</span>
            </div>
          )}
        </div>
        
        <div className="mt-6 space-y-2">
          <Button asChild className="w-full" variant="default">
            <Link to={`/ventures/${venture.slug}`}>Learn More</Link>
          </Button>
          <Button asChild className="w-full" variant="outline">
            <Link to={`/careers/${venture.slug}`}>View Careers</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
