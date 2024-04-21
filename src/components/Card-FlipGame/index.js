import {Component} from 'react'

import Popup from 'reactjs-popup'

import {MdClose} from 'react-icons/md'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'

class CardFlipGame extends Component {
  state: {}

  render() {
    return (
      <div className="CardFlipMainContainer">
        <div className="EmojiHomeBack">
          <div className="EmojiBackIconContainer">
            <button
              className="BackButton"
              onClick={this.BackButtonClicked}
              type="button"
            >
              <img
                src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711193532/arrow-left_1_cqzsv4.png"
                className="BackIcon"
                alt="backIcon"
              />
              <p className="backpara white">Back</p>
            </button>
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button type="button" className="trigger-button">
                    Rules
                  </button>
                }
              >
                {close => (
                  <>
                    <div className="rpsRulesScrollContainer">
                      <div className="closeContainer">
                        <button
                          type="button"
                          className="closeButton"
                          onClick={() => close()}
                        >
                          {' '}
                          <MdClose />
                        </button>
                      </div>
                      <h1 className="rulesHeading blackcolor">Rules</h1>
                      <ul className="RpsUnorderedList">
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          When the game is started, the users should be able to
                          see the list of Cards that are shuffled and turned
                          face down.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          When a user starts the game, the user should be able
                          to see the Timer running.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          The Timer starts from 2 Minutes.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          If the two cards have the same image, they remain face
                          up. If not, they should be flipped face down again
                          after a short 2 seconds.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          Users should be able to compare only two cards at a
                          time.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          When the user is not able to find all the cards before
                          the timer ends then the game should end and redirect
                          to the Time Up Page.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          If the user finds all the matching cards before the
                          timer ends, then the user should be redirected to the
                          results page.
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </Popup>
            </div>
          </div>
        </div>
        <h1 className="MMGameHeading">Card-Flip Game</h1>
      </div>
    )
  }
}

export default CardFlipGame
