import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Star, Heart } from 'lucide-react'

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Padel Racket',
      description: 'Professioneel racket voor gevorderde spelers. Perfecte balans tussen kracht en controle.',
      price: '€149,99',
      originalPrice: '€179,99',
      rating: 4.8,
      reviews: 24,
      category: 'Rackets',
      image: 'https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxwYWRlbCUyMHJhY2tldCUyMHNwb3J0JTIwdHJhaW5pbmd8ZW58MHwwfHx8MTc1MjgzNzA2MHww&ixlib=rb-4.1.0&q=85',
      isNew: false,
      isSale: true
    },
    {
      id: 2,
      name: 'Beginner Padel Set',
      description: 'Complete set voor beginners inclusief racket, ballen en draagtas.',
      price: '€89,99',
      originalPrice: null,
      rating: 4.6,
      reviews: 18,
      category: 'Sets',
      image: 'https://images.unsplash.com/photo-1686721134997-a43d7de8de1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHxwYWRlbCUyMHJhY2tldCUyMHNwb3J0JTIwdHJhaW5pbmd8ZW58MHwwfHx8MTc1MjgzNzA2MHww&ixlib=rb-4.1.0&q=85',
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: 'Pro Padel Ballen (3-pack)',
      description: 'Officiële wedstrijdballen gebruikt in professionele toernooien.',
      price: '€12,99',
      originalPrice: null,
      rating: 4.9,
      reviews: 42,
      category: 'Ballen',
      image: 'https://images.unsplash.com/photo-1558594187-6ac6484bf5d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxMHx8cGFkZWwlMjBjb3VydCUyMGJsdWUlMjB0ZW5uaXMlMjB0cmFpbmluZ3xlbnwwfDB8fHwxNzUyODM3MDU2fDA&ixlib=rb-4.1.0&q=85',
      isNew: false,
      isSale: false
    },
    {
      id: 4,
      name: 'Padel Schoenen Elite',
      description: 'Speciaal ontworpen padelschoenen voor optimale grip en comfort.',
      price: '€119,99',
      originalPrice: '€139,99',
      rating: 4.7,
      reviews: 31,
      category: 'Schoenen',
      image: 'https://images.unsplash.com/photo-1693142518176-c43bad2eb5fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxwYWRlbCUyMHJhY2tldCUyMHNwb3J0JTIwdHJhaW5pbmd8ZW58MHwwfHx8MTc1MjgzNzA2MHww&ixlib=rb-4.1.0&q=85',
      isNew: false,
      isSale: true
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Rackets': return 'bg-blue-100 text-blue-800'
      case 'Sets': return 'bg-green-100 text-green-800'
      case 'Ballen': return 'bg-yellow-100 text-yellow-800'
      case 'Schoenen': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Padel Shop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek onze zorgvuldig geselecteerde collectie padeluitrusting. 
            Van rackets tot schoenen, alles wat je nodig hebt voor optimale prestaties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getCategoryColor(product.category)}>
                    {product.category}
                  </Badge>
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white">
                      Nieuw
                    </Badge>
                  )}
                  {product.isSale && (
                    <Badge className="bg-red-500 text-white">
                      Sale
                    </Badge>
                  )}
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 group/btn">
                    <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    In Winkelwagen
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Gratis verzending vanaf €75 | 30 dagen retourrecht | Persoonlijk advies
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Bekijk Volledige Shop
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Shop