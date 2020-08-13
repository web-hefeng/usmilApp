import React, { Component } from 'react'
import {connect} from "dva"
 class liapp extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
function mapState (state){
    return {
      users:state
    }
}
export default connect(mapState)(liapp);
