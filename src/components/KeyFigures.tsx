import { Card } from "@/components/ui/card";

const KeyFigures = () => {
  const figures = [
    { number: "10+", label: "Successful Brands" },
    { number: "7+", label: "Industries" },
    { number: "250+", label: "Dedicated Employees" },
    { number: "20,000+", label: "sq ft Manufacturing" }
  ];

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            RO Group by the Numbers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {figures.map((figure, index) => (
            <Card key={index} className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-corporate-gold mb-2">
                {figure.number}
              </div>
              <div className="text-white text-lg font-medium">
                {figure.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;