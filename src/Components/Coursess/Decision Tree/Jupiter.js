import React from "react";
import { Container } from "react-bootstrap";
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
function Jupiter() {
  const DARK_MODE = true;
  return (
    <Container className="minH text-white">
      <div className="jupiter">
        <JupyterNotebookViewer
          filePath="/notebooks/decision_trees.ipynb"
          className="notebook-class"
          notebookInputLanguage="python"
          // notebookOutputLanguage="python"
          showInputLineNumbers={true}
          showOutputLineNumbers={true}
          withOnClick={true}
        />
      </div>
    </Container>
  );
}

export default Jupiter;
