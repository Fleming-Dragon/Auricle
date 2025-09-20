import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mic, MicOff, Volume2, VolumeX, PhoneOff } from "lucide-react";

interface Therapist {
  id: number;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  avatar: string;
  rating: number;
}

export function LiveSessionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sessionTime, setSessionTime] = useState(0);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);

  // Get therapist data from navigation state
  const therapist: Therapist | null = location.state?.therapist || null;

  // Default therapist if none selected
  const defaultTherapist: Therapist = {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Licensed Clinical Psychologist",
    experience: "8 years experience",
    specialties: ["Anxiety", "Depression", "Trauma"],
    avatar:
      "https://images.unsplash.com/photo-1594824720379-ab5d7ad86e3a?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
  };

  const currentTherapist = therapist || defaultTherapist;

  useEffect(() => {
    // Session timer
    const timer = setInterval(() => {
      setSessionTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleEndSession = () => {
    navigate("/summary", {
      state: {
        therapist: currentTherapist,
        sessionDuration: sessionTime,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-sky-50 to-mint-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-violet-950 dark:to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12 ring-2 ring-lavender-400/30 dark:ring-violet-400/30">
              <AvatarImage src={currentTherapist.avatar} />
              <AvatarFallback className="bg-gradient-to-br from-lavender-100 to-sky-100 dark:from-violet-900/30 dark:to-cyan-900/30 text-lavender-700 dark:text-violet-300">
                {currentTherapist.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-r from-lavender-600 via-sky-500 to-teal-500 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Session with {currentTherapist.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                {currentTherapist.title}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-lg font-mono font-semibold bg-gradient-to-r from-teal-600 to-sky-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {formatTime(sessionTime)}
              </div>
              <div className="text-xs text-muted-foreground">Session Time</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Video/Main Content Area */}
          <div className="w-full">
            <Card className="overflow-hidden bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-lavender-200/50 dark:border-violet-600/30 shadow-xl shadow-lavender-100/50 dark:shadow-violet-900/30">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-lavender-100 via-sky-100 to-mint-100 dark:from-slate-800 dark:via-violet-900/50 dark:to-slate-800 flex items-center justify-center relative border border-lavender-200/30 dark:border-violet-700/30">
                  {/* Simulated Video Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lavender-200/20 via-sky-200/20 to-teal-200/20 dark:from-violet-500/10 dark:via-cyan-500/10 dark:to-emerald-500/10"></div>

                  {/* Therapist Video Simulation */}
                  <div className="relative z-10 text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-lavender-300/40 dark:ring-violet-400/40">
                      <AvatarImage src={currentTherapist.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-lavender-500 to-sky-500 dark:from-violet-600 dark:to-cyan-600 text-white text-2xl">
                        {currentTherapist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-lavender-700 dark:text-violet-300 text-sm font-medium">
                      Connected with {currentTherapist.name}
                    </p>
                  </div>

                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full px-6 py-3 border border-lavender-200/50 dark:border-violet-600/50 shadow-lg shadow-lavender-200/50 dark:shadow-violet-900/50">
                      {/* Microphone Button */}
                      <button
                        onClick={() => setIsMicOn(!isMicOn)}
                        className="p-4 rounded-full bg-gray-800 text-white"
                      >
                        {isMicOn ? (
                          <Mic className="w-8 h-8 text-green-400" />
                        ) : (
                          <MicOff className="w-8 h-8 text-red-400" />
                        )}
                      </button>

                      {/* Speaker Button */}
                      <button
                        onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                        className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-white"
                        title={
                          isSpeakerOn ? "Turn off speaker" : "Turn on speaker"
                        }
                      >
                        {isSpeakerOn ? (
                          <Volume2 className="w-8 h-8 text-green-400" />
                        ) : (
                          <VolumeX className="w-8 h-8 text-red-400" />
                        )}
                      </button>

                      {/* End Session Button */}
                      <button
                        onClick={handleEndSession}
                        className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white"
                        title="End session"
                      >
                        <PhoneOff className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
