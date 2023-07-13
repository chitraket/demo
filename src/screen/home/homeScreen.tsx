import { Text } from 'react-native'
import React from 'react'
import { CTWrapperContainer } from '../../components/common'
import { HomeCard } from '../../components/home'
import { styles } from './style'

const HomeScreen = () => {
  return (
    <CTWrapperContainer>
      <React.Fragment>
        <Text style={styles.title}>Today’s Games</Text>
        <HomeCard/>
      </React.Fragment>
    </CTWrapperContainer>
  )
}

export default HomeScreen