import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Feather, Heart, Users, BookOpen, Brain, Globe, Shield, Lightbulb, Target, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Quintessential } from "next/font/google"

const quintessential = Quintessential({
  weight: "400",
  subsets: ["latin"],
})

export default function AboutPage() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      title: "Advanced Poetry Editor",
      description:
        "Rich text editor with rhyme scheme detection, meter analysis, and multilingual vocabulary support including English, Hindi, Urdu, and Shakespearean English.",
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      title: "Soch by Vichaar",
      description:
        "A unique philosophical discussion forum where ideas take precedence over identities, fostering deep, meaningful conversations.",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Multilingual Expression",
      description:
        "Write and discover poetry in multiple languages, celebrating the diversity of human expression across cultures.",
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Privacy-First Approach",
      description: "Choose to keep your work private or share it with the world. Your creative space, your rules.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: "AI-Assisted Enhancement",
      description:
        "Optional AI tools to help enhance your poetry, suggest improvements, and provide creative inspiration.",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      title: "Depth Over Metrics",
      description: "No follower counts or popularity contests. Focus on meaningful content and genuine connections.",
    },
  ]

  const values = [
    {
      icon: <Target className="w-6 h-6 text-orange-600" />,
      title: "Authentic Expression",
      description: "We believe every voice deserves to be heard, regardless of experience or background.",
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: "Thoughtful Community",
      description: "Building connections through shared ideas and meaningful conversations.",
    },
    {
      icon: <Star className="w-6 h-6 text-orange-600" />,
      title: "Quality Over Quantity",
      description: "Encouraging depth, reflection, and genuine creative expression.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="flex justify-center mb-6">
            <Feather className="w-16 h-16 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className={`text-orange-600 ${quintessential.className}`}>Vichaar</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            A sanctuary for poets and philosophers, where creativity meets contemplation, and every word carries the
            weight of genuine human expression.
          </p>
          <Badge className="bg-orange-600 text-white px-4 py-2 text-sm">
            "Connect through thought, not popularity"
          </Badge>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In a world dominated by superficial metrics and fleeting attention, Vichaar stands as a beacon for
                  meaningful creative expression. We believe that poetry and philosophical discourse have the power to
                  connect souls across boundaries of language, culture, and experience.
                </p>
                <p>
                  Our platform is designed to nurture the contemplative mind, providing tools that enhance rather than
                  distract from the creative process. Whether you're crafting verses in English, Hindi, Urdu, or
                  exploring the timeless beauty of Shakespearean language, Vichaar offers a space where your thoughts
                  can flourish.
                </p>
                <p>
                  We're not just building a platform; we're cultivating a community of thinkers, dreamers, and
                  wordsmiths who understand that true connection comes through shared ideas and authentic expression.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Person writing poetry"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Platform Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughtfully designed tools to enhance your creative journey and foster meaningful connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <CardTitle className="text-lg text-gray-800">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white/50 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Vichaar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">{value.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Philosophy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-orange-100 text-left">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-gray-800">
                    <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                    For Poets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Poetry is the language of the soul. Our tools are designed to enhance your natural creativity, not
                    replace it. From rhyme scheme detection to multilingual vocabulary support, we provide the technical
                    foundation so you can focus on what matters most: your authentic voice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-100 text-left">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-gray-800">
                    <Brain className="w-5 h-5 mr-2 text-orange-600" />
                    For Philosophers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Great ideas deserve great discussions. Soch by Vichaar creates a space where philosophical discourse
                    can flourish without the noise of social media. Here, thoughts are valued over personalities, and
                    depth trumps viral appeal.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-orange-50 rounded-lg p-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "In the digital age, we've gained the ability to connect with anyone, anywhere. But have we lost the art
                of connecting deeply? Vichaar is our answer to that question."
              </blockquote>
              <p className="text-gray-600">— The Vichaar Team</p>
            </div>
          </div>
        </section>

        {/* Community Guidelines Preview */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Community Guidelines</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800">For Poetry</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Express authentically, without fear of judgment
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Respect all languages and cultural expressions
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Provide constructive feedback when engaging
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Honor the privacy choices of fellow poets
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800">For Discussions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
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
                      Embrace different perspectives gracefully
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a seasoned poet or someone who simply loves to think deeply about life, Vichaar welcomes
              you. Start your journey of authentic expression today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/write"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                <Feather className="w-5 h-5 mr-2" />
                Start Writing
              </a>
              <a
                href="/soch"
                className="inline-flex items-center justify-center px-6 py-3 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <Brain className="w-5 h-5 mr-2" />
                Join Discussions
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
