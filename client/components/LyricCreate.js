import React, { Component } from "react";
import { graphql } from "react-apollo";

import { createLyric } from "../graphql/mutates/createLyric";
import { querySongDetail } from "../graphql/queries/fetchSong";

class LyricCreate extends Component {
    constructor() {
        super();

        this.state = {
            content: ''
        }
    }

    onChangeLyric(e) {
        this.setState({
            content: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        }).then(() => {
            this.setState({
                content: ''
            })
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a lyric</label>
                <input
                    value={this.state.content}
                    onChange={this.onChangeLyric.bind(this)}
                />
            </form>
        )
    }
}

export default graphql(createLyric)(LyricCreate);