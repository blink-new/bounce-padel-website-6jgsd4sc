import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, Target, Star } from 'lucide-react'

const Trainingen = () => {
  const trainingen = [
    {
      id: 1,
      title: 'Beginner Training',
      description: 'Perfect voor wie net begint met padel. Leer de basis technieken en regels.',
      duration: '60 min',
      maxPersons: '4 personen',
      level: 'Beginner',
      price: '€35',
      features: ['Basis technieken', 'Spelregels', 'Positiespel', 'Veiligheid'],
      image: '/padel-2.jpeg'
    },
    {
      id: 2,
      title: 'Gevorderd Training',
      description: 'Voor spelers die hun techniek willen verfijnen en tactisch sterker willen worden.',
      duration: '75 min',
      maxPersons: '4 personen',
      level: 'Gevorderd',
      price: '€45',
      features: ['Geavanceerde technieken', 'Tactiek', 'Matchplay', 'Mentale training'],
      image: '/padel-3.jpeg'
    },
    {
      id: 3,
      title: 'Privé Training',
      description: '1-op-1 training voor maximale persoonlijke aandacht en snelle vooruitgang.',
      duration: '60 min',
      maxPersons: '1 persoon',
      level: 'Alle niveaus',
      price: '€75',
      features: ['Persoonlijke aandacht', 'Op maat programma', 'Video analyse', 'Flexibele planning'],
      image: '/padel-4.jpeg'
    },
    {
      id: 4,
      title: 'Jeugd Training',
      description: 'Speciaal ontwikkeld voor kinderen van 8-16 jaar. Leren door spelen!',
      duration: '45 min',
      maxPersons: '6 kinderen',
      level: 'Jeugd',
      price: '€25',
      features: ['Spelenderwijs leren', 'Coördinatie', 'Teamwork', 'Plezier centraal'],
      image: '/padel-1.jpeg'
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Gevorderd': return 'bg-blue-100 text-blue-800'
      case 'Alle niveaus': return 'bg-purple-100 text-purple-800'
      case 'Jeugd': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section id="trainingen" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onze Trainingen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kies de training die bij jouw niveau en doelen past. Alle trainingen worden gegeven 
            door een gecertificeerde padeltrainer met jarenlange ervaring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {trainingen.map((training) => (
            <Card key={training.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={training.image} 
                  alt={training.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getLevelColor(training.level)}>
                    {training.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-primary text-lg">{training.price}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{training.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {training.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {training.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    {training.maxPersons}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    Wat je leert:
                  </h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                    {training.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 group">
                  Boek deze Training
                  <Target className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Niet zeker welke training bij je past? Neem contact op voor persoonlijk advies.
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Gratis Adviesgesprek
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Trainingen