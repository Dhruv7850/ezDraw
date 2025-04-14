import React from 'react';
import Link from 'next/link'
import { 
  Pencil, 
  Share2, 
  Users, 
  Lock, 
  Shapes, 
  Download,
  Github, 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-purple-50 to-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shapes className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-800">Drawify</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Examples</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Blog</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">About</a>
            </div>
            <div className="flex space-x-4">
              
             <Link href ={"/signup"} > <button className="px-4 py-2 text-purple-600  cursor-pointer hover:text-purple-700">Sign Up</button>
              </Link>
              <Link href ={"/signin"}>
              <button className="px-4 py-2  cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Sign In
              </button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Collaborate and Create<br />Beautiful Diagrams
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The simplest way to create and share diagrams, wireframes, and visual ideas.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
              <Pencil className="w-5 h-5 mr-2" />
              Start Drawing Now
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-colors flex items-center">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className=" text-gray-600 text-xl font-semibold mb-2">Real-time Collaboration</h3>
              <p className="text-gray-600">Work together with your team in real-time, see changes instantly.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-gray-600 text-xl font-semibold mb-2">Team Workspaces</h3>
              <p className="text-gray-600">Create shared spaces for your team to organize and access diagrams.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-gray-600 text-xl font-semibold mb-2">Private & Secure</h3>
              <p className="text-gray-600">Your diagrams are encrypted and stored securely in the cloud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example/Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Yet Simple</h2>
            <p className="text-xl text-gray-600 mb-8">From quick sketches to detailed diagrams, create it all with Drawify</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" 
                  alt="Wireframe Sketch"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/lp-cms/media/HP_hero_Excalidraw_editor_playground.png" 
                  alt="Excalidraw Interface"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Everything You Need</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    </div>
                    <p className="ml-4 text-gray-600">Intuitive drawing tools with smart shapes and connectors</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    </div>
                    <p className="ml-4 text-gray-600">Rich library of pre-made components and templates</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    </div>
                    <p className="ml-4 text-gray-600">Export to multiple formats including SVG and PNG</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    </div>
                    <p className="ml-4 text-gray-600">Version history and automatic cloud backup</p>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Start Creating Now</h3>
                <p className="mb-6">Join thousands of teams who trust Drawify for their diagramming needs</p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center">
                  <Pencil className="w-5 h-5 mr-2" />
                  Try it Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join thousands of teams and individuals who use Drawify to bring their ideas to life.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center mx-auto">
            <Pencil className="w-5 h-5 mr-2" />
            Start Drawing for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shapes className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">Drawify</span>
              </div>
              <p className="text-gray-400">
                The simplest way to create and share diagrams online.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">Features</a></li>
                <li><a href="#" className="hover:text-purple-400">Templates</a></li>
                <li><a href="#" className="hover:text-purple-400">Enterprise</a></li>
                <li><a href="#" className="hover:text-purple-400">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400">Tutorials</a></li>
                <li><a href="#" className="hover:text-purple-400">Examples</a></li>
                <li><a href="#" className="hover:text-purple-400">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">About</a></li>
                <li><a href="#" className="hover:text-purple-400">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Drawify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
