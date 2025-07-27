"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageCircle, Plus, Search, TrendingUp, Clock, Users, Lightbulb, Brain, Quote } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Playfair_Display } from "next/font/google"

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function SochPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [newDiscussionTitle, setNewDiscussionTitle] = useState("")
  const [newDiscussionContent, setNewDiscussionContent] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const [discussions] = useState([
    {
      id: 1,
      title: "What defines true happiness in the modern age?",
      content:
        "In our digital world filled with instant gratification, what constitutes genuine happiness? Is it the fleeting joy of social media likes, or something deeper that transcends material possessions?",
      author: "Deep Thinker",
      replies: 23,
      lastActive: "2 hours ago",
      tags: ["happiness", "philosophy", "modern-life"],
      category: "existential",
    },
    {
      id: 2,
      title: "The role of suffering in personal growth",
      content:
        "Does suffering truly make us stronger, or is this just a comforting narrative we tell ourselves? Can growth happen without pain, or is adversity an essential catalyst for transformation?",
      author: "Contemplative Soul",
      replies: 15,
      lastActive: "4 hours ago",
      tags: ["suffering", "growth", "resilience"],
      category: "psychology",
    },
    {
      id: 3,
      title: "Is creativity born or cultivated?",
      content:
        "Are we born with creative abilities, or can anyone develop them through practice and dedication? What role does environment play in nurturing or stifling creative expression?",
      author: "Artistic Mind",
      replies: 31,
      lastActive: "6 hours ago",
      tags: ["creativity", "talent", "nurture-vs-nature"],
      category: "creativity",
    },
    {
      id: 4,
      title: "The paradox of choice in modern society",
      content:
        "With endless options available to us, why do we often feel more paralyzed than empowered? Is having too many choices actually limiting our freedom and happiness?",
      author: "Choice Analyst",
      replies: 18,
      lastActive: "8 hours ago",
      tags: ["choice", "decision-making", "psychology"],
      category: "psychology",
    },
    {
      id: 5,
      title: "Can artificial intelligence truly understand human emotions?",
      content:
        "As AI becomes more sophisticated, can it genuinely comprehend the nuances of human emotion, or will it always be sophisticated mimicry? What implications does this have for human connection?",
      author: "Tech Philosopher",
      replies: 27,
      lastActive: "12 hours ago",
      tags: ["AI", "emotions", "technology", "consciousness"],
      category: "technology",
    },
    {
      id: 6,
      title: "The meaning of time in different cultures",
      content:
        "How do different cultures perceive and value time? Is the Western obsession with punctuality and efficiency universal, or are there more meaningful ways to relate to time?",
      author: "Cultural Observer",
      replies: 12,
      lastActive: "1 day ago",
      tags: ["time", "culture", "philosophy"],
      category: "cultural",
    },
  ])

  const [featuredQuotes] = useState([
    {
      text: "The unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle",
    },
    {
      text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
      author: "Albert Camus",
    },
  ])

  const filteredDiscussions = discussions.filter(
    (discussion) =>
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const createDiscussion = () => {
    if (newDiscussionTitle.trim() && newDiscussionContent.trim()) {
      // Mock creation - in real app, this would make an API call
      alert("Discussion created successfully!")
      setNewDiscussionTitle("")
      setNewDiscussionContent("")
      setIsCreateDialogOpen(false)
    }
  }

  const trendingTopics = ["consciousness", "free-will", "meaning", "existence", "ethics", "beauty", "truth"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Brain className="w-8 h-8 text-orange-600 mr-3" />
            <h1 className={`text-3xl font-bold text-gray-800 ${playfairDisplay.className}`}>Soch by Vichaar</h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            A forum of ideas where thoughts transcend identities. Engage in meaningful philosophical discussions and
            explore the depths of human consciousness together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Create */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search discussions, topics, or ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Start Discussion
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Start a New Discussion</DialogTitle>
                    <DialogDescription>Share a thought-provoking question or idea with the community</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Discussion Title</label>
                      <Input
                        placeholder="What philosophical question would you like to explore?"
                        value={newDiscussionTitle}
                        onChange={(e) => setNewDiscussionTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Your Thoughts</label>
                      <Textarea
                        placeholder="Share your perspective and invite others to think deeply..."
                        value={newDiscussionContent}
                        onChange={(e) => setNewDiscussionContent(e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={createDiscussion} className="bg-orange-600 hover:bg-orange-700">
                        Create Discussion
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Trending Topics */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-gray-600 mr-2">Trending:</span>
              {trendingTopics.map((topic) => (
                <Button
                  key={topic}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery(topic)}
                  className="h-7 text-xs hover:bg-orange-50 hover:border-orange-300"
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {topic}
                </Button>
              ))}
            </div>

            {/* Discussions Tabs */}
            <Tabs defaultValue="recent" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="active">Most Active</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
              </TabsList>

              <TabsContent value="recent" className="space-y-4">
                {filteredDiscussions.map((discussion) => (
                  <Card key={discussion.id} className="hover:shadow-lg transition-shadow border-orange-100 group">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors cursor-pointer">
                            {discussion.title}
                          </CardTitle>
                          <CardDescription className="text-orange-600 mt-1">by {discussion.author}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs capitalize">
                          {discussion.category}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{discussion.content}</p>

                      <div className="flex flex-wrap gap-2">
                        {discussion.tags.map((tag) => (
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
                            <MessageCircle className="w-4 h-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>Active</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{discussion.lastActive}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="active" className="space-y-4">
                {filteredDiscussions
                  .sort((a, b) => b.replies - a.replies)
                  .map((discussion) => (
                    <Card key={discussion.id} className="hover:shadow-lg transition-shadow border-orange-100 group">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors cursor-pointer">
                              {discussion.title}
                            </CardTitle>
                            <CardDescription className="text-orange-600 mt-1">by {discussion.author}</CardDescription>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-green-100 text-green-700 text-xs">Hot</Badge>
                            <Badge variant="outline" className="text-xs capitalize">
                              {discussion.category}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{discussion.content}</p>

                        <div className="flex flex-wrap gap-2">
                          {discussion.tags.map((tag) => (
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
                              <MessageCircle className="w-4 h-4 text-green-600" />
                              <span className="font-medium text-green-600">{discussion.replies} replies</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>Very Active</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{discussion.lastActive}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="unanswered" className="space-y-4">
                {filteredDiscussions
                  .filter((discussion) => discussion.replies < 5)
                  .map((discussion) => (
                    <Card key={discussion.id} className="hover:shadow-lg transition-shadow border-orange-100 group">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors cursor-pointer">
                              {discussion.title}
                            </CardTitle>
                            <CardDescription className="text-orange-600 mt-1">by {discussion.author}</CardDescription>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                              Needs Input
                            </Badge>
                            <Badge variant="outline" className="text-xs capitalize">
                              {discussion.category}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{discussion.content}</p>

                        <div className="flex flex-wrap gap-2">
                          {discussion.tags.map((tag) => (
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
                              <MessageCircle className="w-4 h-4" />
                              <span>{discussion.replies} replies</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Lightbulb className="w-4 h-4 text-blue-500" />
                              <span className="text-blue-600">Share your thoughts</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{discussion.lastActive}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>

            {filteredDiscussions.length === 0 && (
              <div className="text-center py-12">
                <Brain className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No discussions found</h3>
                <p className="text-gray-500">Try adjusting your search or start a new philosophical discussion</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Quote */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Quote className="w-5 h-5 mr-2 text-orange-600" />
                  Daily Wisdom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredQuotes.map((quote, index) => (
                    <div key={index} className="p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm italic text-gray-700 mb-2">"{quote.text}"</p>
                      <p className="text-xs text-gray-500">— {quote.author}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Discussion Guidelines */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-orange-600" />
                  Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Focus on ideas, not personalities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Ask thoughtful, open-ended questions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Listen with genuine curiosity
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Embrace different perspectives
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Think deeply before responding
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg">Popular Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["existential", "psychology", "ethics", "creativity", "technology", "cultural"].map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-left capitalize hover:bg-orange-50"
                      onClick={() => setSearchQuery(category)}
                    >
                      <Brain className="w-4 h-4 mr-2" />
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
