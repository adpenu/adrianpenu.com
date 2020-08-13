import React from "react";

import Layout from "../components/Layout";

export default class SuccessPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='p-strip is-deep'>
          <div className='row u-vertically-center'>
            <div
              className='col-3 u-align-center--large'
              style={{ position: "relative" }}>
              <i className='p-icon--big-smile is-animated'>Success</i>
              <span className='shadow'></span>
            </div>
            <div className='col-6'>
              <h1 className='p-heading--3'>Thank you for your order!</h1>
              <p>
                I received your order and will contact you as soon as your
                package is shipped.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
