const SoundCloud = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-color,#4B5563)] mb-6 text-center">
        Music
      </h2>
      
      <div className="bg-[var(--card-bg,#ffffff)] rounded-lg shadow-lg p-4 md:p-6">
        <div className="w-full">
          <iframe 
            width="100%" 
            height="300" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/55881279&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            className="rounded-lg"
            title="SoundCloud Player - Letras de mi para ti"
          />
          
          <div className="mt-4 text-xs text-[var(--text-color,#4B5563)] opacity-70">
            <a 
              href="https://soundcloud.com/doubl_es_harp" 
              title="Double Sharp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--icon-color,#2563eb)] transition-colors"
            >
              Double Sharp
            </a>
            {' · '}
            <a 
              href="https://soundcloud.com/doubl_es_harp/sets/letras-de-mi-para-ti" 
              title="Letras de mi para ti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--icon-color,#2563eb)] transition-colors"
            >
              Letras de mi para ti
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundCloud;