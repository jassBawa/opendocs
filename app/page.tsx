import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Users,
  MessageSquare,
  Share2,
  Zap,
  Github,
  Linkedin,
  Heart,
} from 'lucide-react';
import FeatureCard from '@/components/landing/FeatureCard';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09111F] text-white scroll-smooth">
      <header className="bg-[#0c1524] shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            LiveDocs
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#features"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#collaboration"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Collaboration
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/documents">
            <Button
              variant="outline"
              className="text-black border-blue-400 hover:bg-blue-400 hover:text-[#09111F]"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className=" mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Collaborate in Real-Time with LiveDocs
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Create, edit, and share documents with your team - all in one place.
          </p>
          <Link href="/documents">
            <Button size="lg" className="mr-4 bg-blue-500 hover:bg-blue-600">
              Get Started for Free
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-black mt-2 bg-gray-300 border-blue-400 hover:bg-blue-400 hover:text-[#09111F]"
          >
            Learn More
          </Button>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-[#0c1524]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Powerful Features for Seamless Collaboration
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<FileText className="w-12 h-12 text-blue-400" />}
                title="Rich Text Editing"
                description="Create and format documents with our intuitive rich text editor."
              />
              <FeatureCard
                icon={<MessageSquare className="w-12 h-12 text-blue-400" />}
                title="Real-Time Comments"
                description="Discuss and provide feedback directly within your documents."
              />
              <FeatureCard
                icon={<Share2 className="w-12 h-12 text-blue-400" />}
                title="Easy Sharing"
                description="Share your documents with teammates or make them public with a single click."
              />
            </div>
          </div>
        </section>

        {/* Collaboration Showcase */}
        <section id="collaboration" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Collaborate Like Never Before
                </h2>
                <p className="text-gray-300 mb-4">
                  Experience the power of real-time collaboration. Edit
                  documents simultaneously with your team, see changes as they
                  happen, and never worry about version conflicts again.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-blue-400 mr-2" /> Real-time
                    editing
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-blue-400 mr-2" /> Version
                    history
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-blue-400 mr-2" /> Inline
                    comments and resolutions
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/images/Document-preview.png"
                  width={600}
                  height={200}
                  alt="Collaboration Showcase"
                  className="rounded-lg shadow-lg border border-white"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0c1524]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#131d2f] p-6 rounded-lg shadow-md">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">User Forums</h3>
                <p className="text-gray-300">
                  Connect with other LiveDocs users, share tips, and get help.
                </p>
                <Button className="mt-4 text-black" variant="outline">
                  Join Forum
                </Button>
              </div>
              <div className="bg-[#131d2f] p-6 rounded-lg shadow-md">
                <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Feedback Board</h3>
                <p className="text-gray-300">
                  Share your ideas and vote on new features for LiveDocs.
                </p>
                <Button className="mt-4 text-black" variant="outline">
                  Submit Idea
                </Button>
              </div>
              <div className="bg-[#131d2f] p-6 rounded-lg shadow-md">
                <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-gray-300">
                  Explore our comprehensive guides and API documentation.
                </p>
                <Button className="mt-4 text-black" variant="outline">
                  Read Docs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0c1524] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">LiveDocs</h3>
              <p className="text-gray-400">
                Empowering teams to create, collaborate, and innovate together.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/jassBawa"
                  className="text-gray-400 hover:text-white"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jaspreet-singh-bawa/"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 LiveDocs. All rights reserved.</p>
            <p className="mt-2 flex items-center justify-center">
              Made with <Heart className="w-5 h-5 text-red-500 mx-1" /> by
              jascodes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
