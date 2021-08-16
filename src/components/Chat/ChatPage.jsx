import { useState } from "react";
import { useEffect } from "react";
import defoultava from '../../assets/images/user.jpg'
const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const ChatPage = () => {
    return (
        <div>
            <Chat />

        </div>
    )
}
const Chat = () => {
    return (
        <div>
            <Massages />
            <AddMassageForm />
        </div>
    )
}
const Massages = () => {
    const [massages, setMassages] = useState([]);

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            setMassages((prevMassages) => [...prevMassages, ...JSON.parse(e.data)])
        })
    }, [])
    return (
        <div className="MassageItem">
            {massages.filter(m => m.userId === 18772 || m.userId === 18982).map((m, index) => {
                return <Massage key={index} massage={m} />
            })}
        </div>
    )
}

const Massage = ({ massage }, { key }) => {
    return (
        <div>
            {massage.photo ? <div><img src={massage.photo} className="Massage-avatar" /> <b>{massage.userName}</b> </div>
            : <div><img src={defoultava} className="Massage-avatar" /> <b>{massage.userName}</b> </div>
                
        }

            <hr />
            {massage.message}
            <hr />
        </div>
    )
}
const AddMassageForm = () => {
    const [massage, setMassages] = useState('');
    const sendMassage = () => {
        if (massage) {
            ws.send(massage)
            setMassages('');
        }

    }
    return (
        <div>
            <textarea onChange={(e) => setMassages(e.currentTarget.value)} value={massage}></textarea>
            <div>
                <button onClick={sendMassage}>Send</button>
            </div>
        </div>
    )
}



export default ChatPage