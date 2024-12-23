import styles from "./icons.module.css";

export const LinkedIn = () => {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 256 256" className={styles.svg}>
        <rect x="37.6" y="97.9" width="37.6" height="120.5" />
        <path d="M57.2,34.7h-.7c-12.1,0-21.8,9.8-21.8,21.8s9.8,21.8,21.8,21.8c12,.3,21.9-9.2,22.2-21.1v-.7c.1-12-9.6-21.8-21.5-21.8Z" />
        <path
          className={styles.path}
          d="M172.5,94.9c-15.3-.8-29.8,6.6-38.1,19.4h-1.1v-16.4h-35.4v120.5h37.6v-64.1c-1.1-13.7,8.9-25.7,22.6-27h1.4c12,0,20.9,7.5,20.9,26.5v64.5h37.6l.4-73.1h0c0-36.2-23-50.3-45.9-50.3Z"
        />
      </svg>
    </div>
  );
};

export const Mail = () => {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 256 256" className={styles.svg}>
        <path d="M198.9,79c-5.6-12.6-14.1-22.3-25.5-29-11.4-6.7-24.9-10.1-40.7-10.1s-29.5,3.8-41.8,11.3-22,18.2-29.2,31.9c-7.2,13.7-11.1,29.3-11.9,46.6-.7,18.1,1.8,33.7,7.5,46.7,5.7,13.1,14.4,22.9,26.1,29.6s25.8,10,42.4,10c6.6,0,13.1-.8,19.6-2.3,6.5-1.6,11.7-3.6,15.5-6.1l-3.6-14.5c-4.2,2-9.1,3.5-14.8,4.7-5.7,1.1-11.2,1.7-16.4,1.7-19.7,0-34.6-6.1-44.5-18.2-9.9-12.2-14.4-29.4-13.4-51.6.7-14.6,3.7-27.6,9.2-38.9,5.4-11.3,12.9-20,22.4-26.2,9.5-6.1,20.3-9.2,32.4-9.2,19.4,0,34,5.9,43.9,17.7,9.9,11.7,14.3,28.6,13.2,50.5-.4,10.9-2.5,19.8-6.4,26.5-3.9,6.7-8.7,10.1-14.5,10.1-3.7,0-6.5-1.4-8.2-4-1.7-2.6-2.2-6.4-1.6-11.4l4.8-54.4-5.9-4c-6.4-4.1-14-6.2-23-6.2-7.2,0-14,2.2-20.3,6.5-6.3,4.3-11.5,10.5-15.6,18.6-4.1,8-6.8,17.2-7.9,27.6-1.2,12.7.7,22.9,5.7,30.6s12.1,11.6,21.3,11.6c10.1,0,18.3-4.4,24.6-13.2,2,4.3,5,7.7,8.9,10,3.9,2.3,8.6,3.5,14,3.5,12.2,0,21.9-4.8,29.2-14.2,7.2-9.5,11.2-22.2,11.9-38.3.7-16.7-1.8-31.3-7.4-43.9ZM139.9,142.5c-1.8,5.1-4.1,9-6.9,11.7-2.8,2.7-5.7,4-8.8,4-4.8,0-8.3-2.2-10.4-6.5-2.2-4.3-2.9-10.6-2.2-18.9,1.2-11.8,3.8-20.7,7.8-26.9,4-6.1,9.6-9.2,17-9.1,2.5,0,5.1.4,7.5,1.2l-4,44.5Z" />
      </svg>
    </div>
  );
};

export const Github = () => {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 256 256" className={styles.svg}>
        <path d="M128,3.2C57.3,3.2,0,60.4,0,131.2c0,56.6,36.6,104.5,87.5,121.4c6.4,1.1,8.8-2.7,8.8-6.1c0-3-0.2-13.1-0.2-23.8c-32.2,5.9-40.5-7.8-43-15c-1.4-3.7-7.7-15-13.1-18.1c-4.5-2.4-10.9-8.3-0.2-8.5c10.1-0.2,17.3,9.3,19.7,13.1c11.5,19.4,29.9,13.9,37.3,10.6c1.1-8.3,4.5-13.9,8.2-17.1c-28.5-3.2-58.2-14.2-58.2-63.2c0-13.9,5-25.4,13.1-34.4c-1.3-3.2-5.8-16.3,1.3-33.9c0,0,10.7-3.4,35.2,13.1c10.2-2.9,21.1-4.3,32-4.3s21.8,1.4,32,4.3c24.5-16.6,35.2-13.1,35.2-13.1c7,17.6,2.6,30.7,1.3,33.9c8.2,9,13.1,20.3,13.1,34.4c0,49.1-29.9,60-58.4,63.2c4.6,4,8.6,11.7,8.6,23.7c0,17.1-0.2,30.9-0.2,35.2c0,3.4,2.4,7.4,8.8,6.1c6.3-2.1,12.4-4.7,18.3-7.8c5.9-3.1,11.5-6.6,16.9-10.6c5.4-4,10.4-8.3,15.1-13.1c4.7-4.7,9-9.8,12.8-15.2c3.9-5.4,7.3-11.1,10.3-17c3-5.9,5.5-12.1,7.6-18.4c2-6.3,3.6-12.8,4.6-19.4c1-6.6,1.6-13.2,1.6-19.9C256,60.4,198.7,3.2,128,3.2z" />
      </svg>
    </div>
  );
};

export const Arrow = () => {
  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={styles.arrow}>
        <line className="svg" x1="12" y1="24" x2="36" y2="24" />
        <polyline className="svg" points="24.97 36.73 12.24 24 24.97 11.27" />
      </svg>
    </div>
  );
};

export const ArrowSmall = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.arrow}>
      <line className="svg" x1="1" y1="8" x2="15" y2="8" />
      <polyline className="svg" points="8 1 15 8 8 15" />
    </svg>
  );
};
