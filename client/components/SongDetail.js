import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import { querySongDetail } from "../graphql/queries/fetchSong";
import Loading from "./Loading";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
    render() {
        const { data: { loading = false, song } } = this.props;

        if (loading) return <Loading />

        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyricList={song.lyrics} />
                <LyricCreate songId={this.props.params.id} />
            </div>
        )
    }
}


export default graphql(querySongDetail, {
    options: (props) => ({
        variables: {
            id: props.params.id
        }
    })
})(SongDetail);