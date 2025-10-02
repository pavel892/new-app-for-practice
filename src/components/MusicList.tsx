import { useEffect, useState } from "react";
import Card from "./Card";

interface MusicListProps {
  userId: number;
  id: number;
  title: string;
}

export default function MusicList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [tracks, setTracks] = useState<MusicListProps[] | null>(null);

  function handleClick(id: number) {
    setSelectedId(id);
  }

  useEffect(() => {
    async function fetchAlbums() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/albums?_limit=5"
      );
      const data = await res.json();
      setTracks(data);
    }
    fetchAlbums();
  }, []);

  if (tracks === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {tracks.map((track) => {
        return (
          <Card
            key={track.id}
            name={track.title}
            id={track.id}
            onSend={handleClick}
            selectedId={selectedId}
          />
        );
      })}
    </div>
  );
}
