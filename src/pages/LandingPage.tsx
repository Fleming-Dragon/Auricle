import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Brain, Heart, Sparkles, Star, ArrowRight, Play } from 'lucide-react'

export function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora opacity-20" />
        <div className="container relative z-10 px-4 py-16 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo/Icon */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lavender-400 to-sky-400 flex items-center justify-center shadow-2xl animate-glow">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-mint-400 to-teal-400 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                Meet Auricle
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300">
                Your AI-Powered Mental Health Companion
              </h2>
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Experience personalized therapy sessions with our empathetic AI therapists. 
              Available 24/7 to support your mental wellness journey with compassion and understanding.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                size="lg" 
                onClick={() => navigate('/therapists')}
                className="group"
              >
                Start Your Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                className="group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-2 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-2 border-white w-8 h-8">
                    <AvatarImage src={`/api/placeholder/32/32?face=${i}`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold">10,000+</span> people have found peace with Auricle
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Avatar Section */}
      <div className="container px-4 py-16 mx-auto">
        <div className="flex justify-center">
          <Card className="max-w-md">
            <CardContent className="p-6 text-center space-y-4">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src="/api/placeholder/96/96?face=woman" />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold gradient-text">Dr. Anya Sharma</h3>
                <p className="text-slate-600 dark:text-slate-400">Cognitive Behavioral Therapist</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                "Hello! I'm here to listen and support you through whatever you're experiencing. 
                Let's work together to find strategies that help you feel better."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Why Choose Auricle?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Experience the future of mental health support with our advanced AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Empathetic Understanding",
              description: "Our AI therapists are trained to provide genuine empathy and emotional support"
            },
            {
              icon: Brain,
              title: "Personalized Approach",
              description: "Each session adapts to your unique needs and therapeutic preferences"
            },
            {
              icon: Sparkles,
              title: "24/7 Availability",
              description: "Get support whenever you need it, no appointments necessary"
            }
          ].map((feature, index) => (
            <Card key={index} className="hover-glow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-lavender-400 to-sky-400 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}