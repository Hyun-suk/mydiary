import React, { Component } from 'react';

class AddPost extends Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <br styles='clear:both'/>
            <div>
              <input type='text' id='title' name='title' placeholder='Title' required/>
            </div>
            <div>
              <textarea type='textarea' id='subject' placeholder='Subject' maxlength='140' row='7'></textarea>
            </div>
            <button type='button' id='submit' name='submit'>Add Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPost;
