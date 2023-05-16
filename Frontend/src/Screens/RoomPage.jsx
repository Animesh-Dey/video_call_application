import React, { useEffect, useState } from 'react'
import { useSocket } from '../Context/SocketProvider'

const RoomPage = () => {
    const socket = useSocket();
    const [remoteSocketId, setRemoteSocketId] = useState(null)
    useEffect(() => {
        socket.on("user:joined", handleUserJoined)

        return () => { socket.off("userjoined", handleUserJoined) }
    }, [])

    const handleUserJoined = ({ email, id }) => {
        console.log(email, "=====", id)
    }



    return (
        <div>RoomPage</div>
    )
}

export default RoomPage