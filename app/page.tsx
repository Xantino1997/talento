"use client";

import { useState } from "react";
import {
  Play,
  Heart,
  MessageCircle,
  Eye,
  Music,
  Mic,
  Laugh,
  Sparkles,
  Star,
  LayoutGrid,
  Palette,
} from "lucide-react";
import Swal from "sweetalert2";
import "./styles/home.css";
import HeroSlider from "./components/HeroSlider";

const categories = [
  { label: "Todo", icon: <LayoutGrid size={14} /> },
  { label: "Canto", icon: <Mic size={14} /> },
  { label: "Baile", icon: <Star size={14} /> },
  { label: "El humor", icon: <Laugh size={14} /> },
  { label: "Música", icon: <Music size={14} /> },
  { label: "Arte", icon: <Palette size={14} /> },
  { label: "Talento Libre", icon: <Sparkles size={14} /> },
];

const mockVideos = [
  {
    id: 1,
    user: "María López",
    initials: "ML",
    category: "Baile",
    title: "Mi primera actuación de baile",
    desc: "Debut en el festival de la ciudad",
    likes: "4.8k",
    comments: "312",
    viewers: "1.2k",
    live: true,
    color: "purple",
    youtubeId: "_6EHgWjtNX8",
  },
  {
    id: 2,
    user: "Carlos Ruiz",
    initials: "CR",
    category: "Canto",
    title: "Cover — Bohemian Rhapsody",
    desc: "Versión acústica",
    likes: "9.1k",
    comments: "589",
    viewers: "847",
    live: false,
    color: "pink",
    youtubeId: "fJ9rUzIMcZQ",
  },
  {
    id: 3,
    user: "Ana Gómez",
    initials: "AG",
    category: "Arte",
    title: "Pintura en vivo",
    desc: "Retrato urbano",
    likes: "6.3k",
    comments: "421",
    viewers: null,
    live: false,
    color: "amber",
    youtubeId: "kJQP7kiw5Fk",
  },
];

const comingSoonAlert = (section: string) => {
  Swal.fire({
    title: "¡Próximamente!",
    text: `${section} estará disponible muy pronto.`,
    icon: "info",
    confirmButtonText: "OK",
    background: "#1a1a2e",
    color: "#fff",
    confirmButtonColor: "#7c3aed",
  });
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="home-wrapper">
      <HeroSlider />

      {/* Categorías */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={`cat-btn ${
              activeCategory === cat.label ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat.label)}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="feed">
        {mockVideos.map((video) => (
          <div key={video.id} className="card">
            {/* VIDEO THUMB */}
            <div
              className={`card-thumb ${video.color}`}
              onClick={() => setActiveVideo(video.youtubeId)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
              />

              <div className="play-btn">
                <Play size={20} fill="white" />
              </div>

              {video.live && (
                <span className="live-badge">
                  <span className="live-dot" />
                  LIVE
                </span>
              )}

              {video.viewers && (
                <span className="viewers">
                  <Eye size={11} />
                  {video.viewers}
                </span>
              )}
            </div>

            {/* INFO */}
            <div className="card-body">
              <div className="card-user">
                <div className={`avatar avatar-${video.color}`}>
                  {video.initials}
                </div>
                <div>
                  <div className="card-name">{video.user}</div>
                  <div className="card-cat">{video.category}</div>
                </div>
              </div>

              <div className="card-title">{video.title}</div>
              <div className="card-desc">{video.desc}</div>

              <div className="card-stats">
                <span className="stat">
                  <Heart size={12} />
                  {video.likes}
                </span>
                <span className="stat">
                  <MessageCircle size={12} />
                  {video.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL VIDEO */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div
            className="video-container"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}