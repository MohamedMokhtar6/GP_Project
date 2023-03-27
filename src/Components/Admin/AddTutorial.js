import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import HtmlEditor, { Toolbar, Item, MediaResizing, TableContextMenu, ImageUpload } from 'devextreme-react/html-editor';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import { markup, tabs } from './data.js';

import 'devextreme/ui/html_editor/converters/markdown';
const sizeValues = ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'];
const fontValues = ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'];
const headerValues = [false, 1, 2, 3, 4, 5];





class AddTutorial extends React.Component {

    constructor() {
        super();

        this.state = {
            valueContent: markup,
            isMultiline: true,
            currentTab: tabs[2].value,
            editorValueType: 'html',
        };


        this.valueChanged = this.valueChanged.bind(this);
        this.valueTypeChanged = this.valueTypeChanged.bind(this);
        this.prettierFormat = this.prettierFormat.bind(this);
        this.tabs = tabs;
        this.multilineChanged = this.multilineChanged.bind(this);
        this.currentTabChanged = this.currentTabChanged.bind(this);
    }


    render() {
        const { valueContent, editorValueType, } = this.state;




        return (
            <>
                <Container className='minH my-5'>
                    <Row>
                        <input
                            placeholder="Course Name"
                            type={"text"}
                            className="fit reduce my-2"
                        />
                    </Row>
                    <Row>
                        <label htmlFor="upload">
                            <p>Jupiter File</p>

                        </label>
                        <input
                            type={"file"}
                            id="upload"
                            className='fit' />

                    </Row>
                    <div className="widget-container">
                        <HtmlEditor
                            height={800}
                            defaultValue={valueContent}
                            valueType={editorValueType}
                            onValueChanged={this.valueChanged}
                        >
                            <MediaResizing enabled={true} />
                            <ImageUpload tabs={this.state.currentTab} fileUploadMode="base64" />
                            <Toolbar multiline={this.state.isMultiline}>
                                <Item name="undo" />
                                <Item name="redo" />
                                <Item name="separator" />
                                <Item
                                    name="size"
                                    acceptedValues={sizeValues}
                                />
                                <Item
                                    name="font"
                                    acceptedValues={fontValues}
                                />
                                <Item name="separator" />
                                <Item name="bold" />
                                <Item name="italic" />
                                <Item name="strike" />
                                <Item name="underline" />
                                <Item name="separator" />
                                <Item name="alignLeft" />
                                <Item name="alignCenter" />
                                <Item name="alignRight" />
                                <Item name="alignJustify" />
                                <Item name="separator" />
                                <Item name="orderedList" />
                                <Item name="bulletList" />
                                <Item name="separator" />
                                <Item
                                    name="header"
                                    acceptedValues={headerValues}
                                />
                                <Item name="separator" />
                                <Item name="color" />
                                <Item name="background" />
                                <Item name="separator" />
                                <Item name="link" />
                                <Item name="image" />
                                <Item name="separator" />
                                <Item name="clear" />
                                <Item name="codeBlock" />
                                <Item name="blockquote" />
                                <Item name="separator" />
                                <Item name="insertTable" />
                                <Item name="deleteTable" />
                                <Item name="insertRowAbove" />
                                <Item name="insertRowBelow" />
                                <Item name="deleteRow" />
                                <Item name="insertColumnLeft" />
                                <Item name="insertColumnRight" />
                                <Item name="deleteColumn" />

                            </Toolbar>
                            <TableContextMenu enabled={true} />
                        </HtmlEditor>
                        {/* 
                        <div className="options">

                            <div className="value-content">
                                {this.prettierFormat(valueContent)}
                            </div>
                        </div> */}
                    </div>
                    <Row className='justify-content-center'>

                        <Button variant='black' className='bg-black text-white fit  my-4' onClick={() => { console.log(valueContent) }} >Save</Button>
                    </Row>
                </Container>
            </>










        );
    }

    valueChanged(e) {
        this.setState({
            valueContent: e.value,
        });
    }

    valueTypeChanged(e) {
        this.setState({
            editorValueType: e.addedItems[0].text.toLowerCase(),
        });
    }

    prettierFormat(text) {
        if (this.state.editorValueType === 'html') {
            return prettier.format(text, {
                parser: 'html',
                plugins: [parserHtml],
            });
        }
        return text;
    }
    multilineChanged(e) {
        this.setState({
            isMultiline: e.value,
        });
    }

    currentTabChanged(e) {
        this.setState({
            currentTab: e.value,
        });
    }
}
export default AddTutorial