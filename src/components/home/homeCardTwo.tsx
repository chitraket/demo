import {View, Text, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {colors, fonts, metrics} from '../../theme';
import {CTButton, CTIconImageText, CTVIcons} from '../common';
import {wp} from '../../utils';
import HomeModal from './homeModal';

const HomeCardTwo = () => {
  const [modal,setModal] = useState(false)
  return (
    <React.Fragment>
      <View style={styles.homeCardTwo}>
        <View style={styles.homeCardTwoView}>
          <CTIconImageText
            iconTextView={styles.homeCardTwoIconTextView}
            labelPlacement="bottom"
            primaryText="PRIZE POOL"
            secondaryText="$12,000"
            primaryTextStyle={styles.homeCardTwoPrimaryTextStyle}
            secondaryTextStyle={styles.homeCardTwoSecondaryTextStyle}
          />
          <CTIconImageText
            iconTextView={styles.homeCardTwoIconTextView}
            labelPlacement="bottom"
            primaryText="UNDER"
            secondaryText="3.25x"
            primaryTextStyle={styles.homeCardTwoPrimaryTextStyle}
            secondaryTextStyle={styles.homeCardTwoSecondaryTextStyle}
          />
          <CTIconImageText
            iconTextView={styles.homeCardTwoIconTextView}
            labelPlacement="bottom"
            primaryText="OVER"
            secondaryText="1.25x"
            primaryTextStyle={styles.homeCardTwoPrimaryTextStyle}
            secondaryTextStyle={styles.homeCardTwoSecondaryTextStyle}
          />
          <CTIconImageText
            iconTextView={styles.homeCardTwoIconTextView}
            labelPlacement="bottom"
            primaryText="ENTRY FEES"
            secondaryText="5"
            primaryTextStyle={styles.homeCardTwoPrimaryTextStyle}
            secondaryTextStyle={styles.homeCardTwoSecondaryTextStyle}
          />
        </View>
        <Text style={styles.homeCardTwoText}>What’s your prediction?</Text>
        <View style={styles.homeCardTwoButtonView}>
          <CTButton
            btnText="Under"
            btnStyle={{
              ...styles.homeCardTwoButtonStyle,
              backgroundColor: colors.primary400,
            }}
            onPress={() => ''}
            startIcon={<CTVIcons color={colors.white}  iconType='Entypo' name="arrow-down"/>}
          />
          <CTButton
            btnText="Over"
            btnStyle={{...styles.homeCardTwoButtonStyle}}
            onPress={() => setModal(true)}
            startIcon={<CTVIcons color={colors.white}  iconType='Entypo' name="arrow-bold-up"/>}
          />
        </View>
      </View>
      <HomeModal isVisible={modal}/>
    </React.Fragment>
  );
};

export default HomeCardTwo;

const styles = StyleSheet.create({
  homeCardTwo: {
    ...metrics.paddings.p10,
  },
  homeCardTwoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...metrics.paddings.pB8,
  },
  homeCardTwoIconTextView: {
    alignItems: 'flex-start',
  },
  homeCardTwoPrimaryTextStyle: {
    ...fonts.fontStyle.captionLRText,
    color: colors.grey800,
  },
  homeCardTwoSecondaryTextStyle: {
    ...fonts.fontStyle.p2LSBText,
    color: colors.black,
    ...metrics.paddings.pT5,
    textAlign: 'center',
  },
  homeCardTwoText: {
    ...fonts.fontStyle.p2LSBText,
    color: colors.grey700,
    ...metrics.paddings.pT10,
    ...metrics.paddings.pB8,
  },
  homeCardTwoButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeCardTwoButtonStyle: {
    width: wp(40),
  },
});
