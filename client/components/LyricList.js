import React, { Component } from "react";
import { graphql } from "react-apollo";

import { likeLyric } from "../graphql/mutates/likeLyric";

class LyricList extends Component {
    onLike(id, likes) {
        this.props.mutate({
            variables: {
                id,
            },
            optimisticResponse: {
                __typename: "Mutation",
                likeLyric: {
                    __typename: "LyricType",
                    id,
                    likes: likes + 1
                }
            }
        })
    }

    render() {
        const { lyricList = [] } = this.props;

        return (
            <div>
                <ul className="collection">
                    {lyricList.map(({ id, content, likes }) => (
                        <li
                            className="collection-item"
                            key={id}
                            onClick={() => {
                                this.onLike(id, likes)
                            }}
                        >
                            {content}
                            <span style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10
                            }}>
                                <i className={`material-icons`}>thumb_up</i> {likes}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default graphql(likeLyric)(LyricList);