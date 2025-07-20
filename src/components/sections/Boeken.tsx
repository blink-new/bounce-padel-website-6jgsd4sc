import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Clock, Users, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'

const Boeken = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trainingType: '',
    date: '',
    time: '',
    participants: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Bedankt voor je boeking! We nemen binnen 24 uur contact met je op.')
  }

  const trainingTypes = [
    { value: 'beginner', label: 'Beginner Training - €35' },
    { value: 'gevorderd', label: 'Gevorderd Training - €45' },
    { value: 'prive', label: 'Privé Training - €75' },
    { value: 'jeugd', label: 'Jeugd Training - €25' }
  ]

  const timeSlots = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30'
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Flexibele Planning',
      description: 'Kies een tijd die bij jou past, 7 dagen per week beschikbaar'
    },
    {
      icon: CheckCircle,
      title: 'Persoonlijke Aandacht',
      description: 'Elke training wordt aangepast aan jouw niveau en doelen'
    },
    {
      icon: CheckCircle,
      title: 'Professionele Begeleiding',
      description: 'Gecertificeerde trainer met jarenlange ervaring'
    },
    {
      icon: CheckCircle,
      title: 'Gratis Advies',
      description: 'Krijg persoonlijke tips en een trainingsplan op maat'
    }
  ]

  return (
    <section id="boeken" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Boek je Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Klaar om je padelspel naar een hoger niveau te tillen? Boek nu je training 
            en ervaar het verschil van professionele begeleiding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Boek je Training</CardTitle>
              <CardDescription>
                Vul het formulier in en we nemen binnen 24 uur contact met je op om je boeking te bevestigen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Je volledige naam"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="je@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+31 6 12 34 56 78"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trainingType">Type Training *</Label>
                  <Select onValueChange={(value) => handleInputChange('trainingType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Kies een training" />
                    </SelectTrigger>
                    <SelectContent>
                      {trainingTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Gewenste Datum *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Gewenste Tijd *</Label>
                    <Select onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Kies een tijd" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="participants">Aantal Deelnemers</Label>
                  <Select onValueChange={(value) => handleInputChange('participants', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Aantal personen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 persoon</SelectItem>
                      <SelectItem value="2">2 personen</SelectItem>
                      <SelectItem value="3">3 personen</SelectItem>
                      <SelectItem value="4">4 personen</SelectItem>
                      <SelectItem value="5">5 personen</SelectItem>
                      <SelectItem value="6">6 personen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Bericht (optioneel)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Vertel ons over je ervaring, doelen of speciale wensen..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Boek Nu
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  * Verplichte velden. We nemen binnen 24 uur contact met je op.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Benefits & Info */}
          <div className="space-y-8">
            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Waarom Bounce Padel?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <IconComponent className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Contact Informatie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-gray-900">Telefoon</div>
                    <div className="text-gray-600">+31 6 12 34 56 78</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">info@bouncepadel.nl</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-gray-900">Locatie</div>
                    <div className="text-gray-600">Amsterdam, Nederland</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">24u</div>
                    <div className="text-sm opacity-90">Reactietijd</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Tevredenheid</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">7/7</div>
                    <div className="text-sm opacity-90">Dagen Open</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Boeken