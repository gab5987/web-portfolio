import React, { Component } from "react";
import { Icon } from "@iconify/react";

class Contact extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
        var email = this.props.sharedBasicInfo.email;
    }
    if (this.props.resumeBasicInfo) {
        var sectionName = this.props.resumeBasicInfo.section_name.contact;
        var contact1 = this.props.resumeBasicInfo.contact1;
        var contact2 = this.props.resumeBasicInfo.contact2;
        var mailMe = this.props.resumeBasicInfo.mailMe;
      }
  
      return (
        <section id="about">
          <div className="col-md-12">
            <h1 style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            <br /> <br /> <br />
            <div className="row center mx-auto mb-5">
  
              <div className="col-md-8 center">
                <div className="col-md-10">
                  <div className="card">
                    <div
                      className="card-body font-trebuchet text-justify ml-3 mr-3"
                      style={{
                        height: "auto",
                        fontSize: "175%",
                        lineHeight: "200%",
                      }}
                      >{contact1} <br /> {contact2} <br />
                      <button onClick={() => window.location.href = `mailto:${email}`}>{mailMe}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
}

export default Contact;
