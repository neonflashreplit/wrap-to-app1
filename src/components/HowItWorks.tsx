
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Enter Website URL",
      description: "Simply paste your website URL and we'll instantly analyze its structure and content for optimal mobile conversion.",
      color: "from-purple-600 to-purple-700"
    },
    {
      step: "02",
      title: "Customize Your App",
      description: "Upload your app icon, choose colors, set navigation style, and configure features like offline access and push notifications.",
      color: "from-blue-600 to-blue-700"
    },
    {
      step: "03",
      title: "Preview & Test",
      description: "Use our real-time mobile preview to test your app's functionality, navigation, and user experience before deployment.",
      color: "from-indigo-600 to-indigo-700"
    },
    {
      step: "04",
      title: "Download & Deploy",
      description: "Get your Android APK instantly or follow our guided process to publish your iOS app to the App Store.",
      color: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes app creation effortless. Follow these simple steps to transform your website into a professional mobile app.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
