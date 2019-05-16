import React, { Component } from 'react'
import Auth from '@aws-amplify/auth'
import * as api from '../api'

export default class Leaderboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    async componentDidMount() {
        const userSession = await Auth.currentSession()
        let leaderboardData = await apis.fetchOverallLeaderboard(userSession, 'nfl', 2018, 'post', 21)
        console.log('leaderboardData: ', leaderboardData)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
