import gql from 'graphql-tag';

export const createLyric = gql`
    mutation AddLyricToSong($content: String, $songId: ID!) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;