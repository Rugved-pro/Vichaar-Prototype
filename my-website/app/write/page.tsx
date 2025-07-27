"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Quote,
  Type,
  Save,
  Share2,
  Eye,
  EyeOff,
  Lightbulb,
  BookOpen,
  Wand2,
  List,
  ListOrdered,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WritePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [language, setLanguage] = useState("english")
  const [isPrivate, setIsPrivate] = useState(false)
  const [rhymeScheme, setRhymeScheme] = useState("")
  const [meterAnalysis, setMeterAnalysis] = useState("")
  const [synonyms, setSynonyms] = useState<string[]>([])
  const [selectedWord, setSelectedWord] = useState("")
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false,
    align: "left" as "left" | "center" | "right",
  })
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Disable spellcheck for Hindi/Urdu (romanized)
  const shouldDisableSpellcheck = language === "hindi" || language === "urdu"

  // Mock rhyme scheme detection (disabled for Hindi/Urdu)
  useEffect(() => {
    if (content && !shouldDisableSpellcheck) {
      const lines = content.split("\n").filter((line) => line.trim())
      if (lines.length >= 2) {
        // Simple rhyme detection logic
        const lastWords = lines.map((line) => {
          const words = line.trim().split(/\s+/)
          return words[words.length - 1]?.toLowerCase().replace(/[.,!?;:]/, "") || ""
        })

        // Check for ABAB pattern
        if (lastWords.length >= 4) {
          const endsWithSimilar = (word1: string, word2: string) => {
            if (word1.length < 2 || word2.length < 2) return false
            return word1.slice(-2) === word2.slice(-2) || word1.slice(-3) === word2.slice(-3)
          }

          if (endsWithSimilar(lastWords[0], lastWords[2]) && endsWithSimilar(lastWords[1], lastWords[3])) {
            setRhymeScheme("ABAB pattern detected")
          } else if (endsWithSimilar(lastWords[0], lastWords[1])) {
            setRhymeScheme("AABB pattern detected")
          } else {
            setRhymeScheme("Free verse")
          }
        }

        // Simple meter analysis
        const avgWordsPerLine = lines.reduce((sum, line) => sum + line.split(/\s+/).length, 0) / lines.length
        if (avgWordsPerLine >= 8 && avgWordsPerLine <= 12) {
          setMeterAnalysis("Iambic pentameter suggested")
        } else if (avgWordsPerLine >= 6 && avgWordsPerLine <= 8) {
          setMeterAnalysis("Ballad meter detected")
        } else {
          setMeterAnalysis("Free verse meter")
        }
      }
    } else if (shouldDisableSpellcheck) {
      setRhymeScheme("Analysis disabled for romanized text")
      setMeterAnalysis("Analysis disabled for romanized text")
    }
  }, [content, shouldDisableSpellcheck])

  // Mock synonym generation
  const generateSynonyms = (word: string) => {
    const mockSynonyms: { [key: string]: string[] } = {
      love: ["affection", "devotion", "adoration", "प्रेम", "محبت"],
      beautiful: ["gorgeous", "stunning", "lovely", "सुंदर", "خوبصورت"],
      sad: ["melancholy", "sorrowful", "dejected", "उदास", "غمگین"],
      happy: ["joyful", "elated", "blissful", "खुश", "خوش"],
      night: ["evening", "dusk", "twilight", "रात", "رات"],
      heart: ["soul", "spirit", "core", "दिल", "دل"],
      dream: ["vision", "aspiration", "hope", "सपना", "خواب"],
      time: ["moment", "era", "period", "समय", "وقت"],
      light: ["radiance", "glow", "brightness", "प्रकाश", "روشنی"],
      peace: ["tranquility", "serenity", "calm", "शांति", "امن"],
    }
    return mockSynonyms[word.toLowerCase()] || []
  }

  const handleWordSelection = () => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart
      const end = textareaRef.current.selectionEnd
      const selectedText = content.substring(start, end).trim()

      if (selectedText) {
        setSelectedWord(selectedText)
        setSynonyms(generateSynonyms(selectedText))
      }
    }
  }

  const insertText = (text: string) => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart
      const end = textareaRef.current.selectionEnd
      const newContent = content.substring(0, start) + text + content.substring(end)
      setContent(newContent)

      // Focus back to textarea
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus()
          textareaRef.current.setSelectionRange(start + text.length, start + text.length)
        }
      }, 0)
    }
  }

  const applyFormatting = (format: string) => {
    if (!textareaRef.current) return

    const start = textareaRef.current.selectionStart
    const end = textareaRef.current.selectionEnd
    const selectedText = content.substring(start, end)

    if (selectedText) {
      let formattedText = selectedText

      switch (format) {
        case "bold":
          formattedText = `**${selectedText}**`
          setFormatting((prev) => ({ ...prev, bold: !prev.bold }))
          break
        case "italic":
          formattedText = `*${selectedText}*`
          setFormatting((prev) => ({ ...prev, italic: !prev.italic }))
          break
        case "underline":
          formattedText = `__${selectedText}__`
          setFormatting((prev) => ({ ...prev, underline: !prev.underline }))
          break
        case "quote":
          formattedText = `> ${selectedText}`
          break
      }

      const newContent = content.substring(0, start) + formattedText + content.substring(end)
      setContent(newContent)

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus()
          textareaRef.current.setSelectionRange(start + formattedText.length, start + formattedText.length)
        }
      }, 0)
    }
  }

  const applyAlignment = (align: "left" | "center" | "right") => {
    setFormatting((prev) => ({ ...prev, align }))
    // In a real implementation, this would affect the textarea styling
  }

  const savePoem = () => {
    if (!title.trim()) {
      alert("Please enter a title for your poem")
      return
    }
    if (!content.trim()) {
      alert("Please write some content for your poem")
      return
    }

    // Mock save functionality
    const poemData = {
      title,
      content,
      language,
      isPrivate,
      createdAt: new Date().toISOString(),
    }

    console.log("Saving poem:", poemData)
    alert("Poem saved successfully!")
  }

  const sharePoem = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please complete your poem before sharing")
      return
    }

    // Mock share functionality
    alert("Poem shared with the community!")
  }

  const getWritingPrompt = () => {
    const prompts = [
      "Write about a moment when time seemed to stand still",
      "Describe the color of your emotions today",
      "What would you tell your younger self?",
      "Write about a place that exists only in your memory",
      "Capture the feeling of the first rain after summer",
      "Write about the space between words",
      "Describe silence as if it were a living thing",
      "What does hope look like in the darkness?",
    ]

    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)]
    alert(`Writing Prompt: ${randomPrompt}`)
  }

  const enhanceWithAI = () => {
    if (!content.trim()) {
      alert("Please write some content first for AI to enhance")
      return
    }

    // Mock AI enhancement
    alert(
      "AI enhancement feature coming soon! This will help improve rhythm, suggest better word choices, and enhance the overall flow of your poem.",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Poem Editor</h1>
          <p className="text-gray-600">Let your thoughts flow into beautiful verses</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2">
            <Card className="border-orange-100">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">🇺🇸 English</SelectItem>
                        <SelectItem value="hindi">🇮🇳 Hindi (Romanized)</SelectItem>
                        <SelectItem value="urdu">🇵🇰 Urdu (Romanized)</SelectItem>
                        <SelectItem value="shakespearean">🎭 Shakespearean</SelectItem>
                      </SelectContent>
                    </Select>
                    {shouldDisableSpellcheck && (
                      <Badge variant="outline" className="text-xs text-blue-600">
                        Spellcheck disabled
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant={isPrivate ? "default" : "outline"}
                      size="sm"
                      onClick={() => setIsPrivate(!isPrivate)}
                      className={isPrivate ? "bg-orange-600 hover:bg-orange-700" : ""}
                    >
                      {isPrivate ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                      {isPrivate ? "Private" : "Public"}
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Formatting Toolbar */}
                <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-lg border">
                  <Button
                    variant={formatting.bold ? "default" : "ghost"}
                    size="sm"
                    onClick={() => applyFormatting("bold")}
                    className={formatting.bold ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={formatting.italic ? "default" : "ghost"}
                    size="sm"
                    onClick={() => applyFormatting("italic")}
                    className={formatting.italic ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={formatting.underline ? "default" : "ghost"}
                    size="sm"
                    onClick={() => applyFormatting("underline")}
                    className={formatting.underline ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    <Underline className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <Button
                    variant={formatting.align === "left" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => applyAlignment("left")}
                    className={formatting.align === "left" ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    <AlignLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={formatting.align === "center" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => applyAlignment("center")}
                    className={formatting.align === "center" ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    <AlignCenter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={formatting.align === "right" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => applyAlignment("right")}
                    className={formatting.align === "right" ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    <AlignRight className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <Button variant="ghost" size="sm" onClick={() => applyFormatting("quote")}>
                    <Quote className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <List className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ListOrdered className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Type className="w-4 h-4" />
                  </Button>
                </div>

                {/* Title Input */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Title:</label>
                  <Input
                    placeholder="Enter your poem's title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-lg font-medium"
                    spellCheck={!shouldDisableSpellcheck}
                  />
                </div>

                {/* Content Textarea */}
                <div>
                  <Textarea
                    ref={textareaRef}
                    placeholder="Let your thoughts flow..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onMouseUp={handleWordSelection}
                    onKeyUp={handleWordSelection}
                    className={`min-h-[400px] text-base leading-relaxed resize-none ${
                      formatting.align === "center"
                        ? "text-center"
                        : formatting.align === "right"
                          ? "text-right"
                          : "text-left"
                    }`}
                    style={{ fontFamily: "Georgia, serif" }}
                    spellCheck={!shouldDisableSpellcheck}
                  />
                  {shouldDisableSpellcheck && (
                    <p className="text-xs text-gray-500 mt-1">
                      Spellcheck and auto-analysis disabled for romanized {language} text
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button onClick={savePoem} className="bg-orange-600 hover:bg-orange-700">
                    <Save className="w-4 h-4 mr-2" />
                    Save Poem
                  </Button>
                  <Button variant="outline" onClick={sharePoem}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" onClick={enhanceWithAI}>
                    <Wand2 className="w-4 h-4 mr-2" />
                    AI Enhance
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Tools */}
          <div className="space-y-6">
            {/* Analysis Panel */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                  Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {rhymeScheme && (
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-1">Rhyme Scheme</h4>
                    <Badge
                      variant="secondary"
                      className={
                        shouldDisableSpellcheck ? "bg-gray-100 text-gray-500" : "bg-orange-100 text-orange-700"
                      }
                    >
                      {rhymeScheme}
                    </Badge>
                  </div>
                )}

                {meterAnalysis && (
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-1">Meter</h4>
                    <Badge
                      variant="secondary"
                      className={shouldDisableSpellcheck ? "bg-gray-100 text-gray-500" : "bg-blue-100 text-blue-700"}
                    >
                      {meterAnalysis}
                    </Badge>
                  </div>
                )}

                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-1">Word Count</h4>
                  <p className="text-sm text-gray-600">{content.split(/\s+/).filter((word) => word).length} words</p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-1">Lines</h4>
                  <p className="text-sm text-gray-600">{content.split("\n").length} lines</p>
                </div>
              </CardContent>
            </Card>

            {/* Vocabulary Assistant */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Type className="w-5 h-5 mr-2 text-orange-600" />
                  Vocabulary
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedWord ? (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Synonyms for "{selectedWord}"</h4>
                      <div className="flex flex-wrap gap-2">
                        {synonyms.length > 0 ? (
                          synonyms.map((synonym, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => insertText(synonym)}
                              className="text-xs h-7 hover:bg-orange-50"
                            >
                              {synonym}
                            </Button>
                          ))
                        ) : (
                          <p className="text-xs text-gray-500">No synonyms found for this word</p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Select a word in your poem to see synonyms and alternatives</p>
                )}
              </CardContent>
            </Card>

            {/* Inspiration */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-orange-600" />
                  Inspiration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm italic text-gray-700">
                      "Poetry is the spontaneous overflow of powerful feelings"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">- William Wordsworth</p>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent hover:bg-orange-50"
                    onClick={getWritingPrompt}
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Get Writing Prompt
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-orange-50"
                  onClick={() => insertText("\n\n---\n\n")}
                >
                  Add Section Break
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-orange-50"
                  onClick={() => insertText("    ")}
                >
                  Add Indentation
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-orange-50"
                  onClick={() => {
                    const lines = content.split("\n")
                    const numberedLines = lines.map((line, index) => `${index + 1}. ${line}`)
                    setContent(numberedLines.join("\n"))
                  }}
                >
                  Number Lines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
