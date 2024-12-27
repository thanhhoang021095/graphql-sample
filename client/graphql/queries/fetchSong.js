import gql from 'graphql-tag';

export const querySongList = gql`
{
    songs {
        title
        id
    }
}
`;

export const querySongDetail = gql`
    query SongQuery($id: ID!) {
        song(id: $id) {
            title
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;