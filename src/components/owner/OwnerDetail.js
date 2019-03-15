import React, { Component } from "react"
import "./Owner.css"
import person from "./OwnerIcon.png"


export default class ownerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the owner that the
            user clicked on by looking at the `this.props.owners`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owners">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={person} className="icon--owner" />
                            {owner.name}
                        </h4>
                        <h6 className="card-title"></h6>
                        <a href="#"
                            onClick={() => this.props.deleteOwner(owner.id)
                                            .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}