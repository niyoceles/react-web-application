import React, { Component, Fragment } from 'react';
import { MDBCol, MDBInput, MDBBtn,MDBContainer,MDBRow, MDBModal, MDBModalBody, 
  MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline';
import editorConfigs from '../../helpers/ckEditorConfig';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateArticle } from '../../redux/actions';

class UpdateArticle extends Component {
  state = {
    title: '',
    category: '',
    file: '',
    text: '',
    selectedFile: null,
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
      title,
      category,
      file: selectedFile,
      text,
    };
    this.props.addArticle(articleData);
  };

  render() {
    const { file, category, title, text, selectedFile, fileImg } = this.state;
    if (selectedFile) {
      if (selectedFile.type.startsWith('image')) {
        console.log('Image file');
      }
    }
    return (
      <Fragment>
      <MDBBtn rounded outline size="sm" onClick={this.handleOpen}><MDBIcon icon="edit" className="indigo-text pr-3" /></MDBBtn>
       <MDBModal isOpen={this.state.open} toggle={this.handleClose} size="lg">
       <MDBModalHeader toggle={this.handleClose}>Are you sure you want to delete this star?</MDBModalHeader>
        <MDBModalBody>
         <MDBRow>
        <form onSubmit={this.handleSubmit}>
          <p className='h4 text-center mb-8'>Update an article</p>
          <div className='grey-text'>
            <div style={{ paddingBottom: 15 }}>
            <h5>Choose category of content</h5>
              <select
                className='browser-default custom-select'
                name='category'
                value={category}
                onChange={this.handleChange}
              >
                <option>Choose your category</option>
                <option value='1'>Written article</option>
                <option value='2'>Video</option>
                <option value='3'>Audio</option>
              </select>
            </div>
            
            <MDBInput
              id='title'
              name='title'
              label='Type title of an article'
              icon='blog'
              group
              type='text'
              validate
              error='wrong'
              success='right'
              value={title}
              onChange={this.handleChange}
              required
            />

            <div className='input-group' style={{paddingBottom:20}}>
              <div className='input-group-prepend'>
                <span className='input-group-text' id='inputGroupFileAddon01'>
                  Upload file
                </span>
                <span className='input-group-text' id='inputGroupFileAddon01'>
                <input type="file" name="file" onChange={this.onChangeHandler}/>
              </span>
              </div>
            </div>
            <br/>
            <div className="textContent" style={{paddingTop:20}}>
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
      </MDBRow>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={this.handleClose}>Close</MDBBtn>
        <MDBBtn color="primary" onClick={this.handleSubmit}>Save changes</MDBBtn>
      </MDBModalFooter>
     </MDBModal>
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
