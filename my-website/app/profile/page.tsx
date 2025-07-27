"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Heart, MessageCircle, Calendar, Edit3, Settings, Eye, EyeOff, Trash2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProfilePage() {
  const [userPoems] = useState([
    {
      id: 1,
      title: "Whispers of My Soul",
      excerpt: "In the quiet corners of my mind, where thoughts dance freely without judgment...",
      tags: ["personal", "reflection", "soul"],
      language: "English",
      isPrivate: false,
      likes: 12,
      comments: 4,
      createdAt: "2024-01-15",
      lastEdited: "2024-01-16",
    },
    {
      id: 2,
      title: "मेरे सपनों का राजा",
      excerpt: "सपनों के इस महल में, जहाँ कल्पना की रानी बसती है...",
      tags: ["dreams", "hindi", "imagination"],
      language: "Hindi",
      isPrivate: true,
      likes: 0,
      comments: 0,
      createdAt: "2024-01-10",
      lastEdited: "2024-01-12",
    },
    {
      id: 3,
      title: "Digital Solitude",
      excerpt: "Connected yet alone, we scroll through lives that aren't our own...",
      tags: ["modern", "technology", "loneliness"],
      language: "English",
      isPrivate: false,
      likes: 18,
      comments: 7,
      createdAt: "2024-01-08",
      lastEdited: "2024-01-08",
    },
    {
      id: 4,
      title: "دل کی آواز",
      excerpt: "جب دل کی آواز بلند ہوتی ہے، تو ساری دنیا خاموش ہو جاتی ہے...",
      tags: ["heart", "urdu", "emotions"],
      language: "Urdu",
      isPrivate: true,
      likes: 0,
      comments: 0,
      createdAt: "2024-01-05",
      lastEdited: "2024-01-06",
    },
    {
      id: 5,
      title: "The Writer's Paradox",
      excerpt: "We write to be understood, yet fear being truly seen...",
      tags: ["writing", "paradox", "vulnerability"],
      language: "English",
      isPrivate: false,
      likes: 25,
      comments: 11,
      createdAt: "2024-01-01",
      lastEdited: "2024-01-02",
    },
  ])

  const [userStats] = useState({
    totalPoems: userPoems.length,
    publicPoems: userPoems.filter((poem) => !poem.isPrivate).length,
    privatePoems: userPoems.filter((poem) => poem.isPrivate).length,
    totalLikes: userPoems.reduce((sum, poem) => sum + poem.likes, 0),
    totalComments: userPoems.reduce((sum, poem) => sum + poem.comments, 0),
    joinedDate: "2023-12-01",
    languages: [...new Set(userPoems.map((poem) => poem.language))],
  })

  const togglePrivacy = (poemId: number) => {
    // Mock toggle functionality
    alert(`Privacy setting toggled for poem ${poemId}`)
  }

  const deletePoem = (poemId: number) => {
    // Mock delete functionality
    if (confirm("Are you sure you want to delete this poem?")) {
      alert(`Poem ${poemId} deleted`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="border-orange-100">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback className="text-2xl bg-orange-100 text-orange-600">U</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Creative Space</h1>
                  <p className="text-gray-600 mb-4">
                    A poet's journey through words, emotions, and the depths of human experience
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Joined{" "}
                      {new Date(userStats.joinedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {userStats.totalPoems} poems
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {userStats.totalLikes} likes received
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {userStats.totalComments} comments
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-orange-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{userStats.totalPoems}</div>
                <div className="text-sm text-gray-600">Total Poems</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{userStats.publicPoems}</div>
                <div className="text-sm text-gray-600">Public</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{userStats.privatePoems}</div>
                <div className="text-sm text-gray-600">Private</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{userStats.languages.length}</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Poems Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="all">All Poems</TabsTrigger>
            <TabsTrigger value="public">Public</TabsTrigger>
            <TabsTrigger value="private">Private</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPoems.map((poem) => (
                <Card key={poem.id} className="hover:shadow-lg transition-shadow border-orange-100 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
                          {poem.title}
                        </CardTitle>
                        <CardDescription className="text-orange-600 mt-1">
                          {poem.language} • {new Date(poem.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-1">
                        {poem.isPrivate ? (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3">{poem.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {poem.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => togglePrivacy(poem.id)}
                          className="h-8 w-8 p-0"
                        >
                          {poem.isPrivate ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deletePoem(poem.id)}
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="public" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPoems
                .filter((poem) => !poem.isPrivate)
                .map((poem) => (
                  <Card key={poem.id} className="hover:shadow-lg transition-shadow border-orange-100 group">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
                            {poem.title}
                          </CardTitle>
                          <CardDescription className="text-orange-600 mt-1">
                            {poem.language} • {new Date(poem.createdAt).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <Badge className="bg-green-100 text-green-700 text-xs">Public</Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3">{poem.excerpt}</p>

                      <div className="flex flex-wrap gap-2">
                        {poem.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => togglePrivacy(poem.id)}
                            className="h-8 w-8 p-0"
                          >
                            <EyeOff className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deletePoem(poem.id)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="private" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPoems
                .filter((poem) => poem.isPrivate)
                .map((poem) => (
                  <Card key={poem.id} className="hover:shadow-lg transition-shadow border-orange-100 group">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
                            {poem.title}
                          </CardTitle>
                          <CardDescription className="text-orange-600 mt-1">
                            {poem.language} • {new Date(poem.createdAt).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 text-xs">Private</Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3">{poem.excerpt}</p>

                      <div className="flex flex-wrap gap-2">
                        {poem.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <span>Only visible to you</span>
                        </div>

                        <div className="flex items-center space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => togglePrivacy(poem.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deletePoem(poem.id)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {userPoems.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No poems yet</h3>
            <p className="text-gray-500 mb-4">Start your poetic journey by writing your first poem</p>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Edit3 className="w-4 h-4 mr-2" />
              Write Your First Poem
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
