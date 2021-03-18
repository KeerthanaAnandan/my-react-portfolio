import React from "react";
import Mailchimp from "react-mailchimp-form";
import "./Form.css";

function Form() {
  let myname =
    "https://gmail.us2.list-manage.com/subscribe/post?u=8cfeead897caf7f38d5c8bdba&amp;id=f09370a500";
  return (
    <div className="form-wrap" id="contact">
      <div className="form"  data-aos="flip-up"
    data-aos-offset="200"
    data-aos-delay="300"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
        <h1>Contact</h1>
        <h5 className="text-center">Have a question or want to work together?</h5>
        <Mailchimp
          className="form-area text-center"
          action={myname}
          fields={[
            {
              name: "NAME",
              placeholder: "Name",
              type: "text",
              required: true,
              className: "name",
            },
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
              className: "mail",
            },
            {
              name: "MMERGE3",
              placeholder: "Enter message",
              type: "text",
              required: false,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Form;
