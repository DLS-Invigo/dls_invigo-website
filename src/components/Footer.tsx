import Link from 'next/link'
import { Facebook, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-dark-lighter">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo en beschrijving */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              DLS <span className="text-primary">INVIGO</span>
            </h3>
            <p className="text-gray-400">
              Wielerploeg met passie voor de koers.
            </p>
          </div>

          {/* Snelle links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/nieuws" className="text-gray-400 hover:text-white transition-colors">
                  Nieuws
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/fotos" className="text-gray-400 hover:text-white transition-colors">
                  Foto&apos;s
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact en socials */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Volg ons</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:info@dlsinvigo.be"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-dark-lighter text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} DLS Invigo. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
