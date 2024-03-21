import './index.css'

const WinNavbarItem = () => (
  <div className="navbarContainer">
    <div className="insideNavBarContainer">
      <div className="navbarInsideContainer">
        <img
          src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711020459/wink_1_lnyiyp.png"
          alt="emoji logo"
          className="logoImg"
        />
        <h1 className="emojiLogoPara">Emoji Game</h1>
      </div>
    </div>
  </div>
)

const LooseNavbarItem = props => {
  const {scoreBoard} = props
  const {SCORE, TOPSCORE} = scoreBoard
  return (
    <div className="navbarContainer">
      <div className="insideNavBarContainer">
        <div className="navbarInsideContainer">
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711020459/wink_1_lnyiyp.png"
            alt="emoji logo"
            className="logoImg"
          />
          <h1 className="emojiLogoPara">Emoji Game</h1>
        </div>
        <div className="navbarInsideContainer">
          <p className="EmojiNavbarPara">Score: {SCORE}</p>
          <p className="EmojiNavbarPara">Top Score: {TOPSCORE}</p>
        </div>
      </div>
    </div>
  )
}

export {WinNavbarItem, LooseNavbarItem}
