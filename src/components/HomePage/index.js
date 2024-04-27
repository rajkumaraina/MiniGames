import {Link} from 'react-router-dom'

import './index.css'

const HomePage = () => (
  <div className="HomePageMainContainer">
    <h1 className="HomeHeading">Games</h1>
    <ul className="HomePageGamesUnorderedList">
      <Link to="/emoji-game" className="HomePageLinkElement">
        <li className="HomePageListItem">
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711016435/Asset_1_4x_1_zy1lyd.jpg"
            className="HomePageGameImages"
            alt="emoji game"
          />
          <p className="GameName">Emoji Game</p>
        </li>
      </Link>
      <Link to="/memory-matrix" className="HomePageLinkElement">
        <li className="HomePageListItem">
          <p className="GameName">Memory Matrix</p>
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711017068/memory_a6otgz.jpg"
            alt="memory matrix"
            className="HomePageGameImages"
          />
        </li>
      </Link>
      <Link to="/rock-paper-scissor" className="HomePageLinkElement">
        <li className="HomePageListItem">
          <p className="GameName">Rock Paper Scissor</p>
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711017289/Group_7469_nuoowd.jpg"
            alt="rock paper scissor"
            className="HomePageGameImages"
          />
        </li>
      </Link>
      <Link to="/card-flip-memory-game" className="HomePageLinkElement">
        <li className="HomePageListItem">
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711017354/animals_xqlxwn.jpg"
            alt="card flip memory game"
            className="LastGame"
          />
        </li>
      </Link>
    </ul>
  </div>
)

export default HomePage
