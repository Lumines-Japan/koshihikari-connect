import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 再生速度を0.5倍（半分の速度）に設定
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://dffgvfuyuzktboucthiq.supabase.co/storage/v1/object/public/company-images/asset/773ae833.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-snow-50">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">極上の新潟コシヒカリ</h1>
        <p className="text-xl md:text-2xl mb-8">自然の恵みと匠の技が生み出す、至高の一粒</p>
        <Button className="bg-rice-500 hover:bg-rice-700 text-niigata-900 text-lg px-8 py-3">今すぐ購入</Button>
      </div>
    </section>
  );
};

export default Hero;