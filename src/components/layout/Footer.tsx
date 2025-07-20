import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Trainingen', href: '#trainingen' },
    { name: 'Blog', href: '#blog' },
    { name: 'Shop', href: '#shop' },
    { name: 'Over Mij', href: '#over-mij' },
    { name: 'Boeken', href: '#boeken' }
  ]

  const trainingen = [
    { name: 'Beginner Training', href: '#trainingen' },
    { name: 'Gevorderd Training', href: '#trainingen' },
    { name: 'Privé Training', href: '#trainingen' },
    { name: 'Jeugd Training', href: '#trainingen' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Blijf op de Hoogte
            </h3>
            <p className="text-gray-400 mb-6">
              Ontvang de nieuwste padeltips, trainingsschema's en speciale aanbiedingen direct in je inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Je email adres"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Inschrijven
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Bounce Padel</h3>
            <p className="text-gray-400 leading-relaxed">
              Professionele padeltraining voor alle niveaus. Van beginner tot gevorderd, 
              wij helpen je jouw padelspel naar een hoger niveau te tillen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trainingen */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Trainingen</h4>
            <ul className="space-y-2">
              {trainingen.map((training) => (
                <li key={training.name}>
                  <a 
                    href={training.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {training.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">+31 6 12 34 56 78</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">info@bouncepadel.nl</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">Amsterdam, Nederland</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Bounce Padel. Alle rechten voorbehouden.
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              Gemaakt met <Heart className="h-4 w-4 text-red-500 mx-1" /> voor padel
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Algemene Voorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer