import React, { PropTypes } from 'react'

const Puke = (props) => {
  return (
    <pre style={{whiteSpace: 'pre-wrap', margin: '10px'}}>
      {JSON.stringify(props.data, null, '  ')}
    </pre>
  )
}

Puke.propTypes = {
  data: PropTypes.object.isRequired
}

export default Puke
