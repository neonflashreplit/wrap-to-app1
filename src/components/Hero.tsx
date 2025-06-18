
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Turn Any Website Into a{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Mobile App
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          No coding required. Convert your website into native iOS and Android apps in minutes. 
          Customize, preview, and deploy with our powerful drag-and-drop builder.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link to="/builder">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
              Start Building Now
            </Button>
          </Link>
          
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:border-purple-300">
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4">Ready in 3 Simple Steps</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">1</span>
                    </div>
                    <span className="text-gray-700">Enter your website URL</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">2</span>
                    </div>
                    <span className="text-gray-700">Customize app appearance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">3</span>
                    </div>
                    <span className="text-gray-700">Download your mobile app</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-48 h-96 mx-auto bg-gray-900 rounded-3xl p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white text-2xl">🚀</span>
                        </div>
                        <p className="text-sm text-gray-600">Your App Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
