import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import ImageModal from "../ImageModal/ImageModal";

import { fetchPhotos } from "../services/fetchUnsplash";
import { useEffect, useState } from "react";
import css from "./App.module.css";
import { Response, Result } from "./App.types";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Result[]>([]);

  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(999);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<string>("");
  const [currentItemDescr, setCurrentItemDescr] = useState<string>("");

  useEffect(() => {
    if (topic.trim() === "") {
      return;
    }

    async function getPhotos(): Promise<void> {
      try {
        setLoading(true);
        setError(false);
        const res: Response = await fetchPhotos(topic, page);
        setPhotos((prevState: Result[]) => [...prevState, ...res.results]);
        setTotalPages(res.total_pages);
        console.log(res);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getPhotos();
  }, [page, topic]);

  const handleSearch = (newTopic: string): void => {
    setTopic(newTopic);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  function openModal(valueSrc: string, descr: string): void {
    setIsOpen(true);
    setCurrentItem(valueSrc);
    setCurrentItemDescr(descr);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <div className={css.containerApp}>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && (
        <ImageGallery openModal={openModal} items={photos} />
      )}

      {page >= totalPages && <b>END OF COLLECTION!!!!</b>}

      {error && <ErrorMassage />}

      {loading && <Loader />}

      {photos.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        currentItem={currentItem}
        currentItemDescr={currentItemDescr}
        onClose={closeModal}
      ></ImageModal>
    </div>
  );
}

export default App;
