"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Heart, MessageCircle, BookOpen, Clock, TrendingUp } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const [poems] = useState([
    {
      id: 1,
      title: "Whispers of Dawn",
      author: "Anonymous Poet",
      excerpt:
        "In the quiet moments before sunrise, thoughts dance like shadows on the wall, painting stories of yesterday's dreams and tomorrow's hopes...",
      tags: ["nature", "reflection", "dawn"],
      language: "English",
      likes: 24,
      comments: 8,
      timeAgo: "2 hours ago",
      category: "nature",
    },
    {
      id: 2,
      title: "दिल की बात",
      author: "कवि मित्र",
      excerpt: "जो बात दिल में छुपी है, वो शब्दों में कैसे आए, जैसे चांद की रोशनी में, सपने कैसे सजाए...",
      tags: ["emotions", "heart", "hindi"],
      language: "Hindi",
      likes: 31,
      comments: 12,
      timeAgo: "4 hours ago",
      category: "emotions",
    },
    {
      id: 3,
      title: "Echoes of Time",
      author: "Thoughtful Soul",
      excerpt:
        "Time flows like a river, carrying memories and dreams in its gentle current, while we stand on the banks, watching our reflections change...",
      tags: ["time", "philosophy", "life"],
      language: "English",
      likes: 18,
      comments: 6,
      timeAgo: "6 hours ago",
      category: "philosophy",
    },
    {
      id: 4,
      title: "محبت کا سفر",
      author: "شاعر دل",
      excerpt: "محبت کا یہ سفر، کتنا پیارا ہے، دل کی ہر دھڑکن میں، ایک نیا نظارہ ہے...",
      tags: ["love", "journey", "urdu"],
      language: "Urdu",
      likes: 27,
      comments: 9,
      timeAgo: "8 hours ago",
      category: "love",
    },
    {
      id: 5,
      title: "The Digital Age Sonnet",
      author: "Modern Bard",
      excerpt:
        "In pixels bright and screens that glow so fair, we find our hearts connected through the void, yet yearn for touch beyond the digital air...",
      tags: ["modern", "technology", "sonnet"],
      language: "Shakespearean",
      likes: 15,
      comments: 4,
      timeAgo: "12 hours ago",
      category: "modern",
    },
    {
      id: 6,
      title: "सुबह की किरण",
      author: "प्रकाश कवि",
      excerpt: "सुबह की पहली किरण जब आती है, नई उम्मीदों का संदेश लाती है, रात के अंधेरे को भगाकर...",
      tags: ["morning", "hope", "light"],
      language: "Hindi",
      likes: 22,
      comments: 7,
      timeAgo: "1 day ago",
      category: "nature",
    },
  ])

  const filteredPoems = poems.filter((poem) => {
    const matchesSearch =
      poem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      poem.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      poem.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesLanguage = selectedLanguage === "all" || poem.language.toLowerCase() === selectedLanguage
    const matchesCategory = selectedCategory === "all" || poem.category === selectedCategory

    return matchesSearch && matchesLanguage && matchesCategory
  })

  const trendingTags = ["love", "nature", "philosophy", "emotions", "life", "dreams", "time", "hope"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Explore Poetry</h1>
          <p className="text-gray-600">Discover beautiful expressions from our community of poets</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search poems, authors, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="urdu">Urdu</SelectItem>
                  <SelectItem value="shakespearean">Shakespearean</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="love">Love</SelectItem>
                  <SelectItem value="philosophy">Philosophy</SelectItem>
                  <SelectItem value="emotions">Emotions</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Trending Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-600 mr-2">Trending:</span>
            {trendingTags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery(tag)}
                className="h-7 text-xs hover:bg-orange-50 hover:border-orange-300"
              >
                <TrendingUp className="w-3 h-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="recent" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPoems.map((poem) => (
                <Card key={poem.id} className="hover:shadow-lg transition-shadow border-orange-100 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
                          {poem.title}
                        </CardTitle>
                        <CardDescription className="text-orange-600">by {poem.author}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {poem.language}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3">{poem.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {poem.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-orange-100 text-orange-700 cursor-pointer hover:bg-orange-200"
                          onClick={() => setSearchQuery(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{poem.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{poem.comments}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{poem.timeAgo}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPoems
                .sort((a, b) => b.likes - a.likes)
                .map((poem) => (
                  <Card key={poem.id} className="hover:shadow-lg transition-shadow border-orange-100 group">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
                            {poem.title}
                          </CardTitle>
                          <CardDescription className="text-orange-600">by {poem.author}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {poem.language}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3">{poem.excerpt}</p>

                      <div className="flex flex-wrap gap-2">
                        {poem.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-orange-100 text-orange-700 cursor-pointer hover:bg-orange-200"
                            onClick={() => setSearchQuery(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span className="font-medium">{poem.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{poem.comments}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{poem.timeAgo}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPoems
                .filter((poem) => poem.likes > 20)
                .map((poem) => (
                  <Card key={poem.id} className="hover:shadow-lg transition-shadow border-orange-100 group relative">
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-orange-600 text-white">Featured</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1 pr-16">
                          <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
                            {poem.title}
                          </CardTitle>
                          <CardDescription className="text-orange-600">by {poem.author}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {poem.language}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3">{poem.excerpt}</p>

                      <div className="flex flex-wrap gap-2">
                        {poem.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-orange-100 text-orange-700 cursor-pointer hover:bg-orange-200"
                            onClick={() => setSearchQuery(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span className="font-medium">{poem.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{poem.comments}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{poem.timeAgo}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredPoems.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No poems found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or explore different categories</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
