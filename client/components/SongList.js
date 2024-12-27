import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory, Link } from "react-router";

import { querySongList } from "../graphql/queries/fetchSong";
import { deleteSong } from "../graphql/mutates/deleteSong";
import Loading from "./Loading";

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({
            variables: {
                id,
            }
        }).then(() => {
            this.props.data.refetch();
        })
    }

    onNavigateSong(id) {
        hashHistory.push(`/song/${id}`);
    }

    render() {
        const { data: { loading = false, songs = [] } } = this.props;

        if (loading) return <Loading />;

        return (
            <div>
                <ul
                    className="collection">
                    {songs.map(({ title, id }) => (
                        <li key={id} className="collection-item" onClick={() => this.onNavigateSong(id)}>
                            <span>{title}</span>
                            <button
                                className="btn-flat waves-effect waves-light btn-small"
                                onClick={(e) => {
                                    this.onSongDelete(id)
                                }}
                            >
                                <i className="material-icons">delete</i>
                            </button>
                        </li>
                    ))}
                </ul>
                <Link to="/new/song" className="btn-floating btn-large red light">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

export default graphql(deleteSong)(graphql(querySongList)(SongList));