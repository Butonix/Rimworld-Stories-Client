import React from 'react';
import {connect} from 'react-redux';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

export class RichTextEditor extends React.Component {

    onChange = (editorState) => {
        console.log(convertToRaw(this.state.editorState.getCurrentContent()));
        this.setState({editorState});
    };

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.focus = () => this.refs.editor.focus();
    };

    onBold(e) {
        this.focus();
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    };

    render() {
        return (
            <div>
                <div className="button" onClick={this.onBold.bind(this)}>Bold</div>
                <div onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        ref="editor"
                    />
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => ({
    ...state.app
});
export default connect(mapStateToProps)(RichTextEditor);
