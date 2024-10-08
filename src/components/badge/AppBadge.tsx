import {View, Text} from 'react-native';
import React from 'react';
import {CustomText} from '../texts/AppCustomText';
import {styles} from '../../assets/css/style';
import {colors} from '../../assets/css/colors';

export default function AppBadge({color, text}) {
  return (
    <View
      style={[
        styles.ph10,
        styles.pv5,
        styles.br30,
        styles.mr5,
        {backgroundColor: color},
      ]}>
      <CustomText style={[styles.ffm, styles.fs12, {color: colors.white}]}>
        {text}
      </CustomText>
    </View>
  );
}
