import React from 'react';
import PropTypes from 'prop-types';
import BalanceCardsContainer from '../Containers/BalanceCardsContainer/BalanceCardsContainer';
import Layout from '../Containers/Layout/Layout';
import EditName from '../Components/EditName/EditName';
import styles from "../Components/EditName/EditName.module.css";


function NameEditing(props) {
  return <div>
  <Layout>
        <div className="MainBgContainer">
          <div className="header">
            <h1>Welcome back</h1>

            <div className="d-flex flex-row justify-content-center">
              <div className="mx-2">
                <EditName name="Tony" buttonText="Save" direction={styles.left} />
              </div>
              <div className="mx-2">
                <EditName name="Jarvis" buttonText="Cancel" direction={styles.right} />
              </div>
            </div>
          </div>

          <BalanceCardsContainer />
        </div>
      </Layout>

  </div>;
}

NameEditing.propTypes = {};

export default NameEditing;
