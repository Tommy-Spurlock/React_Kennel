import React, { Component } from 'react'
import person from './OwnerIcon.png'
import "./Owner.css"
import { Link } from "react-router-dom";


export default class OwnerList extends Component {
    render () {
        return (
            <React.Fragment>
            <div className="ownerButton">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/owners/new")}
                    }>
                New Owner
            </button>
        </div>
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={person} className="icon--owner" />
                                {owner.name}
                                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>

                                <a href="#"
                                    onClick={() => this.props.deleteowner(owner.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}