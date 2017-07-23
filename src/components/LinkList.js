import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Link from './Link'

const ALL_LINKS_QUERY = gql`
    query AllLinksQuery {
        allLinks {
            id
            url
            description
        }
    }
`

class LinkList extends Component {
    render() {
        const linksToRender = [
            {
                id: '1',
                description: 'The Coolest GraphQL Backend 😎',
                url: 'https://www.graph.cool'
            },
            {
                id: '2',
                description: 'The Best GraphQL Client',
                url: 'http://dev.apollodata.com/'
            }
        ]
        return (
            <div>
                {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
        )
    }
}

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(LinkList)
