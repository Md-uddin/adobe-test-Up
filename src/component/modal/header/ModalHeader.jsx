import { Heading } from '@adobe/react-spectrum'
import React from 'react'
import { H3, HeaderText } from '../styles'

const ModalHeader = () => {
  return (
    <>
 
      <Heading maxWidth={'size-6000'} marginStart={{ S: 'size-400' }}>
        <H3>Add user to your team</H3>

        <HeaderText>You can add a new user below by entering their email address.</HeaderText>
      </Heading>
      </>
  )
}

export default ModalHeader