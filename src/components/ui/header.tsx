import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image src="/abstract-machines_logo_landscape-black.svg" alt="Logo" width={200} height={200} className="mr-2" />
        </Link>

        {/* Navigation Section */}
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link href="#features" className="text-deepBlue-600 hover:text-deepBlue-800">
                Features
              </Link>
            </li>
            <li>
              <Link href="#use-cases" className="text-deepBlue-600 hover:text-deepBlue-800">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-deepBlue-600 hover:text-deepBlue-800">
                Blog
              </Link>
            </li>
            <li><Button variant="outline" className="border-deepBlue-800 text-deepBlue-800 hover:bg-deepBlue-100">Login</Button></li>
            <li>
              <Link href="#pricing">
                <Button variant="outline" className="border-deepBlue-800 text-deepBlue-800 hover:bg-deepBlue-100">
                  Pricing
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
