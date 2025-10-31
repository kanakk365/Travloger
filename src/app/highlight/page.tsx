"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Volume2, VolumeX, Heart } from "lucide-react";
import NextImage from "next/image";

interface VideoData {
  id: string;
  videoUrl?: string;
  thumbnailUrl: string;
  title: string;
  user: string;
  userAvatar?: string;
  likes: number;
  comments: number;
  shares: number;
  location?: string;
}

// Mock video data - replace with your actual video URLs
const videos: VideoData[] = [
  {
    id: "1",
    thumbnailUrl: "/landing/real1.png",
    title: "Amazing sunset in Tbilisi! ✨",
    user: "@travelwanderer",
    likes: 12500,
    comments: 342,
    shares: 89,
    location: "Tbilisi, Georgia",
  },
  {
    id: "2",
    thumbnailUrl: "/landing/real2.png",
    title: "City skyline views are breathtaking 🌆",
    user: "@cityexplorer",
    likes: 8900,
    comments: 256,
    shares: 124,
    location: "New York, USA",
  },
  {
    id: "3",
    thumbnailUrl: "/landing/real3.png",
    title: "Beach vibes and good times 🏖️",
    user: "@beachlover",
    likes: 15200,
    comments: 478,
    shares: 203,
    location: "Maldives",
  },
  {
    id: "4",
    thumbnailUrl: "/landing/real4.png",
    title: "Mountain adventure of a lifetime ⛰️",
    user: "@adventure_seeker",
    likes: 21000,
    comments: 567,
    shares: 156,
    location: "Swiss Alps",
  },
  {
    id: "5",
    thumbnailUrl: "/landing/real1.png",
    title: "Exploring hidden gems 🗺️",
    user: "@travelwanderer",
    likes: 9800,
    comments: 234,
    shares: 98,
    location: "Tokyo, Japan",
  },
];

export default function HighlightPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const router = useRouter();

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe && currentIndex < videos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
    if (isDownSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Handle wheel scroll for desktop
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && currentIndex < videos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Play/pause video when index changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex && isPlaying) {
          video.play().catch(() => {
            // Auto-play blocked, handle gracefully
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex, isPlaying]);

  // Scroll to current video
  useEffect(() => {
    if (containerRef.current) {
      const videoElement = containerRef.current.children[currentIndex] as HTMLElement;
      if (videoElement) {
        videoElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [currentIndex]);

  // Prevent default scroll behavior
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
      return () => {
        container.removeEventListener("wheel", handleScroll);
      };
    }
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = !isMuted;
      }
    });
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white font-semibold text-lg">Highlights</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Video Container */}
      <div
        ref={containerRef}
        className="h-full w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onWheel={handleWheel}
        style={{ scrollSnapType: "y mandatory" }}
      >
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative h-screen w-full snap-start snap-always flex-shrink-0"
          >
            {/* Video/Image */}
            <div className="absolute inset-0">
              {/* Fallback image - replace with actual video URLs in video.videoUrl */}
              {video.videoUrl ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video.videoUrl}
                  poster={video.thumbnailUrl}
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                  onClick={togglePlayPause}
                />
              ) : (
                <NextImage
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                />
              )}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 pb-20">
              {/* Top Info */}
              <div className="flex justify-between items-start pt-16">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {video.userAvatar && (
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                        <NextImage
                          src={video.userAvatar}
                          alt={video.user}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6">
                <button
                  className="flex flex-col items-center gap-1"
                  onClick={() => {
                    // Handle like
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-colors">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                  <span className="text-white text-xs font-medium">
                    {formatCount(video.likes)}
                  </span>
                </button>

                <button
                  onClick={toggleMute}
                  className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

