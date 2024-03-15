import { useState } from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";

export default function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function Expand() {
    setIsExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={inputText.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          row={isExpanded ? 3 : 1}
          value={inputText.content}
          onClick={Expand}
          onChange={handleChange}
        />

        <Zoom in={isExpanded}>
          <Fab
            onClick={() => {
              props.onAdd(inputText);
              setInputText({
                title: "",
                content: "",
              });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
