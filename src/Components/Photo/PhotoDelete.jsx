import React from "react";
import { PHOTO_DELETE } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function HandleClickDelete() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const token = localStorage.getItem("token");
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete} style={{cursor: "wait"}}>
          Deletando...
        </button>
      ) : (
        <button onClick={HandleClickDelete} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
