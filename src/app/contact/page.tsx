import SectionHeader from '@/components/SectionHeader'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

export const metadata = {
  title: 'Contact | DLS Invigo',
  description: 'Neem contact op met wielerploeg DLS Invigo',
}

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Contact"
          subtitle="Vragen? Neem gerust contact met ons op"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">E-mail</h4>
                  <a href="mailto:info@dlsinvigo.be" className="text-gray-400 hover:text-primary">
                    info@dlsinvigo.be
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Telefoon</h4>
                  <a href="tel:+32123456789" className="text-gray-400 hover:text-primary">
                    +32 123 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Locatie</h4>
                  <p className="text-gray-400">
                    België
                  </p>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="mt-10">
              <h4 className="font-semibold mb-4">Volg ons</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-light p-3 rounded-lg hover:bg-primary transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-light p-3 rounded-lg hover:bg-primary transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact formulier */}
          <div className="bg-dark-light rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Stuur een bericht</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="naam" className="block font-medium mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  id="naam"
                  name="naam"
                  className="w-full bg-dark border border-dark-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-dark border border-dark-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="bericht" className="block font-medium mb-2">
                  Bericht
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows={5}
                  className="w-full bg-dark border border-dark-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Verstuur bericht
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-4">
              * Dit formulier is nog niet gekoppeld aan een backend. 
              Gebruik voorlopig de e-mail hierboven.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
