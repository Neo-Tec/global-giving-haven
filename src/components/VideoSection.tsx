
import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "video1",
    title: "Water Wells Project in Africa",
    description: "See how your donations are providing clean water to communities in need.",
    thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  },
  {
    id: "video2",
    title: "Education for Orphaned Children",
    description: "Supporting educational initiatives for children who have lost their parents.",
    thumbnail: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1200",
    videoUrl: "https://player.vimeo.com/external/371433631.sd.mp4?s=8324edd3ea3652ab5b8cf1e086f617061f5ed93a&profile_id=139&oauth2_token_id=57447761"
  },
  {
    id: "video3",
    title: "Food Distribution Program",
    description: "Delivering essential food supplies to families affected by poverty and conflict.",
    thumbnail: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1200",
    videoUrl: "https://player.vimeo.com/external/426194319.sd.mp4?s=1a1fedf27addd8278d3551bba9f56bc9b83b5f56&profile_id=139&oauth2_token_id=57447761"
  }
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Reset video state when changing videos
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setProgress(0);
      setIsPlaying(false);
      
      if (progressIntervalRef.current) {
        window.clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }
  }, [activeVideo]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        if (progressIntervalRef.current) {
          window.clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      } else {
        videoRef.current.play();
        progressIntervalRef.current = window.setInterval(() => {
          if (videoRef.current) {
            setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
          }
        }, 100);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    if (progressIntervalRef.current) {
      window.clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  return (
    <section id="videos" ref={sectionRef} className="py-24 bg-zakat-dark text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium tracking-wider text-zakat-secondary uppercase bg-zakat-secondary/20 rounded-full">
            Our Impact
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            See Our Work in Action
          </h2>
          <div className="w-16 h-1 bg-zakat-secondary mx-auto mt-6 mb-8 rounded"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Witness the real impact of your generous donations through our field work videos.
            Every contribution helps create lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            className={`lg:col-span-2 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-black">
              <video
                ref={videoRef}
                src={videos[activeVideo].videoUrl}
                poster={videos[activeVideo].thumbnail}
                className="w-full h-auto"
                muted={isMuted}
                onEnded={handleVideoEnd}
                playsInline
              />

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                <div className="p-4 sm:p-6">
                  <div className="w-full bg-white/30 rounded-full h-1 mb-4">
                    <div 
                      className="bg-zakat-secondary h-1 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Button 
                        onClick={togglePlay} 
                        variant="ghost" 
                        size="icon"
                        className="text-white hover:bg-white/20 rounded-full h-10 w-10"
                      >
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>
                      
                      <Button 
                        onClick={toggleMute} 
                        variant="ghost" 
                        size="icon"
                        className="text-white hover:bg-white/20 rounded-full h-10 w-10"
                      >
                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </Button>
                    </div>
                    
                    <Button 
                      onClick={handleFullScreen} 
                      variant="ghost" 
                      size="icon"
                      className="text-white hover:bg-white/20 rounded-full h-10 w-10"
                    >
                      <Maximize className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">{videos[activeVideo].title}</h3>
              <p className="text-gray-300">{videos[activeVideo].description}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {videos.map((video, index) => (
              <div 
                key={video.id}
                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-700 transform ${
                  activeVideo === index 
                    ? 'bg-zakat-primary/20 border border-zakat-primary/30' 
                    : 'bg-white/5 hover:bg-white/10'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                onClick={() => setActiveVideo(index)}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-white/80 ${
                      activeVideo === index ? 'bg-zakat-secondary' : 'bg-white/80'
                    }`}>
                      <Play className={`h-3.5 w-3.5 ${
                        activeVideo === index ? 'text-white' : 'text-zakat-dark'
                      }`} />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium truncate ${
                    activeVideo === index ? 'text-zakat-secondary' : 'text-white'
                  }`}>
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2 mt-1">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
