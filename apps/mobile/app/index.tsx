import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-gf-black">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-gf-blue font-mono text-xs tracking-[3px] mb-4">
          GF FITNESS
        </Text>
        <Text className="text-white font-heading text-4xl font-black text-center leading-[44px] mb-8">
          Change your body.{'\n'}Change your life.
        </Text>
        <Pressable
          className="bg-gf-blue active:bg-gf-dark-blue rounded-full px-7 py-4"
        >
          <Text className="text-white font-body font-bold tracking-wider text-sm">
            BECOME A MEMBER
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
