
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for testing and personal projects",
      features: [
        "1 app per month",
        "Basic customization",
        "Web2App watermark",
        "Android APK export",
        "Community support",
        "Basic analytics"
      ],
      limitations: [
        "No iOS support",
        "Limited customization",
        "Watermark included"
      ],
      popular: false,
      cta: "Start Free"
    },
    {
      name: "Pro",
      price: "$20",
      period: "per month",
      description: "Everything you need to build professional apps",
      features: [
        "Unlimited apps",
        "Full customization suite",
        "No watermarks",
        "Android APK + iOS guide",
        "Push notifications",
        "Offline functionality",
        "Custom app icons",
        "Priority support",
        "Advanced analytics",
        "White-label solution"
      ],
      limitations: [],
      popular: true,
      cta: "Start Pro Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For agencies and large organizations",
      features: [
        "Everything in Pro",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom deployment",
        "Team collaboration",
        "Advanced security",
        "Custom branding",
        "Volume discounts"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular 
                  ? 'border-purple-500 shadow-purple-100 scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                
                <Link to="/signup">
                  <Button 
                    className={`w-full py-3 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-900 mb-3 mt-6">Limitations:</h4>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center space-x-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include 14-day free trial • No credit card required</p>
          <p className="text-sm text-gray-500">Need help choosing? <a href="#" className="text-purple-600 hover:underline">Contact our sales team</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
