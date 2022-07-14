import React from "react";

const Widgets = () => {
  return (
    <div className="widget">
      <iframe
        src="https://mail.google.com/mail/u/0/?ogbl#inbox"
        title="dev"
        width="400"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widgets;
