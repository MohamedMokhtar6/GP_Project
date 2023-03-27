import React from 'react'
import { Container } from 'react-bootstrap'
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";

function Jupiter() {
    const DARK_MODE = true;

    return (
        <Container className='minH'>
            <div className="jupiter">
                <JupyterNotebookViewer
                    filePath="/notebooks/knn.ipynb"
                    className="notebook-class"
                    notebookInputLanguage="python"
                    inputMarkdownDarkTheme={DARK_MODE}
                    showInputLineNumbers={true}
                    showOutputLineNumbers={true}
                    withOnClick={true}
                />
            </div>

        </Container>)
}

export default Jupiter