import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Star, ArrowRight, Home, Calendar, TrendingUp, Heart } from 'lucide-react'

interface SummaryState {
  therapistId: string
  duration: number
  dialogueCount: number
}

const therapistData = {
  '1': {
    name: 'Dr. Anya Sharma',
    specialty: 'Cognitive Behavioral Therapy',
    avatar: '/api/placeholder/96/96?face=woman1'
  },
  '2': {
    name: 'Dr. Marcus Chen', 
    specialty: 'Trauma & EMDR Therapy',
    avatar: '/api/placeholder/96/96?face=man1'
  },
  '3': {
    name: 'Dr. Sarah Williams',
    specialty: 'Anxiety & Depression', 
    avatar: '/api/placeholder/96/96?face=woman2'
  },
  '4': {
    name: 'Dr. James Rodriguez',
    specialty: 'Relationship Counseling',
    avatar: '/api/placeholder/96/96?face=man2'
  },
  '5': {
    name: 'Dr. Maya Patel',
    specialty: 'Stress & Burnout',
    avatar: '/api/placeholder/96/96?face=woman3'
  },
  '6': {
    name: 'Dr. Alex Thompson',
    specialty: 'LGBTQ+ Affirmative',
    avatar: '/api/placeholder/96/96?face=person1'
  }
}

export function SessionSummaryPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as SummaryState
  
  const therapist = therapistData[state?.therapistId as keyof typeof therapistData] || therapistData['1']
  const sessionProgress = 75 // Example progress percentage
  const moodRating = 4 // Example mood rating out of 5

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const sessionHighlights = [
    "Identified key stress triggers related to work deadlines",
    "Explored breathing techniques for managing anxiety",
    "Discussed the importance of setting healthy boundaries",
    "Practiced cognitive reframing for negative thought patterns"
  ]

  const actionPlan = [
    "Practice 5-minute breathing exercises daily",
    "Implement a evening wind-down routine",
    "Schedule weekly self-care activities",
    "Keep a mood tracking journal"
  ]

  return (
    <div className="min-h-screen bg-gradient-peace">
      <div className="container px-4 py-8 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mint-400 to-teal-400 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Session Complete
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Great work today! Here's a summary of your session.
          </p>
        </div>

        {/* Session Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={therapist.avatar} />
                <AvatarFallback>{therapist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <div className="gradient-text">{therapist.name}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                  {therapist.specialty}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">{formatTime(state?.duration || 1800)}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Session Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">{sessionProgress}%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Progress Today</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= moodRating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-slate-300 dark:text-slate-600'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Mood Rating</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Indicator */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Overall Session Progress</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{sessionProgress}%</span>
              </div>
              <Progress value={sessionProgress} className="h-3" />
              <p className="text-xs text-slate-600 dark:text-slate-400">
                You're making excellent progress! Keep up the great work.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Session Recap */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-lavender-500" />
              Session Recap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Today's session focused on identifying and managing stress triggers in your daily life. 
              We explored several coping strategies and discussed how to implement healthy boundaries 
              both at work and in personal relationships. You showed great insight into your thought 
              patterns and demonstrated openness to trying new approaches.
            </p>
            <div className="text-sm text-slate-600 dark:text-slate-400 italic">
              "Remember, healing is not linear. Every step forward, no matter how small, is progress worth celebrating."
            </div>
          </CardContent>
        </Card>

        {/* Key Highlights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-sky-500" />
              Key Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {sessionHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-lavender-400 to-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Action Plan */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-mint-500" />
              Your Action Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
              Here are some strategies to practice between now and your next session:
            </p>
            <div className="grid gap-3">
              {actionPlan.map((action, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-mint-50 to-teal-50 dark:from-mint-900/20 dark:to-teal-900/20">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mint-400 to-teal-400 flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{action}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate('/therapists')}
            className="group"
          >
            Start New Session
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/')}
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Motivational Message */}
        <div className="text-center mt-8">
          <Card className="bg-gradient-to-r from-lavender-50 to-sky-50 dark:from-lavender-900/20 dark:to-sky-900/20">
            <CardContent className="p-6">
              <p className="text-lg font-medium gradient-text mb-2">
                You're doing amazing work! 🌟
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Remember to be patient and kind with yourself as you continue this journey. 
                Progress takes time, and you're exactly where you need to be.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}