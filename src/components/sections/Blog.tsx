import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '5 Essentiële Padel Technieken voor Beginners',
      excerpt: 'Leer de fundamentele technieken die elke padelspeler moet beheersen om succesvol te zijn op de baan.',
      category: 'Technieken',
      readTime: '5 min',
      date: '15 Jan 2024',
      author: 'Bounce Padel',
      image: 'https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxwYWRlbCUyMHJhY2tldCUyMHNwb3J0JTIwdHJhaW5pbmd8ZW58MHwwfHx8MTc1MjgzNzA2MHww&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      title: 'De Perfecte Padel Uitrusting: Een Complete Gids',
      excerpt: 'Ontdek welke uitrusting je nodig hebt om optimaal te presteren en blessures te voorkomen.',
      category: 'Uitrusting',
      readTime: '7 min',
      date: '10 Jan 2024',
      author: 'Bounce Padel',
      image: 'https://images.unsplash.com/photo-1686721134997-a43d7de8de1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHxwYWRlbCUyMHJhY2tldCUyMHNwb3J0JTIwdHJhaW5pbmd8ZW58MHwwfHx8MTc1MjgzNzA2MHww&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 3,
      title: 'Tactiek en Strategie: Hoe Win je Meer Punten?',
      excerpt: 'Leer de tactische aspecten van padel en hoe je slimmer kunt spelen om meer wedstrijden te winnen.',
      category: 'Tactiek',
      readTime: '6 min',
      date: '5 Jan 2024',
      author: 'Bounce Padel',
      image: 'https://images.unsplash.com/photo-1715333149284-38a5f7e0e23a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxwYWRlbCUyMHJhY2tldCUyMHNwb3J0JTIwdHJhaW5pbmd8ZW58MHwwfHx8MTc1MjgzNzA2MHww&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 4,
      title: 'Blessurepreventie voor Padelspelers',
      excerpt: 'Belangrijke tips om blessures te voorkomen en je lichaam optimaal voor te bereiden op het spel.',
      category: 'Gezondheid',
      readTime: '4 min',
      date: '28 Dec 2023',
      author: 'Bounce Padel',
      image: 'https://images.unsplash.com/photo-1693142518176-c43bad2eb5fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxwYWRlbCUyMHJhY2tldCUyMHNwb3J0JTIwdHJhaW5pbmd8ZW58MHwwfHx8MTc1MjgzNzA2MHww&ixlib=rb-4.1.0&q=85'
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technieken': return 'bg-blue-100 text-blue-800'
      case 'Uitrusting': return 'bg-green-100 text-green-800'
      case 'Tactiek': return 'bg-purple-100 text-purple-800'
      case 'Gezondheid': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Padel Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Blijf op de hoogte van de laatste tips, technieken en trends in de padelwereld. 
            Onze blog helpt je om je spel naar een hoger niveau te tillen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary hover:text-white">
                  Lees Meer
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Bekijk Alle Artikelen
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog