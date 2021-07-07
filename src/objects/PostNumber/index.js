
import React from 'react'
import StyledNumberTitle from './styles'

const PostNumber = (props) => {
    return (
        <div><StyledNumberTitle>{props.children}</StyledNumberTitle></div>
    )
}

export default PostNumber

