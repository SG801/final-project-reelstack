import Image from "next/image";
import styles from "./page.module.css";




export default function Home() {
  return (
    <>
  <h1>🍿 REEL MAGIC 🍿</h1>
  <p>Keep It Reel</p>
  <hr></hr>
  <div className={styles.mWrapper}>
    <div className={styles.movieBox}>
    </div> 
    <div className={styles.movieBox}>
    </div> 
    <div className={styles.movieBox}>
    </div> 
    <div className={styles.movieBox}>
    </div> 
  </div>  
  <hr></hr>
  <div className={styles.reviewBox}>
    <p>James</p>
    <p>*️⃣*️⃣*️⃣*️⃣*️⃣</p>
    <p>I liked this movie!!</p>
  </div>
  <div className={styles.reviewBox}>
    <p>James</p>
    <p>*️⃣*️⃣*️⃣*️⃣*️⃣</p>
    <p>I liked this movie!!</p>
  </div>
  <div className={styles.reviewBox}>
    <p>James</p>
    <p>*️⃣*️⃣*️⃣*️⃣*️⃣</p>
    <p>I liked this movie!!</p>
  </div>
  </>
  );
}
