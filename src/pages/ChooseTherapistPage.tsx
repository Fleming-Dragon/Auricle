import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Brain,
  Smile,
  Zap,
  CheckCircle,
} from "lucide-react";

interface Therapist {
  id: string;
  name: string;
  specialty: string;
  description: string;
  style: string[];
  avatar: string;
  experience: string;
  approach: string;
}

const therapists: Therapist[] = [
  {
    id: "1",
    name: "Dr. Anya Sharma",
    specialty: "Cognitive Behavioral Therapy",
    description: "Warm, empathetic, and supportive approach to healing",
    style: ["Empathetic", "Solution-focused", "Mindful"],
    avatar: "/doctorimg6.jpg",
    experience: "8+ years",
    approach: "CBT & Mindfulness",
  },
  {
    id: "2",
    name: "Dr. Marcus Chen",
    specialty: "Trauma & EMDR Therapy",
    description: "Gentle, patient, and trauma-informed care",
    style: ["Patient", "Trauma-informed", "Gentle"],
    avatar: "/doctorimg",
    experience: "12+ years",
    approach: "EMDR & Somatic",
  },
  {
    id: "3",
    name: "Dr. Sarah Williams",
    specialty: "Anxiety & Depression",
    description: "Encouraging, optimistic, and strength-based therapy",
    style: ["Encouraging", "Optimistic", "Strength-based"],
    avatar: "/doctorimg3.jpg",
    experience: "6+ years",
    approach: "Positive Psychology",
  },
  {
    id: "4",
    name: "Dr. James Rodriguez",
    specialty: "Relationship Counseling",
    description: "Direct, insightful, and communication-focused",
    style: ["Direct", "Insightful", "Practical"],
    avatar: "/doctorimg4.jpg",
    experience: "10+ years",
    approach: "Gottman Method",
  },
  {
    id: "5",
    name: "Dr. Jay Patel",
    specialty: "Stress & Burnout",
    description: "Calm, reflective, and work-life balance focused",
    style: ["Calm", "Reflective", "Balanced"],
    avatar: "/doctorimg5.jpg",
    experience: "7+ years",
    approach: "Stress Reduction",
  },
  {
    id: "6",
    name: "Dr. Alex Thompson",
    specialty: "LGBTQ+ Affirmative",
    description: "Inclusive, affirming, and identity-supportive",
    style: ["Inclusive", "Affirming", "Understanding"],
    avatar: "/doctorimg2",
    experience: "9+ years",
    approach: "Affirmative Therapy",
  },
];

const styleIcons = {
  Empathetic: Heart,
  "Solution-focused": Brain,
  Mindful: Smile,
  Patient: Smile,
  "Trauma-informed": Heart,
  Gentle: Heart,
  Encouraging: Zap,
  Optimistic: Smile,
  "Strength-based": Zap,
  Direct: Brain,
  Insightful: Brain,
  Practical: Brain,
  Calm: Smile,
  Reflective: Brain,
  Balanced: Smile,
  Inclusive: Heart,
  Affirming: Heart,
  Understanding: Heart,
};

export function ChooseTherapistPage() {
  const navigate = useNavigate();
  const [selectedTherapist, setSelectedTherapist] = useState<string | null>(
    null
  );

  const handleContinue = () => {
    if (selectedTherapist) {
      const selectedTherapistData = therapists.find(
        (t) => t.id === selectedTherapist
      );
      if (selectedTherapistData) {
        // Transform the data to match LiveSessionPage interface
        const therapistForSession = {
          id: parseInt(selectedTherapistData.id),
          name: selectedTherapistData.name,
          title: selectedTherapistData.specialty,
          experience: selectedTherapistData.experience,
          specialties: [selectedTherapistData.specialty],
          avatar: selectedTherapistData.avatar,
          rating: 4.8, // Default rating
        };
        navigate("/session", { state: { therapist: therapistForSession } });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-peace">
      <div className="container px-4 py-8 mx-auto">
        {/* Logo Header */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-lavender-100 to-sky-100 dark:from-lavender-900/30 dark:to-sky-900/30 rounded-lg shadow-md">
              <img
                src="/depth-4--frame-0.svg"
                alt="Auricle Logo"
                className="w-6 h-6"
              />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-lavender-600 via-sky-500 to-teal-500 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Auricle
            </h1>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              Choose Your Therapist
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Select an AI therapist that matches your preferred communication
              style
            </p>
          </div>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>

        {/* Therapist Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {therapists.map((therapist) => (
            <Card
              key={therapist.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedTherapist === therapist.id
                  ? "ring-2 ring-lavender-400 shadow-lg shadow-lavender-200/50"
                  : "hover-glow"
              }`}
              onClick={() => setSelectedTherapist(therapist.id)}
            >
              <CardHeader className="text-center">
                <div className="relative mb-4">
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarImage src={therapist.avatar} />
                    <AvatarFallback>
                      {therapist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {selectedTherapist === therapist.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-mint-400 to-teal-400 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg">{therapist.name}</CardTitle>
                <CardDescription className="text-sm font-medium text-lavender-600">
                  {therapist.specialty}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  {therapist.description}
                </p>

                {/* Style Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {therapist.style.map((style) => {
                    const IconComponent =
                      styleIcons[style as keyof typeof styleIcons] || Heart;
                    return (
                      <div
                        key={style}
                        className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-lavender-100 to-sky-100 text-lavender-700 text-xs"
                      >
                        <IconComponent className="w-3 h-3" />
                        {style}
                      </div>
                    );
                  })}
                </div>

                {/* Experience & Approach */}
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center space-y-1">
                  <div>Experience: {therapist.experience}</div>
                  <div>Approach: {therapist.approach}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={!selectedTherapist}
            className="group"
          >
            Continue to Session
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Help Text */}
        {!selectedTherapist && (
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4 text-sm">
            Please select a therapist to continue
          </p>
        )}
      </div>
    </div>
  );
}
