import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  // Helper function to update text and push old text into history
  const updateText = (newText) => {
    setUndoStack([...undoStack, text]); // Save current text before changing
    setRedoStack([]); // Clear redo stack after new change
    setText(newText);
  };

  const handleUpClick = () => {
    updateText(text.toUpperCase());
    props.showAlert("UpperCase enabled", "success");
  };

  const handleLoClick = () => {
    updateText(text.toLowerCase());
    props.showAlert("LowerCase enabled", "success");
  };

  const handleClearClick = () => {
    updateText("");
    props.showAlert("Text cleared", "success");
  };

  const handleExtraSpaces = () => {
    updateText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleReverseClick = () => {
    updateText(text.split("").reverse().join(""));
    props.showAlert("Text reversed", "success");
  };

  const handleSentenceCase = () => {
    updateText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    props.showAlert("Sentence case enabled", "success");
  };

  const handleOnChange = (event) => {
    updateText(event.target.value);
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const lastText = undoStack[undoStack.length - 1];
      setRedoStack([...redoStack, text]); // push current text into redo stack
      setUndoStack(undoStack.slice(0, -1)); // remove last from undo
      setText(lastText);
      props.showAlert("↩️ Undo done! Your previous text is back.", "success");
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const lastRedo = redoStack[redoStack.length - 1];
      setUndoStack([...undoStack, text]); // push current text into undo stack
      setRedoStack(redoStack.slice(0, -1)); // remove last from redo
      setText(lastRedo);
      props.showAlert("↪️ Redo done! Your change is back again.", "success");
    }
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleSentenceCase}>
          Convert to Sentence Case
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleReverseClick}>
          Reverse Text
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>

        <button disabled={undoStack.length === 0} className="btn btn-warning mx-2" onClick={handleUndo}>
          Undo
        </button>

        <button disabled={redoStack.length === 0} className="btn btn-warning mx-2" onClick={handleRedo}>
          Redo
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text Summary </h2>
        <p>
          {text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minute read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
