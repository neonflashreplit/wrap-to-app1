
import { Smartphone, Settings, Download, Zap, Shield, Palette } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Real-time Preview",
      description: "See your app come to life with our interactive mobile preview frame. Test navigation and features instantly."
    },
    {
      icon: Palette,
      title: "Full Customization",
      description: "Customize app icons, splash screens, colors, navigation styles, and branding to match your vision perfectly."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Convert any website to a mobile app in under 5 minutes. No waiting, no complex setup required."
    },
    {
      icon: Download,
      title: "Native Export",
      description: "Download ready-to-use APK files for Android and get step-by-step iOS deployment instructions."
    },
    {
      icon: Shield,
      title: "Offline Support",
      description: "Enable offline functionality so your users can access content even without an internet connection."
    },
    {
      icon: Settings,
      title: "Advanced Features",
      description: "Push notifications, analytics integration, custom splash screens, and much more out of the box."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to create professional mobile apps without any coding experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
