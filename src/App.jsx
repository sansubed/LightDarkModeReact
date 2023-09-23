import styles from "./app.module.css";
import React, { useState } from "react";
import { createPortal } from "react-dom";

function App() {
  const [open, setOpen] = useState(false);

  //falsy values
  //false, o, undefined, null, '', NaN

  //Short circuiting || -> Logical or operator
  //false || truthy -> truth
  //

  return (
    <div className={styles.wrapper}>
      <div>
        <button className={styles.btn} onClick={() => setOpen(true)}>
          Open Detail!
        </button>
        <div className={styles.card}>
          <h1>iPhone 15</h1>
          <img
            className={styles.iPhoneImg}
            src="https://images.macrumors.com/article-new/2023/09/iPhone-15-General-Feature-Black.jpg"
            alt="iPhone 15"
          />
        </div>

        {open &&
          createPortal(
            <>
              <div className={styles.overlay}>Overlay</div>
              <div className={styles.modal}>
                <div>This is the detail of the iPhone</div>
                <button onClick={() => setOpen(false)} className={styles.close}>
                  X
                </button>
                <button>Delete</button>
                <button>Close</button>
              </div>
            </>,
            document.getElementById("modal")
          )}
      </div>
    </div>
  );
}

export default App;

//ReactDom.

// {
//   /* <div>{"1" && 0 && "j"}</div> -> gives 0,  but if 0 is in string */
// }
