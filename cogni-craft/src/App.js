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
import { useContext, useState } from 'react'
import { Context } from './context/context'

function App() {

  const [mode, setMode] = useState('dark');

  const { prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat } = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  const toggelMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className={`App ${mode}`}>
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={cogniCraftLogo} alt="cogniCraftLogo" className="logo" /> <span className="brand">CogniCraft</span>
          </div>
          <button className="midBtn" onClick={() => newChat()}><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            {prevPrompts.slice().reverse().map((item, index) => {
              return (
                <button key={index} className="query" onClick={() => loadPrompt(item)}><img src={messageIcon} alt="" />{item.slice(0, 18)}</button>
              )
            })}
          </div>

        </div>
        <div className='lowerSide'>
          <div className="listItems"><img src={homeIcon} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={bookmarkIcon} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={upgrade2Pro} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>
      <div className='main'>

        <div className="btn" onClick={toggelMode}>
          {mode === 'dark'
            ? <p>Dart</p>
            : <p>Light</p>}
        </div>

        {!showResult
          ? <>
            <div className="chats">
            </div>
          </>
          : <div className='result'>
            <div className="resultTitle">
              <img src={userIcon} alt="" className='resultImg' />
              <p className="txt">{recentPrompt}</p>
            </div>
            <div className="resultTitle data">
              <img src={cogniCraftLogo} alt="" className='chatLogo' />
              {loading
                ? <div className='loader'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>

                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }} className="txt"></p>
              }
            </div>
          </div>

        }

        <div className="chatFooter">
          <div className="input">
            <input type="text" placeholder='Send a message...' onChange={(e) => setInput(e.target.value)} value={input} />
            <button className="send" onClick={() => onSent()}><img src={sendIcon} alt="send" /></button>
          </div>
          <p>CogniCraft may produce inaccurate information about people, places, or facts. CogniCraft June 20 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;


