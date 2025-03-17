import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Adelaide Fringe</h3>
            <p className="text-gray-400 text-sm">
              Your premier destination for booking tickets to the most exciting
              events around the world.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  All Events
                </Link>
              </li>
              <li>
                <Link
                  href="/venues"
                  className="hover:text-white transition-colors"
                >
                  Venues
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/category/music"
                  className="hover:text-white transition-colors"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="/category/sports"
                  className="hover:text-white transition-colors"
                >
                  Comedy
                </Link>
              </li>
              <li>
                <Link
                  href="/category/arts"
                  className="hover:text-white transition-colors"
                >
                  Circus
                </Link>
              </li>
              <li>
                <Link
                  href="/category/technology"
                  className="hover:text-white transition-colors"
                >
                  Kids and Family
                </Link>
              </li>
              <li>
                <Link
                  href="/category/food"
                  className="hover:text-white transition-colors"
                >
                  Magic
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest events and exclusive
              offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 text-sm text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Adelaide Fringe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
