import "./App.css";
import spotify from "./lib/spotify";
import { SongList } from "./components/SongList";
import { useEffect, useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { Pagination } from "./components/Pagenation";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [popularSongs, setPopularSongs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchedSongs, setSearchedSongs] = useState();
  const isSearchedResult = searchedSongs != null;

  useEffect(() => {
    fetchPopularSongs();
  }, []);

  const fetchPopularSongs = async () => {
    setIsLoading(true);
    const result = await spotify.getPopularSongs();
    const popularSongs = result.items.map((item) => {
      return item.track;
    });
    // console.log(popularSongs);
    setPopularSongs(popularSongs);
    setIsLoading(false);
    // console.log(result);
  };

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const searchSongList = async () => {
    setIsLoading(true);
    const result = await spotify.searchSongs(keyword);
    setSearchedSongs(result.items);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-1 p-8 mb-20">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Music App</h1>
        </header>
        <SearchInput
          onInputChange={handleInputChange}
          onSubmit={searchSongList}
        />
        <section>
          <h2 className="text-2xl font-semibold mb-5">
            {isSearchedResult ? "Search Results" : "Popular Songs"}
          </h2>
          <SongList
            isLoading={isLoading}
            songs={isSearchedResult ? searchedSongs : popularSongs}
          />
          {isSearchedResult && <Pagination />}
        </section>
      </main>
    </div>
  );
}
