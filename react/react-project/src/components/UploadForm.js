// TODO: answer here
// import { pushPost } from "../api/post";
import { useState } from "react";
import { pushPostWithImage } from "../api/post";
export default function UploadForm({ onSubmit }) {
  // TODO: answer here
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmitAPI = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("content", caption);

    const res = await pushPostWithImage(caption, file);
    const { image, content } = await res.data;
    onSubmit({ image, content });
  };

  const handleCaption = (caption) => {
    setCaption(caption);
  };
  const handleFile = (file) => {
    setFile(file);
  };
  return (
    <div aria-label="Upload Form">
      <form onSubmit={(e) => handleSubmitAPI(e)}>
        <input
          aria-label="Caption Input"
          type="text"
          onChange={(e) => handleCaption(e.target.value)}
          style={{
            width: "50%",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px #ccc",
            backgroundColor: "#fff",
          }}
        />

        <input
          aria-label="Image Input"
          type="file"
          accept="image/png, image/jpg, image/gif"
          onChange={(e) => handleFile(e.target.files[0])}
          style={{
            width: "50%",
          }}
        />
        <button aria-label="Submit Button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
