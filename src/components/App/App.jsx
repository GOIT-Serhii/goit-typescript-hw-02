import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import ImageModal from "../ImageModal/ImageModal";

import { fetchPhotos } from "../services/fetchUnsplash";
import { useEffect, useState } from "react";
import css from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);

  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [currentItemDescr, setCurrentItemDescr] = useState("");

  useEffect(() => {
    if (topic.trim() === "") {
      return;
    }

    async function getPhotos() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchPhotos(topic, page);
        setPhotos((prevState) => [...prevState, ...res.results]);
        setTotalPages(res.total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getPhotos();
  }, [page, topic]);

  const handleSearch = (newTopic) => {
    // if (newTopic.trim() === "") {
    //   toast.error("You need to type something");
    // }
    setTopic(newTopic);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function openModal(valueSrc, descr) {
    setIsOpen(true);
    setCurrentItem(valueSrc);
    setCurrentItemDescr(descr);
  }

  function closeModal() {
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
        onRequestClose={closeModal}
        currentItem={currentItem}
        currentItemDescr={currentItemDescr}
        onClose={closeModal}
      ></ImageModal>
    </div>
  );
}

export default App;
