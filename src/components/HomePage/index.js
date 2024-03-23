import {Link} from 'react-router-dom'

import './index.css'

const HomePage = () => (
  <div className="HomePageMainContainer">
    <h1 className="HomeHeading">Games</h1>
    <ul className="HomePageGamesUnorderedList">
      <Link to="/EmojiRules" className="HomePageLinkElement">
        <li className="HomePageListItem">
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711016435/Asset_1_4x_1_zy1lyd.jpg"
            className="HomePageGameImages"
            alt="EmojiGame"
          />
          <p className="GameName">Emoji Game</p>
        </li>
      </Link>
      <Link to="/MemoryMatrixRules" className="HomePageLinkElement">
        <li className="HomePageListItem">
          <p className="GameName">Memory Matrix</p>
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711017068/memory_a6otgz.jpg"
            alt="Memory Matrix Game"
            className="HomePageGameImages"
          />
        </li>
      </Link>
      <Link to="/RockPaperScissorRules" className="HomePageLinkElement">
        <li className="HomePageListItem">
          <p className="GameName">Rock Paper Scissor</p>
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711017289/Group_7469_nuoowd.jpg"
            alt="Rock Paper Scissor Game"
            className="HomePageGameImages"
          />
        </li>
      </Link>
      <Link to="/CardFlipRules" className="HomePageLinkElement">
        <li className="HomePageListItem">
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711017354/animals_xqlxwn.jpg"
            alt="Card Flip Game"
            className="LastGame"
          />
        </li>
      </Link>
    </ul>
  </div>
)

export default HomePage
