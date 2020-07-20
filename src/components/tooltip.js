import React from 'react'

import { connect } from 'react-redux'

class ToolTip extends React.Component {
    render() {
        return (
            <div>
              

                  <Tippy content="tooltip">
                  <button>Details</button>
                  </Tippy>
          
            </div>
        )
    }
}

cons
export default connect()(ToolTip)

