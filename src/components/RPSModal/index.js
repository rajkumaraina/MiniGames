import React, {useState} from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'

/*
<li className="rule-item-popup">
            The game result should be based on user and user opponent choices
          </li>
          <li className="rule-item-popup">
            When the user choice is rock and his opponent choice is rock then
            the result will be <span className="span-item">IT IS DRAW</span>
          </li>
          <li className="rule-item-popup">
            When the user choice is paper and his opponent choice is paper then
            the result will be <span className="span-item">IT IS DRAW</span>
          </li>
          <li className="rule-item-popup">
            When the user choice is scissors and his opponent choice is scissors
            then the result will be{' '}
            <span className="span-item-popup">IT IS DRAW</span>
          </li>
          <li className="rule-item-popup">
            When the user choice is paper and his opponent choice is rock then
            the result will be <span className="span-item">YOU WON</span>
          </li>
          <li className="rule-item-popup">
            When the user choice is scissors and his opponent choice is paper
            then the result will be <span className="span-item">YOU WON</span>
          </li>
          <li className="rule-item-popup">
            When the user choice is rock and his opponent choice is scissors
            then the result will be <span className="span-item">YOU WON</span>
          </li>
          <li className="rule-item-popup">
            When the user choice is a scissors and his opponent choice is rock
            then the result will be <span className="span-item">YOU LOSE</span>
          </li>
          <li className="rule-item-popup">
            When the user choice is a paper and his opponent choice is scissors
            then the result will be <span className="span-item">YOU LOSE</span>
          </li>
          <li className="rule-item-popup">
            When the user choice is a rock and his opponent choice is paper then
            the result will be <span className="span-item">YOU LOSE</span>
          </li>
          <li className="rule-item-popup">
            When the result is <span className="span-item">YOU WON</span>, then
            the count of the score should be incremented by 1
          </li>
          <li className="rule-item-popup">
            When the result is <span className="span-item">YOU LOSE</span>, then
            the count of the score should be decremented by 1.
          </li>
*/

const RulesPopUp = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button
        type="button"
        className="trigger-button"
        onClick={() => setModalIsOpen(true)}
      >
        RULES
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Game Rules"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="closeButtonFlexContainer">
          <button
            type="button"
            data-testid="close"
            className="cross-icon"
            onClick={closeModal}
          >
            <CgClose />
          </button>
        </div>
        <h1 className="rules-heading-popup">Rules</h1>
        <ul className="rules-list-popup">
          <li className="RpsListItem">
            The game result should be based on user and user opponent choices
          </li>
          <li className="RpsListItem">
            When the user choice is rock and his opponent choice is rock then
            the result will be IT IS DRAW
          </li>
          <li className="RpsListItem">
            When the user choice is paper and his opponent choice is rock then
            the result will be YOU WON
          </li>
          <li className="RpsListItem">
            When the user choice is a scissor and his opponent choice is rock
            then the result will be YOU LOSE
          </li>
          <li className="RpsListItem">
            When the user choice is paper and his opponent choice is paper then
            the result will be IT IS DRAW
          </li>
          <li className="RpsListItem">
            When the user choice is scissors and his opponent choice is paper
            then the result will be YOU WON
          </li>
          <li className="RpsListItem">
            When the user choice is rock and his opponent choice is scissors
            then the result will be YOU WON
          </li>
          <li className="RpsListItem">
            When the user choice is paper and his opponent choice is scissors
            then the result will be YOU LOSE
          </li>
          <li className="RpsListItem">
            When the user choice is scissors and his opponent choice is scissors
            then the result will be IT IS DRAW
          </li>
          <li className="RpsListItem">
            When the result is YOU WON, then the count of the score should be
            incremented by 1
          </li>
          <li className="RpsListItem">
            When the result is IT IS DRAW, then the count of the score should be
            the same
          </li>
          <li className="RpsListItem">
            When the result is YOU LOSE, then the count of the score should be
            decremented by 1.
          </li>
        </ul>
      </Modal>
    </div>
  )
}

export default RulesPopUp
