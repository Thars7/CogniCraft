import './App.css';
import cogniCraftLogo from './assets/logo.png'
import addBtn from './assets/add-30.png'
import messageIcon from './assets/message.svg'
import homeIcon from './assets/home.svg'
import bookmarkIcon from './assets/bookmark.svg'
import upgrade2Pro from './assets/rocket.svg'
import sendIcon from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import logoText from './assets/logoText.png'

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={cogniCraftLogo} alt="cogniCraftLogo" className="logo" /> <span className="brand">CogniCraft</span>
          </div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={messageIcon} alt="" />What is Software Engineering?</button>
            <button className="query"><img src={messageIcon} alt="" />Tips for presentation?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className="listItems"><img src={homeIcon} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={bookmarkIcon} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={upgrade2Pro} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>
      <div className='main'>
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" />
            <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam voluptas voluptatem rerum ipsam cum natus nesciunt alias fugiat tenetur.</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={logoText} alt="" />
            <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in ipsa earum harum cupiditate beatae at aliquid repellat sequi porro maiores, blanditiis ab perferendis aperiam, quam sapiente magni nemo molestias perspiciatis voluptatem fugiat, obcaecati labore aut quisquam. Tenetur, minima? Aliquam quo quasi maiores eaque omnis velit fugiat dolores cumque fuga suscipit alias dolorem nobis nemo, esse repellendus consequuntur sapiente rem, ipsam unde! Esse ut quibusdam quidem, ea, fugit et dicta officia vitae, natus numquam quod tenetur quia. Distinctio ea dolorum laudantium aspernatur asperiores, saepe a unde et velit commodi, consequuntur, autem recusandae. Rem, laborum. Esse beatae enim fuga quia delectus.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="input">
            <input type="text" placeholder='Send a message...'/>
            <button className="send"><img src={sendIcon} alt="send" /></button>
          </div>
          <p>CogniCraft may produce inaccurate information about people, places, or facts. CogniCraft June 20 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
