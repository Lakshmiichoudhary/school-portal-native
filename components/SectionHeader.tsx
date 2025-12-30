import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

type SectionHeaderProps = {
  icon: ImageSourcePropType
  title: string
  containerStyle?: object
  iconStyle?: object
  textStyle?: object
}

const SectionHeader = ({
  icon,
  title,
  containerStyle,
  iconStyle,
  textStyle,
}: SectionHeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image style={[styles.icon, iconStyle]} source={icon} />
      <Text style={[styles.heading, textStyle]}>{title}</Text>
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: '#484848',
  },
})
