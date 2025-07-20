import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Award, Users, Target, Calendar, MapPin, Phone, Mail } from 'lucide-react'

const OverMij = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Gecertificeerd Trainer',
      description: 'Officiële padeltrainer certificering van de Nederlandse Padel Bond'
    },
    {
      icon: Users,
      title: '500+ Spelers Getraind',
      description: 'Meer dan 500 spelers geholpen hun padelspel te verbeteren'
    },
    {
      icon: Target,
      title: '5 Jaar Ervaring',
      description: 'Jarenlange ervaring in het trainen van spelers van alle niveaus'
    },
    {
      icon: Calendar,
      title: 'Flexibele Planning',
      description: 'Trainingen 7 dagen per week, aangepast aan jouw schema'
    }
  ]

  const certifications = [
    'Nederlandse Padel Bond - Level 3 Trainer',
    'Eerste Hulp & Reanimatie Certificaat',
    'Sport Massage Therapie',
    'Mentale Training & Coaching'
  ]

  return (
    <section id="over-mij" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Over Mij
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passie voor padel, gedreven door resultaten. Leer meer over mijn achtergrond 
            en waarom ik de juiste trainer ben om jouw padelspel naar een hoger niveau te tillen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Trainer Photo */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/padel-2.jpeg" 
                alt="Bounce Padel Trainer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Jaar Ervaring</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Hallo, ik ben Marco
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Mijn passie voor padel begon 8 jaar geleden toen ik voor het eerst een racket oppakte. 
                Wat begon als een hobby, groeide uit tot een professionele carrière als padeltrainer. 
                Ik geloof dat iedereen kan leren padellen, ongeacht leeftijd of ervaring.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mijn trainingsmethode combineert technische perfectie met tactisch inzicht en mentale 
                sterkte. Ik pas mijn aanpak aan op elke individuele speler om maximale vooruitgang 
                te garanderen.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Certificeringen:</h4>
              <div className="grid grid-cols-1 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Boek een Training
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Neem Contact Op
              </Button>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Klaar om te Beginnen?
            </h3>
            <p className="text-gray-600">
              Neem contact op voor een vrijblijvend gesprek over jouw padelambities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Telefoon</div>
                <div className="text-gray-600">+31 6 12 34 56 78</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-gray-600">info@bouncepadel.nl</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Locatie</div>
                <div className="text-gray-600">Amsterdam, Nederland</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverMij