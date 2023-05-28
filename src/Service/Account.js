
const DB_NAME = "my-db";
const DB_VERSION = 1;
const ACCOUNTS_STORE_NAME = "accounts";
const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = e => reject(e.target.error);
      request.onsuccess = e => resolve(e.target.result);
      request.onupgradeneeded = e => {
        const db = e.target.result;
        db.createObjectStore(ACCOUNTS_STORE_NAME, { keyPath: "email" });
      };
    });
  };
  const addAccount = async account => {
    const db = await openDB();
    const tx = db.transaction(ACCOUNTS_STORE_NAME, "readwrite");
    const store = tx.objectStore(ACCOUNTS_STORE_NAME);
    await store.add(account);
    await tx.complete;
  };
  const findAccount = async email => {
    const db = await openDB();
    const tx = db.transaction(ACCOUNTS_STORE_NAME, "readonly");
    const store = tx.objectStore(ACCOUNTS_STORE_NAME);
    const request = store.get(email);
    return new Promise((resolve, reject) => {
      request.onsuccess = e => resolve(e.target.result);
      request.onerror = e => reject(e.target.error);
    });
  };
  
  

  export default {
    addAccount,
    findAccount
  };