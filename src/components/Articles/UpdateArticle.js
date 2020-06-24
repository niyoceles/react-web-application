import React, { Component, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Upload from '../../helpers/upload/Upload';
import Button from 'react-bootstrap/Button';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline';
// import editorConfigs from '../../helpers/ckEditorConfig';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateArticle } from '../../redux/actions';

class UpdateArticle extends Component {
  state = {
    title: this.props.articleName,
    category: this.props.category,
    file: this.props.contentFile,
    text: this.props.contentText,
    selectedFile: this.props.contentFile,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
    console.log(event.target.files[0]);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, category, text, selectedFile } = this.state;

    const articleData = {
      id:this.props.articleId,
      title,
      category,
      file: selectedFile,
      text,
    };
    this.props.addArticle(articleData, this.props.history);
  };

  render() {
    const { file, category, title, text, selectedFile } = this.state;
    // if (selectedFile) {
    //   if (selectedFile.type.startsWith('image')) {
    //     console.log('Image file');
    //   }
    // }
    return (
      <Fragment>
      <Button variant="primary" onClick={this.handleOpen} className="pull-left">
        Edit
      </Button>
       <Modal show={this.state.open} onHide={this.handleClose} size="lg">
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Update an article
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>    
        <form onSubmit={this.handleSubmit}>
        <div className='container'>
        <Upload uploadedFile={this.props.contentFile} />
      </div>
      <div style={{ paddingBottom: 15 }}>
        <h5>Choose category of content</h5>
        <select
          className='browser-default custom-select'
          name='category'
          value={category}
          onChange={this.handleChange}>
          <option value={category}>{category}</option>
          <option value='1adee4dc94b447a5949feaa6cc7d277e'>
            Written article
          </option>
          <option value='2'>Video</option>
          <option value='3'>Audio</option>
        </select>
      </div>

      <div className='articleCreationSD'>
        <div className='textContent' style={{ paddingTop: 20 }}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Article title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as='textarea'
              name='title'
              value={title}
              onChange={this.handleChange}
              aria-label='With textarea'
            />
          </InputGroup>
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.setState({ text: data });
            }}
            // config={editorConfigs}
          />
        </div>
      </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <Button color="secondary" onClick={this.handleClose}>Close</Button>
        <Button color="primary" onClick={this.handleSubmit}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
    );
  }
}

UpdateArticle.propTypes = {
  updateArticle: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI,
});

const mapActionToProps = {
  updateArticle,
};

export default connect(mapStateToProps, mapActionToProps)(UpdateArticle);
