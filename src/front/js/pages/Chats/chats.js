import React from "react";
import "./chats.css";

const listChats = [
    {
        id : 1,
        client_1_id: 1,
        client_2_id: 2,
    },

    {
        id : 2,
        client_1_id: 2,
        client_2_id: 3,
    },

    {
        id : 3,
        client_1_id: 3,
        client_2_id: 4,
    }
]

const chatContent = [
    {
        id : 1,
        chat_id: 1,
        client_id: 2,
        date: "2020-05-12T23:51:21.817Z",
        content: "holaaaaaa"
    },

    {
        id : 2,
        chat_id: 1,
        client_id: 1,
        date: "2020-05-12T23:52:21.817Z",
        content: "holaaaaaa"
    },

    {
        id : 3,
        chat_id: 1,
        client_id: 2,
        date: "2020-05-12T23:53:21.817Z",
        content: "holaaaaaa"
    }
]

export const Chats = () => {
    return(
        <section style={{backgroundColor: "#eee"}}>
            <div className="container py-5" >
                <div className="row">

                    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">

                        <h5 className="font-weight-bold mb-3 text-center text-lg-start" id="contenedor">Member</h5>

                        <div className="card">
                            <div className="card-body">

                                <ul className="list-unstyled mb-0">
                                    {
                                        listChats.map(chat => (
                                            <li className="p-2 border-bottom" style={{backgroundColor: "#eee"}}>
                                                <a href="#!" className="d-flex justify-content-between">
                                                <div className="d-flex flex-row">
                                                    <div className="pt-1">
                                                    <p className="fw-bold mb-0">{chat.client_1_id}</p>
                                                    <p className="small text-muted">Hello, Are you there?</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-muted mb-1">Just now</p>
                                                    <span className="badge bg-danger float-end">1</span>
                                                </div>
                                                </a>
                                            </li> 
                                        ))
                                    }
                                
                                </ul>

                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 col-lg-7 col-xl-8">

                        <ul className="list-unstyled d-flex flex-column" id="contenDos">
                            {
                                chatContent.sort((a, b) => new Date(a.date) - new Date(b.date)).map(msg =>{
                                    if(msg.client_id === 1){
                                        return (
                                        <li className="d-flex justify-content-between mb-4 align-self-end">
                                            <div className="card">
                                                <div className="card-header d-flex justify-content-between p-3">
                                                    <p className="fw-bold mb-0">{msg.client_id}</p>
                                                    <p className="text-muted small mb-0"><i className="far fa-clock"></i>{msg.date}</p>
                                                </div>
                                                <div className="card-body">
                                                    <p className="mb-0">
                                                    {msg.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>)
                                } else{
                                    return (
                                        <li className="d-flex justify-content-between mb-4">
                                            <div className="card ">
                                                <div className="card-header d-flex justify-content-between p-3">
                                                    <p className="fw-bold mb-0">{msg.client_id}</p>
                                                    <p className="text-muted small mb-0"><i className="far fa-clock"></i> {msg.date}</p>
                                                </div>
                                                <div className="card-body">
                                                    <p className="mb-0">
                                                    {msg.content}
                                                    </p>
                                                </div>
                                            </div>

                                        </li>
                                    )
                                }
                            } )
                            }
                            <li className="bg-white mb-3">
                                <div className="form-outline">
                                <textarea className="form-control" id="textAreaExample2" rows="4"></textarea> 
                                </div>
                            </li>   
                        </ul>
                        <button type="button" className="btn btn-info btn-rounded float-end">Send</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

