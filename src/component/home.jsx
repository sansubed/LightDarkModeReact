import { useState } from "react";
import styles from "./home.module.css";

function Home() {
  const [mode, setMode] = useState(false);

  //let mode = true
  //if you want it to change the state, above declaration will not work
  //because you need to re-render it again
  //verify abive with: console.log('Rendering home')

  //   //ternary operator
  //   condition ? true condition : false condition

  return (
    //☾☼
    <div className={mode ? styles.light : styles.dark}>
      Home
      <button onClick={() => setMode(!mode)} className={styles.modeIcon}>
        {mode ? "☼" : "☾"}
      </button>
    </div>
  );
}

export default Home;
