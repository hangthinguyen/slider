import pic1 from "./images/city-1.jpeg";
import pic2 from "./images/city-2.jpeg";
import pic3 from "./images/img-1.jpeg";
import pic4 from "./images/img-2.jpeg";
import pic5 from "./images/person-1.jpeg";
import { useCallback, useState } from "react";
import styles from "./App.module.scss";

const images = [
  {
    id: 1,
    pic: pic1,
  },
  {
    id: 2,
    pic: pic2,
  },
  {
    id: 3,
    pic: pic3,
  },
  {
    id: 4,
    pic: pic4,
  },
  {
    id: 5,
    pic: pic5,
  },
];

function App() {
  const [currentItem, setCurrentItems] = useState(0);

  const handleForwardOnClick = useCallback(() => {
    if (currentItem < images.length - 1) {
      setCurrentItems(currentItem + 1);
    } else if (currentItem === images.length - 1) {
      setCurrentItems(0);
    }
  }, [currentItem]);

  const handleBackwardOnClick = useCallback(() => {
    setCurrentItems(currentItem - 1);

    if (currentItem === 0) {
      setCurrentItems(images.length - 1);
    }
  }, [currentItem]);

  const item = images[currentItem];
  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
        <div className={styles.imgsContainer}>
          <div className={styles.imgContainer} key={item.id}>
            <img src={item.pic} alt="" className={styles.img} />
          </div>
        </div>

        <div className={styles.btns}>
          {/* {currentItem === 0 ? null : (
            <button onClick={handleBackwardOnClick}>Prev</button>
          )}
          {currentItem === images.length - 1 ? null : (
            <button onClick={handleForwardOnClick}>Next</button>
          )} */}
          <button onClick={handleBackwardOnClick}>Prev</button>
          <button onClick={handleForwardOnClick}>Next</button>
        </div>
      </header>
    </div>
  );
}

export default App;
