import React from 'react';
import {connect} from 'react-redux';
import {Editor, EditorState, RichUtils} from 'draft-js';

export class RichTextEditor extends React.Component {

    onChange = (editorState) => {
        console.log(editorState.getCurrentInlineStyle());
        this.setState({editorState});
    };

    constructor(props) {
        super(props);
        this.focus = () => this.refs.editor.focus();
        this.state = {editorState: EditorState.createEmpty()};
    };

    onBold(e) {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    };

    render() {
        return (
            <div>
                <div className="button" onClick={this.onBold.bind(this)}>Bold</div>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    ref="editor"
                />
            </div>
        );
    }
}

export const mapStateToProps = (state) => ({
    ...state.app,
    editorState: EditorState.createEmpty()
});
export default connect(mapStateToProps)(RichTextEditor);
