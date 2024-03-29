import { forwardRef } from 'react';
import { styles } from './style';
import { Text, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { MenuProps } from './menu';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '@/theme';
import { MenuButtons } from '../MenuButtons';

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet 
      ref={ref}
      index={0} 
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
            <FontAwesome name="close" size={24} onPress={onClose} color={theme.colors.white}/>
            <Text style={styles.title}>
                Comrece a criar agora
            </Text>
        </View>

        <View style={styles.options}>
          <MenuButtons title="Pin" icon='home'/>
          <MenuButtons title="Colagem" icon='paste'/>
          <MenuButtons title="Pasta" icon='folder'/>
        </View>
      </View>
    </BottomSheet>
  );
})