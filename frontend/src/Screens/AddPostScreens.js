import React from 'react'

import Card from '../Components/Card/card';
import Sidebar from '../Components/Sidebar/sidebar';
import FooterBlog from '../Components/FooterBlog/FooterBlog';
import Sidenav from '../Components/SideNav/sidenav';
import CKEditor from "react-ckeditor-component";

class addpost extends React.Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  
  render() {
    return (
      <div className="content">
        <Sidenav />
        <div className="container">
        <p className="App-intro">{this.state.apiResponse}</p>
          <h2 className="my-4" align="center">
            เขียนบทความ
          </h2>
          <form action="/post/add" method="post">
            <div className="form-group">
              <label htmlFor>หัวข้อ</label>
              <input
                type="text"
                name="title"
                defaultValue
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor>หมวดหมู่</label>
              <select className="form-control" name="category">
                <option value />
              </select>
            </div>

            <div className="form-group">
              <label htmlFor>เนื้อหา</label>
                <CKEditor activeClass="editor"  />
            </div>
            

            <div className="form-group">
              <label htmlFor>ภาพปก</label>
              <input
                type="text"
                name="img"
                defaultValue
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor>ผู้เขียน</label>
              <input
                type="text"
                name="author"
                defaultValue
                className="form-control"
              />
            </div>
           
            <input
              type="submit"
              name
              defaultValue="บันทึกข้อมูล"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default addpost;
