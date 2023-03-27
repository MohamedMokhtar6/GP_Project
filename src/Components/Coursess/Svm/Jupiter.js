import React from 'react'
import { Container } from 'react-bootstrap'
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
export default function Jupiter() {
  const DARK_MODE = true;
  return (
    <Container className='minH'>
      <div className="jupiter">
        <JupyterNotebookViewer
          filePath="/notebooks/svm.ipynb"
          className="notebook-class"
          outputImageClassName="output-image"
          outputBorderClassName="output-border"
          inputMarkdownDarkTheme={DARK_MODE}
          showInputLineNumbers={true}
          showOutputLineNumbers={true}
          withOnClick={true}
        />
      </div>

    </Container>
  )
}