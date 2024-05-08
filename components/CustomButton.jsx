import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress, buttonCustomStyle}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    className={`bg-secondary-100 py-4 px-5 rounded-lg text-center ${buttonCustomStyle}`}
    >
      <Text className="text-center text-primary font-[500] text-xl">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton