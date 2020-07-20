import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const SignInPopUp = ({ handleSignUpPopup, showModal ,items}) => (

  <Modal show={showModal} onHide={() => handleSignUpPopup(false)}  animation={false}>
     
    <Modal.Header closeButton>
      
        <Modal.Title >
      
          30 DAYS FREE TRIAL OF MINIFLIX
          <p>Hundreds of award-winning short films at your fingertips</p>
        </Modal.Title>
      :
        <Modal.Title>
          7 DAYS FREE TRIAL OF MINIFLIX
          <p>Hundreds of award-winning short films at your fingertips</p>
        </Modal.Title>
      
    </Modal.Header>
    <Modal.Body>
      
    </Modal.Body>
    <Modal.Footer>
      <Link
        className="comBtn"
        to={{ pathname: '/sign_up', query: { plan: 'monthly', isFromBattleship: true } }}
      >
        Start Free Trial
      </Link>
      <div className="sign-in-modal">
        <Link to="/sign_in">Already a member? Sign in</Link>
      </div>
    </Modal.Footer>
  </Modal>
   
);

SignInPopUp.defaultProps = {
  handleClose: () => false,
  showModal: false
};

SignInPopUp.propTypes = {
  handleSignUpPopup: PropTypes.func,
  showModal: PropTypes.bool
};

export default SignInPopUp;
