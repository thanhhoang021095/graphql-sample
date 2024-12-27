import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory, Link, } from "react-router";

import { querySongList } from "../graphql/queries/fetchSong"
import { createSong } from "../graphql/mutates/createSong";

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{
                query: querySongList,
            }]
        }).then(() => {
            hashHistory.push('/');
        });
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input
                        value={this.state.title}
                        onChange={(e) => this.setState({
                            title: e.target.value
                        })}
                        className="input"
                    />
                </form>
            </div>
        )
    }
}

export default graphql(createSong)(SongCreate)