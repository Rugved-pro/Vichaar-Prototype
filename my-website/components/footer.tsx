import Link from "next/link"
import { Feather, Heart, Twitter, Instagram, Mail } from "lucide-react"
import { Quintessential } from "next/font/google"

const quintessential = Quintessential({
  weight: "400",
  subsets: ["latin"],
})

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Feather className="w-8 h-8 text-orange-500" />
              <span className={`text-2xl font-bold ${quintessential.className}`} style={{ fontWeight: 700 }}>
                Vichaar
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A platform where thoughts transcend boundaries, where poetry meets philosophy, and where every word
              carries the weight of genuine expression.
            </p>
            <p className="text-sm text-gray-400 italic">"Connect through thought, not popularity."</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/write" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Write Poetry
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Discover Poems
                </Link>
              </li>
              <li>
                <Link href="/soch" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Soch Discussions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guidelines" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for poets and philosophers</span>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:hello@vichaar.com" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-4">© 2024 Vichaar. All rights reserved.</div>
      </div>
    </footer>
  )
}
